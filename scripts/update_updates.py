import json
import os
import re
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from urllib.parse import urljoin


# ==========================================
# CONFIGURATION
# ==========================================

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/137.0.0.0 Safari/537.36"
    ),
    "Accept": (
        "text/html,application/xhtml+xml,"
        "application/xml;q=0.9,image/avif,image/webp,"
        "*/*;q=0.8"
    ),
    "Accept-Language": "hi-IN,hi;q=0.9,en-US;q=0.8,en;q=0.7"
}

MAX_ITEMS = 100

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

OUTPUT_FILE = os.path.join(
    BASE_DIR,
    "data",
    "updates.json"
)

DGT_URL = "https://www.dgt.gov.in/hi/exam-corner"
DGT_BASE = "https://www.dgt.gov.in"

updates = []
seen = set()


# ==========================================
# COMMON FUNCTIONS
# ==========================================

def clean_text(text):
    if not text:
        return ""
    return " ".join(
        str(text).replace("\xa0", " ").split()
    ).strip()


def normalize_url(base, href):
    if not href:
        return ""
    href = str(href).strip()
    if not href or href.startswith("#"):
        return ""
    return urljoin(base, href)


def extract_date(text):
    text = clean_text(text)
    if not text:
        return ""

    patterns = [
        r"\b(\d{1,2})[-/\.](\d{1,2})[-/\.](\d{4})\b",
        r"\b(\d{1,2})[-/\.](\d{1,2})[-/\.](\d{2})\b"
    ]

    for pattern in patterns:
        match = re.search(pattern, text)
        if not match:
            continue
        day = int(match.group(1))
        month = int(match.group(2))
        year = int(match.group(3))
        if year < 100:
            year += 2000
        try:
            datetime(year, month, day)
            return f"{day:02d}-{month:02d}-{year:04d}"
        except ValueError:
            pass
    return ""


def date_for_sort(date_text):
    if not date_text:
        return datetime.min
    try:
        return datetime.strptime(date_text, "%d-%m-%Y")
    except ValueError:
        return datetime.min


def is_duplicate(title, link):
    title_key = clean_text(title).lower()
    link_key = clean_text(link).lower()
    key = link_key if link_key else title_key
    if not key:
        return True
    if key in seen:
        return True
    seen.add(key)
    return False


def add_update(source, title, date, link):
    title = clean_text(title)
    date = clean_text(date)
    link = clean_text(link)

    if len(title) < 5:
        return
    if is_duplicate(title, link):
        return
    updates.append({
        "source": source,
        "title": title,
        "date": date,
        "link": link
    })


# ==========================================
# DGT EXAM CORNER (IMPROVED - DGT LINK PRIORITY)
# ==========================================

def fetch_dgt():
    print("")
    print("==========================================")
    print("CHECKING DGT EXAM CORNER")
    print("==========================================")

    try:
        response = requests.get(DGT_URL, headers=HEADERS, timeout=60)
        response.raise_for_status()
        print("DGT HTTP Status:", response.status_code)

        soup = BeautifulSoup(response.text, "html.parser")

        # सभी संभावित रो/आइटम कलेक्ट करें
        rows = soup.select("table tr")
        rows += soup.select(".views-row, .views-field, article, li, .item-list li")
        rows += soup.select("div:has(a)")

        seen_texts = set()
        found = 0

        for element in rows:
            full_text = clean_text(element.get_text(" ", strip=True))
            if len(full_text) < 15:
                continue

            # ---------- टाइटल ----------
            title = ""
            for child in element.find_all(["td", "th", "div", "p", "span", "strong"]):
                txt = clean_text(child.get_text(" ", strip=True))
                if len(txt) > len(title) and "download" not in txt.lower() and "डाउनलोड" not in txt:
                    title = txt

            if not title or len(title) < 5:
                title = full_text

            # ---------- तारीख ----------
            date = extract_date(full_text)
            if date:
                title = re.sub(r"\b\d{1,2}[-/\.]\d{1,2}[-/\.]\d{4}\b", "", title)
                title = clean_text(title)

            # ---------- लिंक (DGT प्रायोरिटी के साथ) ----------
            link = ""
            all_links = element.find_all("a", href=True)

            # 1. सबसे पहले "Download" / "PDF" वाला लिंक ढूंढें
            for a in all_links:
                href = a.get("href", "").strip()
                a_text = clean_text(a.get_text(" ", strip=True)).lower()
                if "download" in a_text or "डाउनलोड" in a_text or "pdf" in a_text:
                    url = normalize_url(DGT_BASE, href)
                    if url:
                        link = url
                        break

            # 2. अगर न मिला, तो कोई भी ऐसा लिंक जो .pdf पर खत्म होता हो
            if not link:
                for a in all_links:
                    href = a.get("href", "").strip()
                    if href.lower().endswith(".pdf"):
                        url = normalize_url(DGT_BASE, href)
                        if url:
                            link = url
                            break

            # 3. अगर फिर भी न मिला, तो पहला वाला लिंक (DGT का इंटरनल पेज)
            if not link and all_links:
                first_href = all_links[0].get("href", "").strip()
                link = normalize_url(DGT_BASE, first_href)

            # 4. अगर लिंक DGT_BASE से शुरू नहीं होता, तो उसे छोड़ दें (क्योंकि आपको DGT पर जाना है)
            if link and not link.startswith(DGT_BASE):
                link = ""  # बाहरी लिंक को नज़रअंदाज करें

            # ---------- बेकार शीर्षक ----------
            lower_title = title.lower()
            if lower_title in ["title", "subject", "download", "attachment", "date", "s.no", "sr.no", "serial no"]:
                continue

            # ---------- डुप्लिकेट ----------
            key = (title, link) if link else (title, "")
            if key in seen_texts:
                continue
            seen_texts.add(key)

            # ---------- सेव ----------
            if title and len(title) >= 5 and link:
                add_update("DGT", title, date, link)
                found += 1
                print(f"  ✓ Added: {title[:60]}... -> {link[:60]}")

        print(f"✅ DGT updates collected: {found}")

        # ---------- FALLBACK (अगर टेबल/स्ट्रक्चर न मिले) ----------
        if found == 0:
            print("⚠️  No structured data found. Trying fallback on all links...")
            for a in soup.find_all("a", href=True):
                text = clean_text(a.get_text(" ", strip=True))
                if len(text) < 10:
                    continue
                link = normalize_url(DGT_BASE, a.get("href"))
                if not link or not link.startswith(DGT_BASE):
                    continue
                date = extract_date(text)
                if date:
                    text = re.sub(r"\b\d{1,2}[-/\.]\d{1,2}[-/\.]\d{4}\b", "", text)
                    text = clean_text(text)
                if len(text) >= 10:
                    add_update("DGT", text, date, link)
                    found += 1
            print(f"✅ Fallback added: {found}")

    except Exception as e:
        print("❌ DGT ERROR:", repr(e))


# ==========================================
# SCVT (बिना बदलाव)
# ==========================================

SCVT_KEYWORDS = [
    "admission", "registration", "merit", "counselling", "counseling",
    "seat", "allotment", "notice",
    "प्रवेश", "रजिस्ट्रेशन", "पंजीकरण", "मेरिट", "काउंसलिंग",
    "सीट", "आवंटन", "सूचना"
]

def fetch_scvt():
    print("")
    print("==========================================")
    print("CHECKING UP SCVT")
    print("==========================================")

    sites = [
        "https://www.vppup.in/",
        "https://www.scvtup.in/",
        "https://admissionscvtup.in/"
    ]

    for site_url in sites:
        try:
            response = requests.get(site_url, headers=HEADERS, timeout=40)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "html.parser")

            for a in soup.find_all("a", href=True):
                title = clean_text(a.get_text(" ", strip=True))
                if len(title) < 8:
                    continue
                title_lower = title.lower()
                matched = any(word.lower() in title_lower for word in SCVT_KEYWORDS)
                if not matched:
                    continue

                link = normalize_url(site_url, a.get("href"))
                date = extract_date(title)
                if not date:
                    date = datetime.now().strftime("%d-%m-%Y")

                add_update("UP SCVT", title, date, link)

        except Exception as e:
            print("SCVT ERROR:", site_url, repr(e))


# ==========================================
# SORT, SAVE, SHOW
# ==========================================

def sort_updates():
    updates.sort(
        key=lambda item: date_for_sort(item.get("date", "")),
        reverse=True
    )


def save_updates():
    sort_updates()
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    final_updates = updates[:MAX_ITEMS]
    with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
        json.dump(final_updates, file, ensure_ascii=False, indent=2)

    print("")
    print("==========================================")
    print("SAVED:", len(final_updates), "UPDATES")
    print("FILE:", OUTPUT_FILE)
    print("==========================================")


def show_results():
    print("")
    print("==========================================")
    print("LATEST OFFICIAL UPDATES")
    print("==========================================")
    for index, item in enumerate(updates[:MAX_ITEMS], 1):
        print("")
        print(index, "|", item.get("date", ""))
        print(item.get("title", ""))
        print(item.get("link", ""))
    print("")
    print("==========================================")


# ==========================================
# MAIN
# ==========================================

if __name__ == "__main__":
    print("")
    print("=" * 60)
    print("ITI STUDY CENTRE")
    print("OFFICIAL NOTIFICATIONS AUTO UPDATER")
    print("=" * 60)

    fetch_dgt()
    fetch_scvt()
    sort_updates()
    save_updates()
    show_results()

    print("")
    print("UPDATE SCRIPT FINISHED")
    print("=" * 60)

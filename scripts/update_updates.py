import json
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
        "AppleWebKit/537.36 Chrome/137 Safari/537.36"
    )
}

MAX_ITEMS = 10

updates = []
seen = set()

# ==========================================
# COMMON FUNCTIONS
# ==========================================

def normalize_url(base, href):

    if not href:
        return ""

    return urljoin(base, href.strip())


def clean_text(text):

    if text is None:
        return ""

    return " ".join(text.split()).strip()


def is_duplicate(title):

    key = title.lower()

    if key in seen:
        return True

    seen.add(key)

    return False


def add_update(source, title, date, url):

    title = clean_text(title)

    if len(title) < 10:
        return

    if is_duplicate(title):
        return

    updates.append({
        "source": source,
        "title": title,
        "date": date,
        "link": url
    })


# ==========================================
# FILTER KEYWORDS
# ==========================================

DGT_KEYWORDS = [
    "exam",
    "examination",
    "schedule",
    "result",
    "notification",
    "notice",
    "cbt",
    "cts",
    "aitt",
    "परीक्षा",
    "परिणाम",
    "सूचना",
    "शेड्यूल"
]

SCVT_KEYWORDS = [
    "admission",
    "registration",
    "merit",
    "counselling",
    "seat",
    "allotment",
    "notice",
    "प्रवेश",
    "रजिस्ट्रेशन",
    "मेरिट",
    "काउंसलिंग",
    "सीट"
]
# ==========================================
# DGT EXAM CORNER
# ==========================================

def fetch_dgt():

    print("Checking DGT Exam Corner...")

    base = "https://dgt.gov.in"
    url = "https://dgt.gov.in/hi/exam-corner"

    try:

        response = requests.get(
            url,
            headers=HEADERS,
            timeout=30
        )

        response.raise_for_status()

        soup = BeautifulSoup(
            response.text,
            "lxml"
        )

        table = soup.select_one("table.views-table")

        if table is None:
            print("DGT table not found")
            return

        rows = table.select("tbody tr")

        print("Rows Found :", len(rows))

        for row in rows:

            cols = row.find_all("td")

            if len(cols) < 4:
                continue

            title = clean_text(
                cols[1].get_text(" ", strip=True)
            )

            details = clean_text(
                cols[2].get_text(" ", strip=True)
            )

            link = cols[3].find("a")

            if not link:
                continue

            href = normalize_url(
                base,
                link.get("href")
            )

            add_update(
                "DGT",
                title,
                details,
                href
            )

            if len(updates) >= MAX_ITEMS:
                return

    except Exception as e:

        print("DGT ERROR :", e)
        # ==========================================
# UP SCVT / VPPUP
# ==========================================

def fetch_scvt():

    print("Checking UP SCVT...")

    sites = [

        "https://www.vppup.in/",
        "https://www.scvtup.in/",
        "https://admissionscvtup.in/"

    ]

    try:

        for url in sites:

            response = requests.get(
                url,
                headers=HEADERS,
                timeout=30
            )

            response.raise_for_status()

            soup = BeautifulSoup(
                response.text,
                "lxml"
            )

            # All Links

            for a in soup.find_all("a"):

                title = clean_text(
                    a.get_text(" ", strip=True)
                )

                if len(title) < 8:
                    continue

                matched = False

                for word in SCVT_KEYWORDS:

                    if word.lower() in title.lower():

                        matched = True
                        break

                if not matched:
                    continue

                href = normalize_url(
                    url,
                    a.get("href")
                )

                add_update(
                    "UP SCVT",
                    title,
                    datetime.now().strftime("%d-%m-%Y"),
                    href
                )

                if len(updates) >= MAX_ITEMS:
                    return

            # Popup Buttons

            for btn in soup.find_all("button"):

                title = clean_text(
                    btn.get_text(" ", strip=True)
                )

                if len(title) < 8:
                    continue

                matched = False

                for word in SCVT_KEYWORDS:

                    if word.lower() in title.lower():

                        matched = True
                        break

                if not matched:
                    continue

                add_update(
                    "UP SCVT",
                    title,
                    datetime.now().strftime("%d-%m-%Y"),
                    url
                )

                if len(updates) >= MAX_ITEMS:
                    return

    except Exception as e:

        print("SCVT ERROR :", e)
        # ==========================================
# UP SCVT / VPPUP
# ==========================================

def fetch_scvt():

    print("Checking UP SCVT...")

    sites = [

        "https://www.vppup.in/",
        "https://www.scvtup.in/",
        "https://admissionscvtup.in/"

    ]

    try:

        for url in sites:

            response = requests.get(
                url,
                headers=HEADERS,
                timeout=30
            )

            response.raise_for_status()

            soup = BeautifulSoup(
                response.text,
                "lxml"
            )

            # All Links

            for a in soup.find_all("a"):

                title = clean_text(
                    a.get_text(" ", strip=True)
                )

                if len(title) < 8:
                    continue

                matched = False

                for word in SCVT_KEYWORDS:

                    if word.lower() in title.lower():

                        matched = True
                        break

                if not matched:
                    continue

                href = normalize_url(
                    url,
                    a.get("href")
                )

                add_update(
                    "UP SCVT",
                    title,
                    datetime.now().strftime("%d-%m-%Y"),
                    href
                )

                if len(updates) >= MAX_ITEMS:
                    return

            # Popup Buttons

            for btn in soup.find_all("button"):

                title = clean_text(
                    btn.get_text(" ", strip=True)
                )

                if len(title) < 8:
                    continue

                matched = False

                for word in SCVT_KEYWORDS:

                    if word.lower() in title.lower():

                        matched = True
                        break

                if not matched:
                    continue

                add_update(
                    "UP SCVT",
                    title,
                    datetime.now().strftime("%d-%m-%Y"),
                    url
                )

                if len(updates) >= MAX_ITEMS:
                    return

    except Exception as e:

        print("SCVT ERROR :", e)
        

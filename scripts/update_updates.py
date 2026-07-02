import json
import requests
from bs4 import BeautifulSoup
from datetime import datetime

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

    href = href.strip()

    if href.startswith("http"):
        return href

    if href.startswith("/"):
        return base.rstrip("/") + href

    return base.rstrip("/") + "/" + href


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


def add_update(source, title, url):

    title = clean_text(title)

    if len(title) < 10:
        return

    if is_duplicate(title):
        return

    updates.append({

        "source": source,

        "title": title,

        "date": datetime.now().strftime("%d %B %Y"),

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

        soup = BeautifulSoup(response.text, "lxml")

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

            link_tag = cols[3].find("a")

            if not link_tag:
                continue

            href = normalize_url(
                base,
                link_tag.get("href")
            )

            add_update(
                "DGT",
                title,
                href
            )

            if updates:
                updates[-1]["date"] = details

            if len(updates) >= MAX_ITEMS:
                return

    except Exception as e:

        print("DGT ERROR :", e)
        # ==========================================
# UP SCVT / VPPUP
# ==========================================

def fetch_scvt():

    print("Checking UP SCVT...")

    base = "https://www.vppup.in"

    urls = [

        "https://www.vppup.in/",
        "https://www.scvtup.in/",
        "https://admissionscvtup.in/"

    ]

    try:

        for url in urls:

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

            # Links

            for a in soup.find_all("a"):

                title = clean_text(

                    a.get_text()

                )

                if len(title) < 8:

                    continue

                ok = False

                for word in SCVT_KEYWORDS:

                    if word.lower() in title.lower():

                        ok = True
                        break

                if not ok:

                    continue

                href = normalize_url(

                    base,

                    a.get("href")

                )

                add_update(

                    "UP SCVT",

                    title,

                    href

                )

                if len(updates) >= MAX_ITEMS:

                    return

            # Popup Buttons

            for button in soup.find_all("button"):

                title = clean_text(

                    button.get_text()

                )

                if len(title) < 8:

                    continue

                ok = False

                for word in SCVT_KEYWORDS:

                    if word.lower() in title.lower():

                        ok = True
                        break

                if ok:

                    add_update(

                        "UP SCVT",

                        title,

                        url

                    )

    except Exception as e:

        print("SCVT ERROR :", e)
        # ==========================================
# RUN SCRAPERS
# ==========================================

print("----------------------------------------")
print("Starting Official Update Checker")
print("----------------------------------------")

fetch_dgt()

if len(updates) < MAX_ITEMS:
    fetch_scvt()

# ==========================================
# LIMIT RESULTS
# ==========================================

updates = updates[:MAX_ITEMS]

# ==========================================
# SAVE JSON
# ==========================================

output = []

for i, item in enumerate(updates, start=1):

    output.append({

        "id": i,

        "source": item["source"],

        "title": item["title"],

        "date": item["date"],

        "link": item["link"]

    })

with open(
    "data/updates.json",
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        output,
        f,
        ensure_ascii=False,
        indent=4
    )

print("----------------------------------------")
print("Official Updates Saved Successfully")
print("Total Updates :", len(output))
print("----------------------------------------")


import json
import os
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
    )
}

MAX_ITEMS = 10

OUTPUT_FILE = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "data",
    "updates.json"
)

updates = []
seen = set()


# ==========================================
# COMMON FUNCTIONS
# ==========================================

def normalize_url(base, href):
    if not href:
        return ""

    href = href.strip()

    if href.startswith("#"):
        return ""

    return urljoin(base, href)


def clean_text(text):
    if not text:
        return ""

    return " ".join(text.split()).strip()


def is_duplicate(title):
    key = clean_text(title).lower()

    if not key:
        return True

    if key in seen:
        return True

    seen.add(key)
    return False


def add_update(source, title, date, url):
    title = clean_text(title)
    date = clean_text(date)
    url = clean_text(url)

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
# KEYWORDS
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
    "शेड्यूल",
    "परीक्षा कार्यक्रम",
    "संशोधित कार्यक्रम"
]

SCVT_KEYWORDS = [
    "admission",
    "registration",
    "merit",
    "counselling",
    "counseling",
    "seat",
    "allotment",
    "notice",
    "प्रवेश",
    "रजिस्ट्रेशन",
    "पंजीकरण",
    "मेरिट",
    "काउंसलिंग",
    "सीट",
    "आवंटन"
]


# ==========================================
# DATE HELPERS
# ==========================================

def parse_date(value):
    """
    Website से मिलने वाली अलग-अलग date formats को
    datetime object में बदलने की कोशिश करता है।
    """

    if not value:
        return None

    value = clean_text(value)

    formats = [
        "%d-%m-%Y",
        "%d/%m/%Y",
        "%d.%m.%Y",
        "%d-%m-%y",
        "%d/%m/%y",
        "%d %B %Y",
        "%d %b %Y",
        "%Y-%m-%d"
    ]

    for fmt in formats:
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            pass

    return None


def date_for_sort(value):
    parsed = parse_date(value)

    if parsed:
        return parsed

    return datetime.min


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
            "html.parser"
        )

        # --------------------------------------
        # DGT table
        # --------------------------------------

        table = soup.select_one("table.views-table")

        if table:

            rows = table.select("tbody tr")

            print("DGT Rows Found:", len(rows))

            for row in rows:

                cols = row.find_all("td")

                if len(cols) < 3:
                    continue

                # सामान्यतः:
                # Date | Title | Details | Download

                date = clean_text(
                    cols[0].get_text(" ", strip=True)
                )

                title = clean_text(
                    cols[1].get_text(" ", strip=True)
                )

                details = ""

                if len(cols) >= 3:
                    details = clean_text(
                        cols[2].get_text(" ", strip=True)
                    )

                link = row.find("a")

                href = ""

                if link:
                    href = normalize_url(
                        base,
                        link.get("href")
                    )

                # यदि title खाली हो तो details use करें
                if len(title) < 10:
                    title = details

                # ----------------------------------
                # केवल relevant DGT notices
                # ----------------------------------

                combined = (
                    title + " " + details
                ).lower()

                matched = any(
                    word.lower() in combined
                    for word in DGT_KEYWORDS
                )

                if not matched:
                    continue

                add_update(
                    "DGT",
                    title,
                    date,
                    href
                )

        # --------------------------------------
        # Fallback: यदि table structure बदल जाए
        # --------------------------------------

        if not table:

            print(
                "DGT table not found - using fallback parser"
            )

            for item in soup.find_all(
                ["article", "li", "tr"]
            ):

                text = clean_text(
                    item.get_text(" ", strip=True)
                )

                if len(text) < 15:
                    continue

                matched = any(
                    word.lower() in text.lower()
                    for word in DGT_KEYWORDS
                )

                if not matched:
                    continue

                link = item.find("a")

                href = ""

                if link:
                    href = normalize_url(
                        base,
                        link.get("href")
                    )

               

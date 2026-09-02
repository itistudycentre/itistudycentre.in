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
    )
}

MAX_ITEMS = 10

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

updates = []
seen = set()


# ==========================================
# COMMON FUNCTIONS
# ==========================================

def clean_text(text):

    if not text:
        return ""

    return " ".join(
        str(text).split()
    ).strip()


def normalize_url(base, href):

    if not href:
        return ""

    href = href.strip()

    if not href:
        return ""

    return urljoin(
        base,
        href
    )


def is_duplicate(title):

    key = clean_text(
        title
    ).lower()

    if not key:
        return True

    if key in seen:
        return True

    seen.add(key)

    return False


def add_update(
    source,
    title,
    date,
    url
):

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
# DATE FUNCTIONS
# ==========================================

def extract_date(text):

    if not text:
        return ""

    text = clean_text(text)

    # DD-MM-YYYY
    match = re.search(
        r"\b(\d{1,2})-(\d{1,2})-(\d{4})\b",
        text
    )

    if match:

        return (
            f"{int(match.group(1)):02d}-"
            f"{int(match.group(2)):02d}-"
            f"{match.group(3)}"
        )

    # DD/MM/YYYY
    match = re.search(
        r"\b(\d{1,2})/(\d{1,2})/(\d{4})\b",
        text
    )

    if match:

        return (
            f"{int(match.group(1)):02d}-"
            f"{int(match.group(2)):02d}-"
            f"{match.group(3)}"
        )

    # DD.MM.YYYY
    match = re.search(
        r"\b(\d{1,2})\.(\d{1,2})\.(\d{4})\b",
        text
    )

    if match:

        return (
            f"{int(match.group(1)):02d}-"
            f"{int(match.group(2)):02d}-"
            f"{match.group(3)}"
        )

    return ""


def date_for_sort(value):

    if not value:
        return datetime.min

    try:

        return datetime.strptime(
            value,
            "%d-%m-%Y"
        )

    except ValueError:

        return datetime.min


# ==========================================
# DGT EXAM CORNER
# ==========================================

def fetch_dgt():

    print(
        "Checking DGT Exam Corner..."
    )

    base = "https://www.dgt.gov.in"

    url = (
        "https://www.dgt.gov.in/"
        "hi/exam-corner"
    )

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

        table = soup.select_one(
            "table.views-table"
        )

        if not table:

            print(
                "DGT table not found."
            )

            return

        rows = table.select(
            "tbody tr"
        )

        print(
            "DGT Rows Found:",
            len(rows)
        )

        for row in rows:

            cols = row.find_all("td")

            # Actual DGT structure:
            #
            # 0 = S.No
            # 1 = Title
            # 2 = Details
            # 3 = Attachment

            if len(cols) < 3:
                continue

            # ------------------------------
            # TITLE
            # ------------------------------

            title = clean_text(
                cols[1].get_text(
                    " ",
                    strip=True
                )
            )

            # ------------------------------
            # DETAILS
            # ------------------------------

            details = clean_text(
                cols[2].get_text(
                    " ",
                    strip=True
                )
            )

            # ------------------------------
            # DATE IS INSIDE DETAILS
            # ------------------------------

            date = extract_date(
                details
            )

            # ------------------------------
            # DOWNLOAD LINK
            # ------------------------------

            href = ""

            # पहले attachment column
            if len(cols) >= 4:

                link = cols[3].find("a")

                if link:

                    href = normalize_url(
                        base,
                        link.get("href")
                    )

            # fallback - पूरे row में link
            if not href:

                link = row.find("a")

                if link:

                    href = normalize_url(
                        base,
                        link.get("href")
                    )

            # ------------------------------
            # ADD
            # ------------------------------

            add_update(
                "DGT",
                title,
                date,
                href
            )

        print(
            "DGT Updates Collected:",
            len(updates)
        )

    except Exception as e:

        print(
            "DGT ERROR:",
            e
        )


# ==========================================
# UP SCVT / VPPUP
# ==========================================

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


def fetch_scvt():

    print(
        "Checking UP SCVT..."
    )

    sites = [

        "https://www.vppup.in/",
        "https://www.scvtup.in/",
        "https://admissionscvtup.in/"

    ]

    for site_url in sites:

        try:

            response = requests.get(
                site_url,
                headers=HEADERS,
                timeout=30
            )

            response.raise_for_status()

            soup = BeautifulSoup(
                response.text,
                "html.parser"
            )

            found = 0

            # ----------------------------------
            # LINKS
            # ----------------------------------

            for a in soup.find_all("a"):

                title = clean_text(
                    a.get_text(
                        " ",
                        strip=True
                    )
                )

                if len(title) < 8:
                    continue

                title_lower = title.lower()

                matched = any(
                    word.lower()
                    in title_lower
                    for word in SCVT_KEYWORDS
                )

                if not matched:
                    continue

                href = normalize_url(
                    site_url,
                    a.get("href")
                )

                date = extract_date(
                    title
                )

                if not date:

                    date = datetime.now().strftime(
                        "%d-%m-%Y"
                    )

                add_update(
                    "UP SCVT",
                    title,
                    date,
                    href
                )

                found += 1

                if len(updates) >= MAX_ITEMS:
                    return

            # ----------------------------------
            # BUTTONS
            # ----------------------------------

            for button in soup.find_all(
                "button"
            ):

                title = clean_text(
                    button.get_text(
                        " ",
                        strip=True
                    )
                )

                if len(title) < 8:
                    continue

                title_lower = title.lower()

                matched = any(
                    word.lower()
                    in title_lower
                    for word in SCVT_KEYWORDS
                )

                if not matched:
                    continue

                add_update(
                    "UP SCVT",
                    title,
                    datetime.now().strftime(
                        "%d-%m-%Y"
                    ),
                    site_url
                )

                found += 1

                if len(updates) >= MAX_ITEMS:
                    return

            print(
                "SCVT checked:",
                site_url,
                "| Found:",
                found
            )

        except Exception as e:

            print(
                "SCVT ERROR:",
                site_url,
                e
            )

            continue


# ==========================================
# SORT
# ==========================================

def sort_updates():

    global updates

    updates.sort(
        key=lambda item:
        date_for_sort(
            item.get(
                "date",
                ""
            )
        ),
        reverse=True
    )


# ==========================================
# SAVE JSON
# ==========================================

def save_updates():

    sort_updates()

    os.makedirs(
        os.path.dirname(
            OUTPUT_FILE
        ),
        exist_ok=True
    )

    # --------------------------------------
    # केवल successful data save करें
    # --------------------------------------

    if not updates:

        print(
            "No updates collected."
        )

        # पुराने JSON को delete नहीं करें
        return

    final_updates = updates[
        :MAX_ITEMS
    ]

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as f:

        json.dump(
            final_updates,
            f,
            ensure_ascii=False,
            indent=2
        )

    print(
        "Saved:",
        len(final_updates),
        "updates"
    )

    print(
        "Output:",
        OUTPUT_FILE
    )


# ==========================================
# MAIN
# ==========================================

if __name__ == "__main__":

    print(
        "=" * 60
    )

    print(
        "ITI STUDY CENTRE"
    )

    print(
        "OFFICIAL UPDATES AUTO UPDATE"
    )

    print(
        "=" * 60
    )

    # DGT first
    fetch_dgt()

    # SCVT second
    fetch_scvt()

    # Latest first
    sort_updates()

    # Save JSON
    save_updates()

    print(
        "=" * 60
    )

    print(
        "LATEST UPDATES:"
    )

    print(
        "=" * 60
    )

    for index, item in enumerate(
        updates[:MAX_ITEMS],
        start=1
    ):

        print(
            index,
            "|",
            item["source"],
            "|",
            item["date"],
            "|",
            item["title"]
        )

    print(
        "=" * 60
    )

    print(
        "UPDATE PROCESS COMPLETED"
    )

    print(
        "=" * 60
    )

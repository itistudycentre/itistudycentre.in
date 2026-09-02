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

    if not href:
        return ""

    if href.startswith("#"):
        return ""

    return urljoin(base, href)


def extract_date(text):
    """
    अलग-अलग date formats में से DD-MM-YYYY निकालता है।
    """

    text = clean_text(text)

    if not text:
        return ""

    patterns = [
        r"\b(\d{1,2})[-/\.](\d{1,2})[-/\.](\d{4})\b",
        r"\b(\d{1,2})[-/\.](\d{1,2})[-/\.](\d{2})\b"
    ]

    for pattern in patterns:

        match = re.search(
            pattern,
            text
        )

        if not match:
            continue

        day = int(match.group(1))
        month = int(match.group(2))
        year = int(match.group(3))

        if year < 100:
            year += 2000

        try:

            datetime(
                year,
                month,
                day
            )

            return (
                f"{day:02d}-"
                f"{month:02d}-"
                f"{year:04d}"
            )

        except ValueError:
            pass

    return ""


def date_for_sort(date_text):

    if not date_text:
        return datetime.min

    try:

        return datetime.strptime(
            date_text,
            "%d-%m-%Y"
        )

    except ValueError:

        return datetime.min


def is_pdf(url):
    if not url:
        return False

    return (
        ".pdf" in url.lower()
        or "application/pdf" in url.lower()
    )


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


def add_update(
    source,
    title,
    date,
    link
):

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
# DGT DOWNLOAD LINK FINDER
# ==========================================

def find_download_link(row):

    """
    DGT की row में से वास्तविक PDF/download link
    खोजता है।

    पहले Download/Attachment वाले link को priority देता है।
    """

    links = row.find_all("a", href=True)

    if not links:
        return ""

    # --------------------------------------
    # 1. Download / Attachment text
    # --------------------------------------

    for a in links:

        text = clean_text(
            a.get_text(" ", strip=True)
        ).lower()

        href = a.get("href", "")

        if (
            "download" in text
            or "डाउनलोड" in text
            or "attachment" in text
            or "document" in text
            or "pdf" in text
        ):

            url = normalize_url(
                DGT_BASE,
                href
            )

            if url:
                return url

    # --------------------------------------
    # 2. PDF link
    # --------------------------------------

    for a in links:

        href = a.get("href", "")

        url = normalize_url(
            DGT_BASE,
            href
        )

        if is_pdf(url):
            return url

    # --------------------------------------
    # 3. अंतिम fallback
    # --------------------------------------

    for a in links:

        href = a.get("href", "")

        url = normalize_url(
            DGT_BASE,
            href
        )

        if url:
            return url

    return ""


# ==========================================
# DGT EXAM CORNER
# ==========================================

def fetch_dgt():

    print("")
    print("==========================================")
    print("CHECKING DGT EXAM CORNER")
    print("==========================================")

    try:

        response = requests.get(
            DGT_URL,
            headers=HEADERS,
            timeout=60
        )

        response.raise_for_status()

        print(
            "DGT HTTP:",
            response.status_code
        )

        soup = BeautifulSoup(
            response.text,
            "html.parser"
        )

        # --------------------------------------
        # Find all tables
        # --------------------------------------

        tables = soup.find_all("table")

        print(
            "DGT tables found:",
            len(tables)
        )

        found_rows = 0

        # ======================================
        # METHOD 1
        # Table rows
        # ======================================

        for table in tables:

            rows = table.find_all("tr")

            for row in rows:

                cols = row.find_all(
                    ["td", "th"]
                )

                if len(cols) < 2:
                    continue

                row_text = clean_text(
                    row.get_text(
                        " ",
                        strip=True
                    )
                )

                if len(row_text) < 10:
                    continue

                # ----------------------------------
                # Find title
                # ----------------------------------

                title = ""

                # पहले Download column हटाकर
                # सबसे meaningful cell ढूँढें

                for col in cols:

                    text = clean_text(
                        col.get_text(
                            " ",
                            strip=True
                        )
                    )

                    lower = text.lower()

                    if not text:
                        continue

                    if (
                        "download" in lower
                        or "डाउनलोड" in lower
                    ):
                        continue

                    if len(text) > len(title):
                        title = text

                # ----------------------------------
                # Date
                # ----------------------------------

                date = extract_date(
                    row_text
                )

                # ----------------------------------
                # Link
                # ----------------------------------

                link = find_download_link(
                    row
                )

                # ----------------------------------
                # Remove date from title if needed
                # ----------------------------------

                if date:

                    title = re.sub(
                        r"\b\d{1,2}[-/\.]\d{1,2}[-/\.]\d{4}\b",
                        "",
                        title
                    )

                    title = clean_text(title)

                # ----------------------------------
                # Ignore table headings
                # ----------------------------------

                lower_title = title.lower()

                if lower_title in [
                    "title",
                    "subject",
                    "download",
                    "attachment",
                    "date",
                    "s.no",
                    "sr.no",
                    "serial no"
                ]:
                    continue

                # ----------------------------------
                # Add
                # ----------------------------------

                if title:

                    add_update(
                        "DGT",
                        title,
                        date,
                        link
                    )

                    found_rows += 1

        # ======================================
        # METHOD 2
        # Drupal views fallback
        # ======================================

        if found_rows == 0:

            print(
                "Table extraction failed."
            )

            print(
                "Using Drupal fallback..."
            )

            candidates = soup.select(
                ".views-row, "
                ".views-field, "
                "article, "
                "li"
            )

            for item in candidates:

                text = clean_text(
                    item.get_text(
                        " ",
                        strip=True
                    )
                )

                if len(text) < 15:
                    continue

                link = ""

                for a in item.find_all(
                    "a",
                    href=True
                ):

                    href = normalize_url(
                        DGT_BASE,
                        a.get("href")
                    )

                    a_text = clean_text(
                        a.get_text(
                            " ",
                            strip=True
                        )
                    ).lower()

                    if (
                        is_pdf(href)
                        or "download" in a_text
                        or "attachment" in a_text
                    ):

                        link = href
                        break

                if not link:

                    a = item.find(
                        "a",
                        href=True
                    )

                    if a:

                        link = normalize_url(
                            DGT_BASE,
                            a.get("href")
                        )

                date = extract_date(
                    text
                )

                title = text

                if date:

                    title = re.sub(
                        r"\b\d{1,2}[-/\.]\d{1,2}[-/\.]\d{4}\b",
                        "",
                        title
                    )

                title = clean_text(
                    title
                )

                if len(title) >= 10:

                    add_update(
                        "DGT",
                        title,
                        date,
                        link
                    )

        print(
            "DGT updates collected:",
            len(updates)
        )

    except Exception as e:

        print(
            "DGT ERROR:",
            repr(e)
        )


# ==========================================
# SCVT
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
    "आवंटन",
    "सूचना"

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

            response = requests.get(
                site_url,
                headers=HEADERS,
                timeout=40
            )

            response.raise_for_status()

            soup = BeautifulSoup(
                response.text,
                "html.parser"
            )

            for a in soup.find_all(
                "a",
                href=True
            ):

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

                link = normalize_url(
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
                    link
                )

        except Exception as e:

            print(
                "SCVT ERROR:",
                site_url,
                repr(e)
            )


# ==========================================
# SORT
# ==========================================

def sort_updates():

    updates.sort(
        key=lambda item:
        date_for_sort(
            item.get("date", "")
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

    final_updates = updates[:MAX_ITEMS]

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            final_updates,
            file,
            ensure_ascii=False,
            indent=2
        )

    print("")
    print("==========================================")
    print(
        "SAVED:",
        len(final_updates),
        "UPDATES"
    )
    print("FILE:", OUTPUT_FILE)
    print("==========================================")


# ==========================================
# SHOW RESULTS
# ==========================================

def show_results():

    print("")
    print("==========================================")
    print("LATEST OFFICIAL UPDATES")
    print("==========================================")

    for index, item in enumerate(
        updates[:MAX_ITEMS],
        1
    ):

        print("")
        print(
            index,
            "|",
            item.get("date", "")
        )

        print(
            item.get("title", "")
        )

        print(
            item.get("link", "")
        )

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

import json
import os
import re
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from urllib.parse import urljoin


# ==========================================
# CONFIG
# ==========================================

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/137.0.0.0 Safari/537.36"
    )
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

updates = []
seen = set()


# ==========================================
# COMMON
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

    return urljoin(
        base,
        href.strip()
    )


def extract_date(text):

    if not text:
        return ""

    text = clean_text(text)

    patterns = [
        r"\b(\d{1,2})-(\d{1,2})-(\d{4})\b",
        r"\b(\d{1,2})/(\d{1,2})/(\d{4})\b",
        r"\b(\d{1,2})\.(\d{1,2})\.(\d{4})\b"
    ]

    for pattern in patterns:

        match = re.search(
            pattern,
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

    try:

        return datetime.strptime(
            value,
            "%d-%m-%Y"
        )

    except:

        return datetime.min


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

    key = title.lower()

    if key in seen:
        return

    seen.add(key)

    updates.append({
        "source": source,
        "title": title,
        "date": date,
        "link": link
    })


# ==========================================
# DGT
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
            timeout=40
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
                "DGT table not found"
            )

            return


        rows = table.select(
            "tbody tr"
        )

        print(
            "DGT rows:",
            len(rows)
        )


        for row in rows:

            cols = row.find_all("td")

            if len(cols) < 3:
                continue


            # --------------------------------
            # DGT:
            # 0 = S.No
            # 1 = TITLE
            # 2 = DETAILS
            # 3 = DOWNLOAD
            # --------------------------------

            title = clean_text(
                cols[1].get_text(
                    " ",
                    strip=True
                )
            )


            details = clean_text(
                cols[2].get_text(
                    " ",
                    strip=True
                )
            )


            # Date केवल Details से
            date = extract_date(
                details
            )


            # --------------------------------
            # OFFICIAL DOWNLOAD LINK
            # --------------------------------

            link_url = ""


            if len(cols) >= 4:

                download = cols[3].find("a")

                if download:

                    href = download.get(
                        "href"
                    )

                    link_url = normalize_url(
                        base,
                        href
                    )


            # अगर attachment column में नहीं मिला
            if not link_url:

                download = row.find(
                    "a"
                )

                if download:

                    href = download.get(
                        "href"
                    )

                    link_url = normalize_url(
                        base,
                        href
                    )


            # --------------------------------
            # ADD
            # --------------------------------

            add_update(
                "DGT",
                title,
                date,
                link_url
            )


    except Exception as e:

        print(
            "DGT ERROR:",
            e
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


            for a in soup.find_all("a"):

                title = clean_text(
                    a.get_text(
                        " ",
                        strip=True
                    )
                )


                if len(title) < 8:
                    continue


                matched = any(
                    word.lower()
                    in title.lower()
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
                e
            )


# ==========================================
# SORT
# ==========================================

def sort_updates():

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
# SAVE
# ==========================================

def save_updates():

    sort_updates()

    if not updates:

        print(
            "No updates found."
        )

        return


    os.makedirs(
        os.path.dirname(
            OUTPUT_FILE
        ),
        exist_ok=True
    )


    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            updates[:MAX_ITEMS],
            file,
            ensure_ascii=False,
            indent=2
        )


    print(
        "Saved:",
        len(updates[:MAX_ITEMS]),
        "updates"
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
        "OFFICIAL UPDATES"
    )

    print(
        "=" * 60
    )


    fetch_dgt()

    fetch_scvt()

    sort_updates()

    save_updates()


    print(
        "=" * 60
    )

    for i, item in enumerate(
        updates[:MAX_ITEMS],
        1
    ):

        print(
            i,
            item["date"],
            item["title"],
            item["link"]
        )


    print(
        "=" * 60
    )

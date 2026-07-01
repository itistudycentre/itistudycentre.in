import json
import requests
from bs4 import BeautifulSoup

updates = []

headers = {
    "User-Agent": "Mozilla/5.0"
}

# -----------------------------
# DGT EXAM CORNER
# -----------------------------
try:
    url = "https://dgt.gov.in/hi/exam-corner"

    r = requests.get(url, headers=headers, timeout=20)

    soup = BeautifulSoup(r.text, "html.parser")

    links = soup.find_all("a")

    count = 0

    for link in links:

        title = link.get_text(strip=True)

        href = link.get("href")

        if not title:
            continue

        if len(title) < 8:
            continue

        if href is None:
            continue

        if href.startswith("/"):
            href = "https://dgt.gov.in" + href

        updates.append({
            "source": "DGT",
            "title": title,
            "url": href
        })

        count += 1

        if count >= 5:
            break

except Exception as e:
    print(e)

# -----------------------------
# SAVE JSON
# -----------------------------

with open("data/updates.json","w",encoding="utf-8") as f:

    json.dump(
        updates,
        f,
        ensure_ascii=False,
        indent=4
    )

print("Done")
# ==========================================
# UP SCVT / VPPUP
# ==========================================

def fetch_scvt():

    print("Checking UP SCVT...")

    urls = [

        "https://www.vppup.in/",
        "https://www.scvtup.in/",
        "https://admissionscvtup.in/"

    ]

    keywords = [

        "admission",
        "registration",
        "merit",
        "counselling",
        "seat",
        "allotment",
        "notification",

        "प्रवेश",
        "रजिस्ट्रेशन",
        "मेरिट",
        "काउंसलिंग",
        "सीट"

    ]

    for site in urls:

        try:

            response = requests.get(

                site,

                headers=HEADERS,

                timeout=20

            )

            soup = BeautifulSoup(

                response.text,

                "html.parser"

            )

            for link in soup.find_all("a"):

                title = link.get_text(strip=True)

                href = link.get("href")

                if not href:
                    continue

                if href.startswith("/"):
                    href = site.rstrip("/") + href

                ok = False

                for word in keywords:

                    if word.lower() in title.lower():

                        ok = True
                        break

                if not ok:
                    continue

                add_update(

                    "UP SCVT",

                    title,

                    href

                )

                if len(updates) >= MAX_UPDATES:

                    return

        except Exception as e:

            print(site, e)


# ==========================================
# RUN BOTH SOURCES
# ==========================================

fetch_dgt()

if len(updates) < MAX_UPDATES:

    fetch_scvt()
    # ==========================================
# SORT UPDATES
# ==========================================

updates = updates[:MAX_UPDATES]

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

        "link": item["url"]

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

print("--------------------------------")

print("Official Updates Saved Successfully")

print("Total Updates :", len(output))

print("--------------------------------")

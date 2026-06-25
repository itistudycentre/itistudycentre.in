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

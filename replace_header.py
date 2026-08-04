"""
replace_header.py
------------------
सारे HTML पेजों में जो भी पुराना/अलग-अलग हार्डकोडेड हेडर (<header>, <div class="main-header">, आदि)
मौजूद है उसे हटाकर एक ही यूनिफ़ॉर्म डायनामिक हेडर लोडर (header.html + js/header-loader.js) डाल देता है।

Run:  python replace_header.py
"""

import re
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent

SKIP_DIRS = {'.git', '.github', 'node_modules', 'venv', 'templates'}
SKIP_FILES = {'header.html', 'footer.html'}

LOADER_SNIPPET = (
    '\n<div id="header-container"></div>\n'
    '<script src="/js/header-loader.js" defer></script>\n'
)


def is_old_header(tag):
    if tag.name == 'header':
        return True
    if tag.name == 'div':
        classes = ' '.join(tag.get('class', []))
        tag_id = tag.get('id', '')
        if 'main-header' in classes or 'main-header' in tag_id:
            return True
        if tag_id == 'header-container':
            return True
    return False


def should_process(path: Path) -> bool:
    if path.name in SKIP_FILES:
        return False
    if any(part in SKIP_DIRS for part in path.parts):
        return False
    return True


def process(path: Path) -> bool:
    raw = path.read_text(encoding='utf-8', errors='ignore')
    soup = BeautifulSoup(raw, 'html.parser')

    if not soup.body:
        return False

    changed = False

    for tag in soup.find_all(is_old_header):
        tag.decompose()
        changed = True

    for script in soup.find_all('script'):
        src = script.get('src', '')
        if 'header-loader.js' in src:
            script.decompose()
            changed = True

    new_nodes = BeautifulSoup(LOADER_SNIPPET, 'html.parser')
    for child in reversed(list(new_nodes.contents)):
        soup.body.insert(0, child)
    changed = True

    if changed:
        path.write_text(str(soup), encoding='utf-8')
    return changed


def main():
    html_files = [p for p in ROOT.rglob('*.html') if should_process(p)]
    print(f"कुल {len(html_files)} फाइलें मिलीं।\n")
    fixed = 0
    for f in html_files:
        try:
            if process(f):
                fixed += 1
                print(f"ठीक हुआ: {f.relative_to(ROOT)}")
        except Exception as e:
            print(f"त्रुटि {f}: {e}")
    print(f"\nपूरा हुआ! {fixed}/{len(html_files)} फाइलें अपडेट की गईं।")


if __name__ == '__main__':
    main()

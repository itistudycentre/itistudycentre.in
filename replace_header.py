import os
from pathlib import Path
from bs4 import BeautifulSoup

ROOT_DIR = Path(".")  # आपका रूट फोल्डर

EXCLUDE_DIRS = ['node_modules', 'venv', '.git', 'static']
EXCLUDE_FILES = ['header.html', 'header-loader.js', 'replace_headers.py']

# यह कोड हर पेज के <body> के अंदर सबसे ऊपर जोड़ा जाएगा
HEADER_LOADER_CODE = '''
<div id="header-container"></div>
<script src="/js/header-loader.js"></script>
'''

def process_file(filepath):
    print(f"Processing: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # --- 1. पुराने सभी Headers / Navbars हटाएं ---
    for tag in soup.find_all(['header', 'nav']):
        if 'navbar' in tag.get('class', []) or tag.name == 'header':
            tag.decompose()
        elif tag.find_all('a', limit=3) and tag.parent.name == 'body':
            tag.decompose()

    # पुराना container और script हटाएं
    for div in soup.find_all('div', id='header-container'):
        div.decompose()
    for script in soup.find_all('script'):
        if script.get('src') and 'header-loader.js' in script.get('src'):
            script.decompose()

    # --- 2. नया Header Loader जोड़ें (body के अंदर सबसे ऊपर) ---
    body = soup.body
    if body:
        new_soup = BeautifulSoup(HEADER_LOADER_CODE, 'html.parser')
        for child in reversed(new_soup.contents):
            body.insert(0, child)
    else:
        soup.append(BeautifulSoup(HEADER_LOADER_CODE, 'html.parser'))

    # --- 3. फाइल सेव करें ---
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))
    print(f"✅ Updated: {filepath}")

def main():
    html_files = []
    for ext in ['*.html', '*.htm']:
        html_files.extend(ROOT_DIR.rglob(ext))

    for f in html_files:
        if any(excl in str(f) for excl in EXCLUDE_DIRS):
            continue
        if f.name in EXCLUDE_FILES:
            continue
        process_file(f)

if __name__ == "__main__":
    main()

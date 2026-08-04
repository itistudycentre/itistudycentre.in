import os
import re
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(".")
SKIP_FOLDERS = ['.git', '.github', 'node_modules', 'venv', 'static', 'assets']
HEADER_HTML = '''
<div id="header-container"></div>
<script src="/js/header-loader.js"></script>
'''

def is_header(tag):
    # अगर tag header या nav है तो हटाओ
    if tag.name in ['header', 'nav']:
        return True
    # अगर div है और उसमें header/nav जैसी class/id है
    if tag.name == 'div':
        classes = ' '.join(tag.get('class', [])) + ' ' + tag.get('id', '')
        if any(x in classes.lower() for x in ['header', 'nav', 'navbar', 'top', 'menu']):
            return True
        # अगर div के अंदर कम से कम 3 लिंक हैं और वह body के अंदर सबसे ऊपर है
        if len(tag.find_all('a')) >= 3 and tag.parent and tag.parent.name == 'body':
            return True
    return False

print("🔍 Scanning for HTML files...")
html_files = []
for ext in ['*.html', '*.htm']:
    html_files.extend(ROOT.rglob(ext))

# Filter out unwanted
html_files = [f for f in html_files if not any(x in str(f) for x in SKIP_FOLDERS)]
html_files = [f for f in html_files if f.name not in ['header.html', 'replace_headers.py']]

print(f"📂 Found {len(html_files)} files.")

for filepath in html_files:
    print(f"\n📄 Processing: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    changed = False
    # 1. Remove old headers
    for tag in soup.find_all(is_header):
        print(f"   🗑️  Removing: <{tag.name} class='{tag.get('class', '')}'>")
        tag.decompose()
        changed = True

    # Remove old container/scripts
    for div in soup.find_all('div', id='header-container'):
        div.decompose()
        changed = True
    for script in soup.find_all('script'):
        if script.get('src') and 'header-loader.js' in script.get('src'):
            script.decompose()
            changed = True

    # 2. Insert new header loader
    if soup.body:
        new_soup = BeautifulSoup(HEADER_HTML, 'html.parser')
        for child in reversed(new_soup.contents):
            soup.body.insert(0, child)
        changed = True
        print("   ✅ Inserted new header code.")

    # 3. Save
    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print("   💾 Saved.")
    else:
        print("   ℹ️  No changes needed.")

print("\n🎉 Done! Check the Actions logs for details.")

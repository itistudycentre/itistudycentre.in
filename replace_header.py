
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

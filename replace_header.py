import os
import re

NEW_HEADER = """<div id="header-placeholder"></div>
<script>
fetch('/header.html')
.then(r => r.text())
.then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
});
</script>
"""

for root, dirs, files in os.walk("."):
    if ".git" in root:
        continue

    for file in files:
        if file.endswith(".html"):

            path = os.path.join(root, file)

            with open(path, "r", encoding="utf-8") as f:
                html = f.read()

            pattern = r'<div class="main-header".*?<section class="hero-banner">'
            repl = NEW_HEADER + "\n\n<section class=\"hero-banner\">"

            new_html = re.sub(pattern, repl, html, flags=re.S)

            if new_html != html:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_html)

                print("Updated:", path)

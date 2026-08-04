import os
import re

new_header = '''
<div id="header-placeholder"></div>

<script>
fetch("/header.html")
.then(r=>r.text())
.then(html=>{
document.getElementById("header-placeholder").innerHTML=html;
});
</script>
'''

start = r'<!-- =========================================\s*HEADER.*?========================================= -->'
end = r'<!-- ===========================================\s*HERO'

pattern = re.compile(start + r'[\s\S]*?' + end, re.MULTILINE)

for root, dirs, files in os.walk("."):
    if ".git" in root:
        continue

    for file in files:
        if file.endswith(".html"):

            path = os.path.join(root,file)

            with open(path,"r",encoding="utf-8") as f:
                txt=f.read()

            txt2 = pattern.sub(new_header+"\n\n<!-- ===========================================\n    HERO",txt)

            if txt!=txt2:
                with open(path,"w",encoding="utf-8") as f:
                    f.write(txt2)

                print(path)

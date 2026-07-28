/* =====================================
   ITI STUDY CENTRE
   MAIN JAVASCRIPT v7.0 (SELF-SUFFICIENT)
===================================== */

document.addEventListener("DOMContentLoaded", function() {
    // ----- 1. हेडर/फूटर लोड करें (या खुद बनाएँ) -----
    initHeaderFooter();

    // ----- 2. बाकी फीचर्स -----
    initSearch();
    loadNews();
    loadNotes();
    loadEngineering();
    loadUpdates();
    updateFooterYear();
    initScrollTop();
    initContentProtection();
    console.log("ITI Study Centre v7.0 Loaded");
});

/* =====================================
   हेडर/फूटर लोडर (फेल होने पर Hardcoded)
===================================== */
function getRoot() {
    let path = window.location.pathname;
    let parts = path.split('/').filter(p => p && !p.includes('.html') && !p.includes('.'));
    let depth = parts.length;
    return depth === 0 ? './' : '../'.repeat(depth);
}

function initHeaderFooter() {
    let root = getRoot();

    // ---- 1. हेडर कंटेनर ढूँढें (अगर नहीं है तो बना दें) ----
    let headerContainer = document.getElementById('header') || document.getElementById('header-placeholder');
    if (!headerContainer) {
        headerContainer = document.createElement('div');
        headerContainer.id = 'header';
        document.body.insertBefore(headerContainer, document.body.firstChild);
    }

    // ---- 2. फूटर कंटेनर ढूँढें (अगर नहीं है तो बना दें) ----
    let footerContainer = document.getElementById('footer') || document.getElementById('footer-placeholder');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer';
        document.body.appendChild(footerContainer);
    }

    // ---- 3. हेडर लोड करें (अगर न मिले तो Hardcoded डालें) ----
    function renderHeader(data) {
        if (data && data.includes('ITI Study Centre')) {
            headerContainer.innerHTML = data;
        } else {
            // 🔥 Hardcoded Header (बिना "Suggestions" के)
            headerContainer.innerHTML = `
            <div class="main-header" style="background:#003366; padding:12px 0; border-bottom:3px solid #ffcc00;">
              <div class="container" style="max-width:1200px; margin:0 auto; padding:0 15px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between;">
                <div class="logo" style="font-size:1.4rem; font-weight:bold;">
                  <a href="/index.html" style="color:white; text-decoration:none;">ITI Study Centre</a>
                </div>
                <nav style="display:flex; flex-wrap:wrap; gap:5px 15px;">
                  <a href="/index.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">Home</a>
                  <a href="/iti-result.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">ITI Result</a>
                  <a href="/iti-study-centre-notes.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">ITI Notes</a>
                  <a href="/engineering-notes.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">Engineering Notes</a>
                  <a href="/questionbank.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">Question Bank</a>
                  <a href="/about.html" style="color:white; text-decoration:none; padding:5px 0; font-size:1rem;">About</a>
                </nav>
              </div>
            </div>
            <div id="breadcrumb" style="background:#f0f0f0; padding:8px 20px; font-size:0.9rem; border-bottom:1px solid #ddd;"></div>
            `;
        }
        initActiveMenu();
        generateBreadcrumb();
    }

    // ---- 4. फूटर लोड करें (अगर न मिले तो Hardcoded डालें) ----
    function renderFooter(data) {
        if (data && data.includes('2026')) {
            footerContainer.innerHTML = data;
        } else {
            // 🔥 Hardcoded Footer
            footerContainer.innerHTML = `
            <footer style="background:#222; color:#ccc; padding:20px 15px; text-align:center; margin-top:40px; border-top:4px solid #003366;">
              <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px 20px; margin-bottom:10px;">
                <a href="/disclaimer.html" style="color:#aaa; text-decoration:none;">Disclaimer</a>
                <a href="/privacy-policy.html" style="color:#aaa; text-decoration:none;">Privacy Policy</a>
                <a href="/terms.html" style="color:#aaa; text-decoration:none;">Terms</a>
                <a href="/contact.html" style="color:#aaa; text-decoration:none;">Contact</a>
              </div>
              <p style="margin:10px 0 0 0; color:#888;">© 2026 ITI Study Centre. All Rights Reserved.</p>
            </footer>
            `;
        }
    }

    // ---- फेच करें और रेंडर करें ----
    fetch(root + 'header.html')
        .then(r => r.text())
        .then(data => renderHeader(data))
        .catch(() => {
            fetch('header.html')
                .then(r => r.text())
                .then(data => renderHeader(data))
                .catch(() => renderHeader(null));
        });

    fetch(root + 'footer.html')
        .then(r => r.text())
        .then(data => renderFooter(data))
        .catch(() => {
            fetch('footer.html')
                .then(r => r.text())
                .then(data => renderFooter(data))
                .catch(() => renderFooter(null));
        });
}

/* =====================================
   एक्टिव मेनू
===================================== */
function initActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a, .nav-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
            link.style.color = '#ffcc00';
        }
    });
}

/* =====================================
   ब्रेडक्रंब
===================================== */
function generateBreadcrumb() {
    let bc = document.getElementById('breadcrumb');
    if (!bc) return;
    let path = window.location.pathname.replace(/^\/|\/$/g, '').split('/');
    let html = '<a href="/" style="text-decoration:none; color:#003366;">🏠 Home</a>';
    path.forEach((part, i) => {
        if (part.includes('.html')) {
            let name = part.replace('.html', '').replace(/-/g, ' ');
            html += ` &nbsp;›&nbsp; <span style="color:#555; font-weight:bold;">${name}</span>`;
        } else if (part) {
            let cum = '/' + path.slice(0, i + 1).join('/');
            html += ` &nbsp;›&nbsp; <a href="${cum}/" style="text-decoration:none; color:#003366;">${part.replace(/-/g, ' ')}</a>`;
        }
    });
    bc.innerHTML = html;
}

/* =====================================
   SEARCH
===================================== */
function initSearch() {
    const input = document.querySelector(".search-section input");
    if (!input) return;
    input.addEventListener("keyup", function () {
        const keyword = this.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".card,.result-card,.updates-card,.feature-card");
        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            if (text.includes(keyword)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

/* =====================================
   COMMON JSON LOADER
===================================== */
async function loadJSON(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(file);
        return await response.json();
    } catch (error) {
        console.error("Loading Error :", file);
        return [];
    }
}

/* =====================================
   NEWS
===================================== */
async function loadNews() {
    const news = await loadJSON("data/news.json");
    if (!news.length) return;
    console.log("News Loaded", news);
}

/* =====================================
   NOTES
===================================== */
async function loadNotes() {
    const notes = await loadJSON("data/notes.json");
    if (!notes.length) return;
    console.log("Notes Loaded", notes);
}

/* =====================================
   ENGINEERING
===================================== */
async function loadEngineering() {
    const engineering = await loadJSON("data/engineering.json");
    if (!engineering.length) return;
    console.log("Engineering Loaded", engineering);
}

/* =====================================
   LATEST OFFICIAL UPDATES
===================================== */
async function loadUpdates() {
    const updates = await loadJSON("data/updates.json");
    const container = document.getElementById("official-updates");
    if (!container) return;
    if (!updates.length) {
        container.innerHTML = "<p>No latest updates available.</p>";
        return;
    }
    let html = "<ul>";
    updates.forEach(item => {
        html += `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`;
    });
    html += "</ul>";
    container.innerHTML = html;
}

/* =====================================
   FOOTER YEAR
===================================== */
function updateFooterYear() {
    const year = document.getElementById("current-year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
}

/* =====================================
   SCROLL TO TOP
===================================== */
function initScrollTop() {
    const btn = document.getElementById("scrollTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* =====================================
   CONTENT PROTECTION
===================================== */
function initContentProtection() {
    const path = window.location.pathname.toLowerCase();
    const protectedPage = path.includes("/notes/") || path.includes("/engineering/");
    if (!protectedPage) return;
    console.log("Content Protection Enabled");
    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    document.addEventListener("dragstart", function (e) { e.preventDefault(); });
    document.addEventListener("copy", function (e) { e.preventDefault(); alert("Copying is disabled."); });
    document.addEventListener("cut", function (e) { e.preventDefault(); });
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.key.toLowerCase() === "c") e.preventDefault();
        if (e.ctrlKey && e.key.toLowerCase() === "a") e.preventDefault();
        if (e.ctrlKey && e.key.toLowerCase() === "x") e.preventDefault();
        if (e.ctrlKey && e.key.toLowerCase() === "s") e.preventDefault();
    });
}
// ---- पेज खुलते ही टॉप पर स्क्रॉल करें ----
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});
console.log("ITI Study Centre v7.0 Self-Sufficient Loaded");

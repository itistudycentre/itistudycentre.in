/* =====================================
   ITI STUDY CENTRE v8.0
   (अल्टीमेट क्लीनअप - डबल हेडर/फूटर खत्म)
===================================== */

document.addEventListener("DOMContentLoaded", function() {
    // ----- 1. सबसे पहले: सारे पुराने हेडर/फूटर कंटेनर हटाएँ (ब्रूट फोर्स) -----
    const headerSelectors = ['#header', '#header-placeholder', 'header', '.main-header'];
    const footerSelectors = ['#footer', '#footer-placeholder', 'footer', '.main-footer'];
    
    headerSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el.id === 'header' || el.id === 'header-placeholder' || el.tagName === 'HEADER') {
                el.remove();
            }
        });
    });
    
    footerSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el.id === 'footer' || el.id === 'footer-placeholder' || el.tagName === 'FOOTER') {
                el.remove();
            }
        });
    });

    // ----- 2. नए कंटेनर बनाएँ (body की शुरुआत और अंत में) -----
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header-placeholder';
    document.body.insertBefore(headerContainer, document.body.firstChild);

    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-placeholder';
    document.body.appendChild(footerContainer);

    // ----- 3. रूट पाथ डिटेक्ट करें (सब-फोल्डर सपोर्ट) -----
    function getRoot() {
        let path = window.location.pathname;
        let parts = path.split('/').filter(p => p && !p.includes('.html') && !p.includes('.'));
        return parts.length === 0 ? './' : '../'.repeat(parts.length);
    }
    let root = getRoot();

    // ----- 4. हेडर लोड करें -----
    fetch(root + 'header.html')
        .then(r => r.text())
        .then(data => {
            headerContainer.innerHTML = data;
            initActiveMenu();
            generateBreadcrumb();
        })
        .catch(() => {
            headerContainer.innerHTML = '<p style="color:red; background:#ffe6e6; padding:10px;">⚠️ Header नहीं मिला। कृपया root folder में header.html अपलोड करें।</p>';
        });

    // ----- 5. फूटर लोड करें -----
    fetch(root + 'footer.html')
        .then(r => r.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(() => {
            footerContainer.innerHTML = '<p style="color:red; background:#ffe6e6; padding:10px;">⚠️ Footer नहीं मिला।</p>';
        });

    // ----- 6. एक्टिव मेनू हाइलाइट करें -----
    function initActiveMenu() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll('#header-placeholder a, .nav-link, nav a').forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            let target = href.replace(/^\//, '').split('?')[0];
            if (target === currentPage || (currentPage === 'index.html' && (target === '' || target === 'index.html'))) {
                link.style.fontWeight = 'bold';
                link.style.textDecoration = 'underline';
                link.style.color = '#ffcc00';
            }
        });
    }

    // ----- 7. ब्रेडक्रंब जनरेट करें (सुंदर और सही नामों के साथ) -----
    function generateBreadcrumb() {
        let bc = document.getElementById('breadcrumb');
        if (!bc) return;
        let path = window.location.pathname.replace(/^\/|\/$/g, '').split('/');
        let html = '<a href="/" style="text-decoration:none; color:#003366;">🏠 Home</a>';
        const folderMap = {
            'engineering': 'Engineering Notes',
            'notes': 'ITI Notes',
            'fitter': 'Fitter',
            'plumber': 'Plumber',
            'other-trades': 'Other Trades',
            'employability-skills': 'Employability Skills',
            'automobile': 'Automobile',
            'engineering-topics': 'Engineering Topics',
            'other-topics': 'Other Engineering Topics'
        };
        path.forEach((part, i) => {
            if (part.includes('.html')) {
                let name = part.replace('.html', '').replace(/-/g, ' ');
                html += ` &nbsp;›&nbsp; <span style="color:#555; font-weight:bold;">${name}</span>`;
            } else if (part) {
                let displayName = folderMap[part] || part.replace(/-/g, ' ');
                let cum = '/' + path.slice(0, i + 1).join('/');
                html += ` &nbsp;›&nbsp; <a href="${cum}/" style="text-decoration:none; color:#003366;">${displayName}</a>`;
            }
        });
        bc.innerHTML = html;
    }

    // ----- 8. बाकी फीचर्स (Search, Updates, Content Protection) -----
    initSearch();
    loadNews();
    loadNotes();
    loadEngineering();
    loadUpdates();
    initScrollTop();
    initContentProtection();
    console.log("ITI Study Centre v8.0 Loaded - Double Header Fixed!");
});

/* =====================================
   बाकी सारे पुराने फीचर्स
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
async function loadNews() { const news = await loadJSON("data/news.json"); if (!news.length) return; console.log("News Loaded", news); }
async function loadNotes() { const notes = await loadJSON("data/notes.json"); if (!notes.length) return; console.log("Notes Loaded", notes); }
async function loadEngineering() { const engineering = await loadJSON("data/engineering.json"); if (!engineering.length) return; console.log("Engineering Loaded", engineering); }
async function loadUpdates() {
    const updates = await loadJSON("data/updates.json");
    const container = document.getElementById("official-updates");
    if (!container) return;
    if (!updates.length) { container.innerHTML = "<p>No latest updates available.</p>"; return; }
    let html = "<ul>";
    updates.forEach(item => { html += `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`; });
    html += "</ul>";
    container.innerHTML = html;
}
function initScrollTop() {
    const btn = document.getElementById("scrollTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { btn.style.display = "block"; } else { btn.style.display = "none"; }
    });
    btn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });
}
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
console.log("ITI Study Centre v8.0 Final Loaded");

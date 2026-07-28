/* =====================================
   ITI STUDY CENTRE
   MAIN JAVASCRIPT v4.0 (FINAL WITH REMOVAL)
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    // ----- सबसे पहले: पुराने हार्डकोडेड हेडर/फूटर हटाएँ -----
    removeOldHeadersAndFooters();

    // ----- नया हेडर/फूटर लोड करें -----
    initHeaderFooter();

    // ----- बाकी फीचर्स -----
    initSearch();
    loadNews();
    loadNotes();
    loadEngineering();
    loadUpdates();
    updateFooterYear();
    initScrollTop();
    initContentProtection();
    console.log("ITI Study Centre v4.0 Loaded Successfully");
});

/* =====================================
   पुराने हार्डकोडेड हेडर/फूटर हटाएँ
===================================== */
function removeOldHeadersAndFooters() {
    // सभी संभावित हेडर सेलेक्टर्स
    const headerSelectors = [
        'header',
        '.main-header',
        'div#header',
        'div.header',
        '.header'
    ];
    const footerSelectors = [
        'footer',
        '.main-footer',
        'div#footer',
        'div.footer',
        '.footer'
    ];

    // हेडर हटाएँ
    headerSelectors.forEach(sel => {
        const elements = document.querySelectorAll(sel);
        elements.forEach(el => el.remove());
    });

    // फूटर हटाएँ
    footerSelectors.forEach(sel => {
        const elements = document.querySelectorAll(sel);
        elements.forEach(el => el.remove());
    });
}

/* =====================================
   हेडर/फूटर लोडर (यूनिवर्सल)
===================================== */
function getRoot() {
    let path = window.location.pathname;
    let parts = path.split('/').filter(p => p && !p.includes('.html') && !p.includes('.'));
    let depth = parts.length;
    return depth === 0 ? './' : '../'.repeat(depth);
}

function initHeaderFooter() {
    let root = getRoot();

    // ---- हेडर कंटेनर ----
    let headerContainer = document.getElementById('header-placeholder');
    if (!headerContainer) {
        headerContainer = document.createElement('div');
        headerContainer.id = 'header-placeholder';
        document.body.insertBefore(headerContainer, document.body.firstChild);
    }

    // ---- फूटर कंटेनर ----
    let footerContainer = document.getElementById('footer-placeholder');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer-placeholder';
        document.body.appendChild(footerContainer);
    }

    // ---- हेडर लोड करें ----
    fetch(root + 'header.html')
        .then(r => r.text())
        .then(data => {
            headerContainer.innerHTML = data;
            initActiveMenu();
        })
        .catch(() => {
            headerContainer.innerHTML = '<p style="color:red; background:#ffe6e6; padding:10px;">⚠️ Header लोड नहीं हुआ।</p>';
        });

    // ---- फूटर लोड करें ----
    fetch(root + 'footer.html')
        .then(r => r.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(() => {
            footerContainer.innerHTML = '<p style="color:red; background:#ffe6e6; padding:10px;">⚠️ Footer लोड नहीं हुआ।</p>';
        });

    // ---- ब्रेडक्रंब ----
    let bc = document.getElementById('breadcrumb');
    if (bc) {
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
}

/* =====================================
   ACTIVE MENU
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
   MOBILE MENU
===================================== */
function toggleMobileMenu() {
    const nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("active");
    }
}

/* =====================================
   GLOBAL ERROR HANDLER
===================================== */
window.addEventListener("error", (event) => {
    console.error("JavaScript Error:", event.message, "File:", event.filename, "Line:", event.lineno);
});

/* =====================================
   CONTENT PROTECTION
===================================== */
function initContentProtection() {
    const path = window.location.pathname.toLowerCase();
    const protectedPage = path.includes("/notes/") || path.includes("/engineering/");
    if (!protectedPage) return;
    console.log("Content Protection Enabled");

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
    document.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });
    document.addEventListener("copy", function (e) {
        e.preventDefault();
        alert("Copying is disabled on Notes pages.");
    });
    document.addEventListener("cut", function (e) {
        e.preventDefault();
    });
    document.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.key.toLowerCase() === "c") e.preventDefault();
        if (e.ctrlKey && e.key.toLowerCase() === "a") e.preventDefault();
        if (e.ctrlKey && e.key.toLowerCase() === "x") e.preventDefault();
        if (e.ctrlKey && e.key.toLowerCase() === "s") e.preventDefault();
    });
}

console.log("ITI Study Centre JavaScript v4.0 Final Loaded Successfully");

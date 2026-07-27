/* =====================================
   ITI STUDY CENTRE
   MAIN JAVASCRIPT v2.0
===================================== */

document.addEventListener("DOMContentLoaded", () => {
loadHeader();
loadFooter();
    console.log("ITI Study Centre Loaded");

    initActiveMenu();

    initSearch();

    loadNews();

    loadNotes();

    loadEngineering();

    loadUpdates();

    updateFooterYear();

    initScrollTop();

    initContentProtection();

});

/* =====================================
   ACTIVE MENU
===================================== */

function initActiveMenu() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

}

/* =====================================
   SEARCH
===================================== */

function initSearch() {

    const input =
        document.querySelector(".search-section input");

    if (!input) return;

    input.addEventListener("keyup", function () {

        const keyword =
            this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(

            ".card,.result-card,.updates-card,.feature-card"

        );

        cards.forEach(card => {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}
/* =====================================
   LOAD HEADER
===================================== */

async function loadHeader() {

    const header = document.getElementById("header");

    if (!header) return;

    try {

        const response = await fetch("header.html");

        header.innerHTML = await response.text();

        initActiveMenu();

    } catch (e) {

        console.error("Header loading failed", e);

    }

}

/* =====================================
   LOAD FOOTER
===================================== */

async function loadFooter() {

    const footer = document.getElementById("footer");

    if (!footer) return;

    try {

        const response = await fetch("footer.html");

        footer.innerHTML = await response.text();

        updateFooterYear();

    } catch (e) {

        console.error("Footer loading failed", e);

    }

}
/* =====================================
   COMMON JSON LOADER
===================================== */

async function loadJSON(file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(file);

        }

        return await response.json();

    }

    catch (error) {

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

    const engineering =
        await loadJSON("data/engineering.json");

    if (!engineering.length) return;

    console.log("Engineering Loaded", engineering);

}

/* =====================================
   LATEST OFFICIAL UPDATES
===================================== */

async function loadUpdates() {

    const updates =
        await loadJSON("data/updates.json");

    const container =
        document.getElementById("official-updates");

    if (!container) return;

    if (!updates.length) {

        container.innerHTML =

        "<p>No latest updates available.</p>";

        return;

    }

    let html = "<ul>";

    updates.forEach(item => {

        html += `

        <li>

        <a href="${item.link}"

        target="_blank">

        ${item.title}

        </a>

        </li>

        `;

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

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

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

    console.error(

        "JavaScript Error:",

        event.message,

        "File:",

        event.filename,

        "Line:",

        event.lineno

    );

});
/* =====================================
   CONTENT PROTECTION
   (ONLY FOR NOTES PAGES)
===================================== */

function initContentProtection() {

    const path = window.location.pathname.toLowerCase();

    const protectedPage =
        path.includes("/notes/") ||
        path.includes("/engineering/");

    if (!protectedPage) return;

    console.log("Content Protection Enabled");

    /* Disable Right Click */

    document.addEventListener("contextmenu", function (e) {

        e.preventDefault();

    });

    /* Disable Drag */

    document.addEventListener("dragstart", function (e) {

        e.preventDefault();

    });

    /* Disable Copy */

    document.addEventListener("copy", function (e) {

        e.preventDefault();

        alert("Copying is disabled on Notes pages.");

    });

    /* Disable Cut */

    document.addEventListener("cut", function (e) {

        e.preventDefault();

    });

    /* Disable Keyboard Shortcuts */

    document.addEventListener("keydown", function (e) {

        /* Ctrl + C */

        if (e.ctrlKey && e.key.toLowerCase() === "c") {

            e.preventDefault();

        }

        /* Ctrl + A */

        if (e.ctrlKey && e.key.toLowerCase() === "a") {

            e.preventDefault();

        }

        /* Ctrl + X */

        if (e.ctrlKey && e.key.toLowerCase() === "x") {

            e.preventDefault();

        }

        /* Ctrl + S */

        if (e.ctrlKey && e.key.toLowerCase() === "s") {

            e.preventDefault();

        }

    });

}
// ========== 🚀 नया Header/Footer Loader + Breadcrumb (पुराने कोड को नुकसान नहीं पहुँचाता) ==========
// यह कोड तभी चलेगा जब पेज में "header-placeholder" मौजूद हो, वरना इग्नोर कर देगा।
document.addEventListener("DOMContentLoaded", function() {
    // अगर header-placeholder मौजूद नहीं है, तो यह कोड आगे नहीं बढ़ेगा (सुरक्षित)
    if (!document.getElementById('header-placeholder')) return;

    // ---- 1. डायनामिक रूट पाथ (सब-फोल्डर डिटेक्ट) ----
    function getRoot() {
        let path = window.location.pathname;
        let parts = path.split('/').filter(p => p && !p.includes('.html') && !p.includes('.'));
        let depth = parts.length;
        return depth === 0 ? './' : '../'.repeat(depth);
    }
    let root = getRoot();

    // ---- 2. हेडर लोड करें ----
    fetch(root + 'header.html')
        .then(r => r.text())
        .then(data => {
            let placeholder = document.getElementById('header-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
                highlightActiveMenu();
            }
        })
        .catch(() => {
            let placeholder = document.getElementById('header-placeholder');
            if (placeholder) placeholder.innerHTML = '<p style="color:red; padding:10px;">⚠️ Header नहीं मिला</p>';
        });

    // ---- 3. फूटर लोड करें ----
    fetch(root + 'footer.html')
        .then(r => r.text())
        .then(data => {
            let placeholder = document.getElementById('footer-placeholder');
            if (placeholder) placeholder.innerHTML = data;
        })
        .catch(() => {
            let placeholder = document.getElementById('footer-placeholder');
            if (placeholder) placeholder.innerHTML = '<p style="color:red; padding:10px;">⚠️ Footer नहीं मिला</p>';
        });

    // ---- 4. एक्टिव मेनू हाइलाइट करें ----
    function highlightActiveMenu() {
        let current = window.location.pathname.split('/').pop() || 'index.html';
        let links = document.querySelectorAll('#header-placeholder .nav-link, #header-placeholder a');
        links.forEach(link => {
            let href = link.getAttribute('href');
            if (!href) return;
            let target = href.replace(/^\//, '').split('?')[0];
            if (target === current || (current === 'index.html' && (target === '' || target === 'index.html'))) {
                link.style.fontWeight = 'bold';
                link.style.textDecoration = 'underline';
                link.style.color = '#ffcc00';
            }
        });
    }

    // ---- 5. ब्रेडक्रंब जनरेट करें ----
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
});
/* =====================================
   END OF FILE
===================================== */

console.log("ITI Study Centre JavaScript v2.0 Loaded Successfully");

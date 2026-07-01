/* =====================================
   ITI STUDY CENTRE
   MAIN JAVASCRIPT v2.0
===================================== */

document.addEventListener("DOMContentLoaded", () => {

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

/* =====================================
   END OF FILE
===================================== */

console.log("ITI Study Centre JavaScript v2.0 Loaded Successfully");

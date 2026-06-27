// =====================================
// ITI STUDY CENTRE
// MAIN JAVASCRIPT v1.0
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("ITI Study Centre Loaded");

    initSearch();
    loadNews();
    loadNotes();
    loadEngineering();
    loadUpdates();
    updateFooterYear();
    initScrollTop();

});

// =========================
// SEARCH
// =========================

function initSearch() {

    const input = document.querySelector(".search-section input");

    if (!input) return;

    input.addEventListener("keyup", function () {

        const filter = this.value.toLowerCase();

        const items = document.querySelectorAll(
            ".card,.update-card,.news-card,.result-card,.updates-card"
        );

        items.forEach(item => {

            const text = item.innerText.toLowerCase();

            item.style.display = text.includes(filter) ? "" : "none";

        });

    });

}

// =========================
// COMMON JSON LOADER
// =========================

async function loadJSON(file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(file);
        }

        return await response.json();

    } catch (error) {

        console.error("Loading Error:", file, error);

        return [];

    }

}

// =========================
// NEWS
// =========================

async function loadNews() {

    const news = await loadJSON("data/news.json");

    console.log("News Loaded", news);

}

// =========================
// NOTES
// =========================

async function loadNotes() {

    const notes = await loadJSON("data/notes.json");

    console.log("Notes Loaded", notes);

}

// =========================
// ENGINEERING
// =========================

async function loadEngineering() {

    const engineering = await loadJSON("data/engineering.json");

    console.log("Engineering Loaded", engineering);

}

// =========================
// UPDATES
// =========================

async function loadUpdates() {

    const updates = await loadJSON("data/updates.json");

    console.log("Latest Updates Loaded", updates);

}

// =========================
// FOOTER YEAR
// =========================

function updateFooterYear() {

    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

}

// =========================
// SCROLL TO TOP
// =========================

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

// =========================
// MOBILE MENU (Future Ready)
// =========================

function toggleMobileMenu() {

    const nav = document.querySelector("nav");

    if (nav) {
        nav.classList.toggle("active");
    }

}

// =========================
// GLOBAL ERROR HANDLER
// =========================

window.addEventListener("error", (event) => {

    console.error("JavaScript Error:", event.message);

});

// =========================
// END
// =========================

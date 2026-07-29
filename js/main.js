/* =====================================
   ITI STUDY CENTRE v9.0 (FINAL)
   (केवल Search, Updates, Scroll, Protection - Header/Footer Safe)
===================================== */

document.addEventListener("DOMContentLoaded", function() {
    initSearch();
    loadNews();
    loadNotes();
    loadEngineering();
    loadUpdates();
    initScrollTop();
    initContentProtection();
    console.log("ITI Study Centre v9.0 Loaded - Header/Footer Safe!");
});

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
   JSON LOADER
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
   LATEST UPDATES
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
   CONTENT PROTECTION (केवल Notes/Engineering पेजों पर)
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

console.log("ITI Study Centre v9.0 Final Loaded Successfully");

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

    const input =
        document.querySelector(".search-section input");

    if (!input) return;

    input.addEventListener("keyup", function () {

        const keyword =
            this.value.toLowerCase().trim();

        const cards =
            document.querySelectorAll(
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
   JSON LOADER
===================================== */

async function loadJSON(file) {

    try {

        const response =
            await fetch(
                file + "?v=" + Date.now(),
                {
                    cache: "no-store"
                }
            );

        if (!response.ok) {

            throw new Error(file);

        }

        return await response.json();

    } catch (error) {

        console.error(
            "Loading Error :",
            file,
            error
        );

        return [];

    }

}


/* =====================================
   NEWS
===================================== */

async function loadNews() {

    const news =
        await loadJSON("data/news.json");

    if (!news.length) return;

    console.log(
        "News Loaded",
        news
    );

}


/* =====================================
   NOTES
===================================== */

async function loadNotes() {

    const notes =
        await loadJSON("data/notes.json");

    if (!notes.length) return;

    console.log(
        "Notes Loaded",
        notes
    );

}


/* =====================================
   ENGINEERING
===================================== */

async function loadEngineering() {

    const engineering =
        await loadJSON("data/engineering.json");

    if (!engineering.length) return;

    console.log(
        "Engineering Loaded",
        engineering
    );

}


/* =====================================
   LATEST OFFICIAL UPDATES
   DGT / SCVT
   SHOW ONLY LATEST 2
===================================== */

async function loadUpdates() {

    const container =
        document.getElementById(
            "official-updates"
        );

    if (!container) return;


    try {

        /* =================================
           LOAD UPDATES JSON
        ================================= */

        const response =
            await fetch(
                "data/updates.json?v=" + Date.now(),
                {
                    cache: "no-store"
                }
            );


        if (!response.ok) {

            throw new Error(
                "updates.json not found"
            );

        }


        const updates =
            await response.json();


        /* =================================
           CHECK DATA
        ================================= */

        if (
            !Array.isArray(updates) ||
            updates.length === 0
        ) {

            container.innerHTML =
                "<p>No latest updates available.</p>";

            return;

        }


        /* =================================
           DATE PARSER
        ================================= */

        function getDate(item) {

            const value =
                String(
                    item.date ||
                    item.upload_date ||
                    item.published_date ||
                    ""
                ).trim();


            if (!value) {

                return 0;

            }


            /* -----------------------------
               DD-MM-YYYY
               DD/MM/YYYY
               DD.MM.YYYY
            ----------------------------- */

            let match =
                value.match(
                    /^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/
                );


            if (match) {

                return new Date(
                    Number(match[3]),
                    Number(match[2]) - 1,
                    Number(match[1])
                ).getTime();

            }


            /* -----------------------------
               YYYY-MM-DD
            ----------------------------- */

            match =
                value.match(
                    /^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})$/
                );


            if (match) {

                return new Date(
                    Number(match[1]),
                    Number(match[2]) - 1,
                    Number(match[3])
                ).getTime();

            }


            /* -----------------------------
               Browser Date Parser
            ----------------------------- */

            const parsed =
                Date.parse(value);


            return isNaN(parsed)
                ? 0
                : parsed;

        }


        /* =================================
           SORT — NEWEST FIRST
        ================================= */

        const sortedUpdates =
            [...updates].sort(
                function(a, b) {

                    return (
                        getDate(b) -
                        getDate(a)
                    );

                }
            );


        /* =================================
           ONLY LATEST 2
        ================================= */

        const latestTwo =
            sortedUpdates.slice(0, 2);


        /* =================================
           DISPLAY LATEST 2
        ================================= */

        let html = "";


        latestTwo.forEach(function(item) {

            const title =
                item.title ||
                item.name ||
                "Official Update";


            const link =
                item.link ||
                item.url ||
                "#";


            const date =
                item.date ||
                item.upload_date ||
                item.published_date ||
                "";


            html += `

                <div class="official-update-item">

                    ${
                        date
                        ? `
                            <div class="official-update-date">
                                📅 ${date}
                            </div>
                          `
                        : ""
                    }

                    <a
                        href="${link}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${title}
                    </a>

                </div>

            `;

        });


        /* =================================
           PUT INTO PAGE
        ================================= */

        container.innerHTML =
            html;


        console.log(
            "Latest 2 Official Updates Loaded:",
            latestTwo
        );


    } catch (error) {

        console.error(
            "Latest Updates Error:",
            error
        );


        container.innerHTML =
            "<p>Latest updates अभी उपलब्ध नहीं हैं।</p>";

    }

}


/* =====================================
   SCROLL TO TOP
===================================== */

function initScrollTop() {

    const btn =
        document.getElementById(
            "scrollTop"
        );

    if (!btn) return;


    window.addEventListener(
        "scroll",
        function() {

            if (
                window.scrollY > 300
            ) {

                btn.style.display =
                    "block";

            } else {

                btn.style.display =
                    "none";

            }

        }
    );


    btn.addEventListener(
        "click",
        function() {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =====================================
   CONTENT PROTECTION
   (केवल Notes/Engineering पेजों पर)
===================================== */

function initContentProtection() {

    const path =
        window.location.pathname
            .toLowerCase();


    const protectedPage =
        path.includes("/notes/") ||
        path.includes("/engineering/");


    if (!protectedPage) return;


    console.log(
        "Content Protection Enabled"
    );


    /* -----------------------------
       Right Click
    ----------------------------- */

    document.addEventListener(
        "contextmenu",
        function(e) {

            e.preventDefault();

        }
    );


    /* -----------------------------
       Drag
    ----------------------------- */

    document.addEventListener(
        "dragstart",
        function(e) {

            e.preventDefault();

        }
    );


    /* -----------------------------
       Copy
    ----------------------------- */

    document.addEventListener(
        "copy",
        function(e) {

            e.preventDefault();

            alert(
                "Copying is disabled on Notes pages."
            );

        }
    );


    /* -----------------------------
       Cut
    ----------------------------- */

    document.addEventListener(
        "cut",
        function(e) {

            e.preventDefault();

        }
    );


    /* -----------------------------
       Keyboard Protection
    ----------------------------- */

    document.addEventListener(
        "keydown",
        function(e) {

            if (
                e.ctrlKey &&
                e.key.toLowerCase() === "c"
            ) {

                e.preventDefault();

            }


            if (
                e.ctrlKey &&
                e.key.toLowerCase() === "a"
            ) {

                e.preventDefault();

            }


            if (
                e.ctrlKey &&
                e.key.toLowerCase() === "x"
            ) {

                e.preventDefault();

            }


            if (
                e.ctrlKey &&
                e.key.toLowerCase() === "s"
            ) {

                e.preventDefault();

            }

        }
    );

}


/* =====================================
   FINAL LOG
===================================== */

console.log(
    "ITI Study Centre v9.0 Final Loaded Successfully"
);

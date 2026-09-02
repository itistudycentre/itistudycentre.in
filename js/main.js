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

    console.log(
        "ITI Study Centre v9.0 Loaded - Header/Footer Safe!"
    );

});


/* =====================================
   SEARCH
===================================== */

function initSearch() {

    const input =
        document.querySelector(
            ".search-section input"
        );

    if (!input) return;


    input.addEventListener(
        "keyup",
        function() {

            const keyword =
                this.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".card,.result-card,.updates-card,.feature-card"
                );


            cards.forEach(
                card => {

                    const text =
                        card.innerText
                            .toLowerCase();


                    if (
                        text.includes(keyword)
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

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
        await loadJSON(
            "data/news.json"
        );


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
        await loadJSON(
            "data/notes.json"
        );


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
        await loadJSON(
            "data/engineering.json"
        );


    if (!engineering.length) return;


    console.log(
        "Engineering Loaded",
        engineering
    );

}


/* =====================================
   LATEST OFFICIAL UPDATES
   SHOW ALL
   AUTO UPDATE DATA
===================================== */

async function loadUpdates() {

    const container =
        document.getElementById(
            "official-updates"
        );


    if (!container) return;


    try {

        const response =
            await fetch(
                "data/updates.json?v=" +
                Date.now(),
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


            /* DD-MM-YYYY
               DD/MM/YYYY
               DD.MM.YYYY
            */

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


            /* YYYY-MM-DD */

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
           SHOW ALL
        ================================= */

        let html =
            "<ul>";


        sortedUpdates.forEach(
            function(item) {

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

                    <li>

                        ${
                            date
                            ? `
                                <span class="update-date">
                                    ${date}
                                </span>
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

                    </li>

                `;

            }
        );


        html +=
            "</ul>";


        container.innerHTML =
            html;


        console.log(
            "All Official Updates Loaded:",
            sortedUpdates.length
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
        () => {

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
        () => {

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


    /* RIGHT CLICK */

    document.addEventListener(
        "contextmenu",
        function(e) {

            e.preventDefault();

        }
    );


    /* DRAG */

    document.addEventListener(
        "dragstart",
        function(e) {

            e.preventDefault();

        }
    );


    /* COPY */

    document.addEventListener(
        "copy",
        function(e) {

            e.preventDefault();

            alert(
                "Copying is disabled on Notes pages."
            );

        }
    );


    /* CUT */

    document.addEventListener(
        "cut",
        function(e) {

            e.preventDefault();

        }
    );


    /* KEYBOARD */

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

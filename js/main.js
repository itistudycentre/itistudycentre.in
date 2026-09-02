/* =====================================
   LATEST OFFICIAL UPDATES
   SHOW ALL
   NO CACHE
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
           DATE FUNCTION
        ================================= */

        function getDate(item) {

            const value =
                String(
                    item.date || ""
                ).trim();


            if (!value) return 0;


            /* DD-MM-YYYY */

            let match =
                value.match(
                    /^(\d{1,2})-(\d{1,2})-(\d{4})$/
                );


            if (match) {

                return new Date(
                    Number(match[3]),
                    Number(match[2]) - 1,
                    Number(match[1])
                ).getTime();

            }


            /* DD/MM/YYYY */

            match =
                value.match(
                    /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
                );


            if (match) {

                return new Date(
                    Number(match[3]),
                    Number(match[2]) - 1,
                    Number(match[1])
                ).getTime();

            }


            return 0;

        }


        /* =================================
           NEWEST FIRST
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
           HTML
        ================================= */

        let html = "<ul>";


        sortedUpdates.forEach(
            function(item) {

                let title =
                    item.title || "";


                const link =
                    item.link || "#";


                /*
                 * पुराने गलत JSON में अगर
                 * Size आदि title के अंदर हो
                 * तो यहाँ भी सुरक्षित रूप से हटाएँ
                 */

                title =
                    title
                        .replace(
                            /\s*Size\s*:.*$/i,
                            ""
                        )
                        .trim();


                if (!title) return;


                html += `

                    <li>

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


        html += "</ul>";


        container.innerHTML =
            html;


        console.log(
            "ALL OFFICIAL UPDATES LOADED:",
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

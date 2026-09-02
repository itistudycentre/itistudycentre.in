/* =====================================
   LATEST OFFICIAL UPDATES
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


        let html = "";


        updates.forEach(
            function(item) {

                const title =
                    item.title ||
                    "Official Update";


                const link =
                    item.link ||
                    "https://www.dgt.gov.in/hi/exam-corner";


                const date =
                    item.date ||
                    "";


                const source =
                    item.source ||
                    "Official";


                html += `

                    <div class="official-update-item">

                        <div class="official-update-title">

                            ${title}

                        </div>


                        ${
                            date
                            ? `
                                <div class="official-update-date">
                                    ${date}
                                </div>
                              `
                            : ""
                        }


                        <div class="official-update-link">

                            <a
                                href="${link}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Official Link →
                            </a>

                        </div>

                    </div>

                `;

            }
        );


        container.innerHTML =
            html;


        console.log(
            "Official Updates Loaded:",
            updates.length
        );


    } catch (error) {

        console.error(
            "Official Updates Error:",
            error
        );


        container.innerHTML =
            "<p>Latest updates अभी उपलब्ध नहीं हैं।</p>";

    }

}

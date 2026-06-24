// ITI Study Centre
// Main JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("ITI Study Centre Loaded");

    const searchInput = document.querySelector(".search-section input");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            let filter = this.value.toLowerCase();

            let cards = document.querySelectorAll(".update-card");

            cards.forEach(function (card) {

                let text = card.innerText.toLowerCase();

                if (text.indexOf(filter) > -1) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

});

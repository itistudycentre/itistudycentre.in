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
// Future Dynamic System

fetch("data/news.json")
.then(response => response.json())
.then(data => {

console.log("News Loaded");

console.log(data);

})
.catch(error => console.log(error));
    }

});

fetch("data/notes.json")
.then(response => response.json())
.then(data => {

console.log("Notes Loaded");

})
.catch(error => console.log(error));

fetch("data/engineering.json")
.then(response => response.json())
.then(data => {

console.log("Engineering Loaded");

})
.catch(error => console.log(error));

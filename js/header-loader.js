
/* =========================================================
   ITI STUDY CENTRE — HEADER LOADER
   File: /js/header-loader.js

   Features:
   1. Common Header Loading
   2. Active Navigation Link
   3. Automatic Comments System
   4. Website Branding and Watermark
   5. Page opens at top on a fresh load
========================================================= */

(function () {
    "use strict";

    var container = document.getElementById("header-container");

    /* ---------------------------------------------------------
       HEADER CONTAINER
    --------------------------------------------------------- */

    if (!container) {
        container = document.createElement("div");
        container.id = "header-container";
        document.body.insertBefore(
            container,
            document.body.firstChild
        );
    }

    /* ---------------------------------------------------------
       LOAD WEBSITE BRANDING
    --------------------------------------------------------- */

    function loadBranding() {
        if (document.querySelector("script[data-iti-branding]")) {
            return;
        }

        var script = document.createElement("script");
        script.src = "/js/branding.js?v=6";
        script.dataset.itiBranding = "true";
        script.onload = function () {
            console.log("ITI Study Centre branding loaded");
        };
        script.onerror = function () {
            console.error("Branding file could not load");
        };

        document.head.appendChild(script);
    }

    loadBranding();

    /* ---------------------------------------------------------
       LOAD HEADER
    --------------------------------------------------------- */

    fetch("/header.html")
        .then(function (res) {
            if (!res.ok) {
                throw new Error("Header not found");
            }
            return res.text();
        })
        .then(function (html) {
            container.innerHTML = html;
            highlightActiveLink();
        })
        .catch(function (err) {
            console.warn("Header load failed:", err);

            container.innerHTML =
                '<header class="main-header">' +
                    '<div class="container">' +
                        '<div class="logo">' +
                            '<a href="/index.html">' +
                                'ITI Study Centre' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                '</header>';
        });

    /* ---------------------------------------------------------
       HIGHLIGHT ACTIVE LINK
    --------------------------------------------------------- */

    function highlightActiveLink() {
        var path = window.location.pathname;

        if (path.length > 1) {
            path = path.replace(/\/$/, "");
        }

        var links = container.querySelectorAll("nav a");

        links.forEach(function (link) {
            link.classList.remove("active");

            var raw =
                link.dataset.match ||
                link.getAttribute("href");

            if (!raw) {
                return;
            }

            var candidates = raw.split(",");

            var isActive = candidates.some(function (m) {
                m = m.trim();

                if (m === "/") {
                    return path === "" || path === "/";
                }

                return path === m || path.startsWith(m);
            });

            if (isActive) {
                link.classList.add("active");
            }
        });
    }

    /* ---------------------------------------------------------
       AUTOMATIC COMMENT SYSTEM
       Admin Comments page excluded
    --------------------------------------------------------- */

    function loadCommentsSystem() {
        var currentPath = window.location.pathname;

        if (currentPath === "/admin-comments.html") {
            return;
        }

        if (document.querySelector("script[data-iti-comments]")) {
            return;
        }

        var script = document.createElement("script");
        script.type = "module";
        script.src = "/js/comments.js";
        script.dataset.itiComments = "true";

        document.body.appendChild(script);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            loadCommentsSystem
        );
    } else {
        loadCommentsSystem();
    }

})();

/* =========================================================
   OPEN AT TOP ON FRESH LOAD
   Browser Back/Forward scroll restoration is preserved.
========================================================= */

(function () {
    "use strict";

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
    }

    window.addEventListener("load", function () {
        if (
            !window.location.hash &&
            !sessionStorage.getItem("iti-back-navigation")
        ) {
            window.scrollTo(0, 0);
        }

        sessionStorage.removeItem("iti-back-navigation");
    });

    window.addEventListener("pagehide", function () {
        // Browser handles scroll restoration automatically.
    });

})();

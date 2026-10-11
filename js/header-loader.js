/* =========================================================
   ITI STUDY CENTRE — HEADER LOADER
   File: /js/header-loader.js

   Features preserved:
   1. Common header loading from /header.html
   2. Active navigation link highlighting
   3. Automatic comments system (comments.js)
   4. Excludes /admin-comments.html from comments
   5. Loads /js/branding.js with cache-busting version
   6. Preserves scroll restoration

   NOTE: Footer loading is NOT handled here. It is managed elsewhere
   (main.js / HTML). Do not add footer logic to this file.
========================================================= */

(function () {
  "use strict";

  /* -------------------- HEADER CONTAINER -------------------- */

  var container = document.getElementById("header-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "header-container";

    if (document.body) {
      document.body.insertBefore(container, document.body.firstChild);
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        if (!document.getElementById("header-container")) {
          document.body.insertBefore(container, document.body.firstChild);
        }
      }, { once: true });
    }
  }

  /* -------------------- LOAD BRANDING -------------------- */

  function loadBranding() {
    if (
      document.querySelector("script[data-iti-branding]") ||
      document.getElementById("iti-branding-script")
    ) {
      return;
    }

    var script = document.createElement("script");
    script.id = "iti-branding-script";
    /* IMPORTANT: bump this version whenever branding.js changes. */
    script.src = "/js/branding.js?v=19";
    script.dataset.itiBranding = "true";

    script.onload = function () {
      console.log("ITI Study Centre branding loaded (v=18).");
    };

    script.onerror = function () {
      console.error("Branding file failed to load. Check /js/branding.js.");
    };

    document.head.appendChild(script);
  }

  /* -------------------- LOAD HEADER -------------------- */

  function loadHeader() {
    if (!container || container.dataset.headerLoaded === "true") {
      return;
    }

    fetch("/header.html", { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Header HTTP " + response.status);
        }
        return response.text();
      })
      .then(function (html) {
        container.innerHTML = html;
        container.dataset.headerLoaded = "true";
        highlightActiveLink();
        console.log("ITI Study Centre header loaded.");
      })
      .catch(function (error) {
        console.warn("Header loading failed:", error);

        /* Minimal fallback if /header.html cannot be fetched. */
        if (!container.innerHTML.trim()) {
          container.innerHTML =
            '<header class="main-header">' +
              '<div class="container">' +
                '<div class="logo">' +
                  '<a href="/">ITI Study Centre</a>' +
                '</div>' +
              '</div>' +
            '</header>';
        }
      });
  }

  /* -------------------- ACTIVE NAVIGATION LINK -------------------- */

  function highlightActiveLink() {
    if (!container) return;

    var path = window.location.pathname;
    if (path.length > 1) {
      path = path.replace(/\/$/, "");
    }

    var links = container.querySelectorAll("nav a");

    links.forEach(function (link) {
      link.classList.remove("active");

      var raw = link.dataset.match || link.getAttribute("href");
      if (!raw) return;

      var candidates = raw.split(",");

      var isActive = candidates.some(function (item) {
        item = item.trim();

        if (item === "/") {
          return path === "" || path === "/";
        }
        return path === item || path.startsWith(item);
      });

      if (isActive) {
        link.classList.add("active");
      }
    });
  }

  /* -------------------- COMMENTS SYSTEM -------------------- */

  function loadCommentsSystem() {
    var currentPath = window.location.pathname;
    var cleanPath = currentPath.split("?")[0].split("#")[0]
      .replace(/\/$/, "");

    /* Skip the admin comments page entirely. */
    if (
      cleanPath === "/admin-comments" ||
      cleanPath === "/admin-comments.html"
    ) {
      return;
    }

    if (
      document.querySelector("script[data-iti-comments]") ||
      document.getElementById("iti-comments-script")
    ) {
      return;
    }

    var script = document.createElement("script");
    script.id = "iti-comments-script";
    script.type = "module";
    script.src = "/js/comments.js";
    script.dataset.itiComments = "true";

    script.onerror = function () {
      console.warn("ITI Study Centre comments.js could not load.");
    };

    document.body.appendChild(script);
  }

  /* -------------------- INITIALIZATION -------------------- */

  function initHeaderLoader() {
    loadBranding();
    loadHeader();
    loadCommentsSystem();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initHeaderLoader,
      { once: true }
    );
  } else {
    initHeaderLoader();
  }

  /* -------------------- SCROLL RESTORATION -------------------- */

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "auto";
  }

})();

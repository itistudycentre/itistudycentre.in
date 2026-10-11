
/* =========================================================
   ITI STUDY CENTRE — HEADER LOADER
   File: /js/header-loader.js

   Features:
   1. Common Header Loading
   2. Active Navigation Link
   3. Automatic Comments System
   4. Website Branding and Watermark
   5. Preserve browser scroll restoration
========================================================= */

(function () {
  "use strict";

  var container = document.getElementById("header-container");

  /* -------------------- HEADER CONTAINER -------------------- */

  if (!container) {
    container = document.createElement("div");
    container.id = "header-container";

    if (document.body) {
      document.body.insertBefore(
        container,
        document.body.firstChild
      );
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        if (!document.getElementById("header-container")) {
          document.body.insertBefore(
            container,
            document.body.firstChild
          );
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
    script.src = "/js/branding.js?v=17";
    script.dataset.itiBranding = "true";

    script.onload = function () {
      console.log("ITI Study Centre branding loaded.");
    };

    script.onerror = function () {
      console.error(
        "Branding file failed to load. Check /js/branding.js."
      );
    };

    document.head.appendChild(script);
  }

  loadBranding();

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

        /*
          Keep a minimal fallback header if the shared file
          cannot be loaded.
        */
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

    if (currentPath === "/admin-comments.html") {
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

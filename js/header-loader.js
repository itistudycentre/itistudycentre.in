
(function () {
  "use strict";

  /* =========================================
     ITI STUDY CENTRE - HEADER LOADER
     Header, Footer, Navigation, Comments,
     Scroll-to-top and Branding
  ========================================= */

  var SITE_URL = "/";
  var HEADER_URL = "/header.html";
  var FOOTER_URL = "/footer.html";
  var BRANDING_URL = "/js/branding.js?v=14";
  var COMMENTS_URL = "/js/comments.js";

  /* ---------- Load HTML component ---------- */

  function loadHTML(url, selectors, callback) {
    var container = null;

    for (var i = 0; i < selectors.length; i++) {
      container = document.querySelector(selectors[i]);
      if (container) break;
    }

    if (!container) {
      console.warn(
        "ITI Study Centre: placeholder not found for " + url
      );
      return;
    }

    // Prevent loading the same component twice
    if (container.dataset.itiLoaded === "true") {
      if (callback) callback(container);
      return;
    }

    fetch(url, { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error(
            "HTTP " + response.status + " while loading " + url
          );
        }
        return response.text();
      })
      .then(function (html) {
        container.innerHTML = html;
        container.dataset.itiLoaded = "true";

        if (callback) callback(container);

        console.log("ITI Study Centre: loaded " + url);
      })
      .catch(function (error) {
        console.error(
          "ITI Study Centre: failed to load " + url,
          error
        );
      });
  }

  /* ---------- Header navigation ---------- */

  function highlightCurrentPage() {
    var currentPath = window.location.pathname
      .replace(/\/+$/, "")
      .toLowerCase();

    if (currentPath === "") currentPath = "/";

    document.querySelectorAll(
      "header a, nav a, #header a, #header-placeholder a"
    ).forEach(function (link) {
      var href = link.getAttribute("href");

      if (!href || href.startsWith("#") ||
          href.startsWith("javascript:")) {
        return;
      }

      try {
        var linkURL = new URL(href, window.location.origin);

        if (linkURL.origin !== window.location.origin) return;

        var linkPath = linkURL.pathname
          .replace(/\/+$/, "")
          .toLowerCase();

        if (linkPath === "") linkPath = "/";

        if (linkPath === currentPath) {
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        } else {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        }
      } catch (error) {
        // Ignore invalid navigation URLs
      }
    });
  }

  /* ---------- Load branding.js once ---------- */

  function loadBranding() {
    if (document.getElementById("iti-branding-script")) {
      return;
    }

    var script = document.createElement("script");
    script.id = "iti-branding-script";
    script.src = BRANDING_URL;
    script.async = false;

    script.onload = function () {
      console.log(
        "ITI Study Centre: branding.js loaded successfully."
      );
    };

    script.onerror = function () {
      console.error(
        "ITI Study Centre: branding.js could not load. " +
        "Check the /js/branding.js path."
      );
    };

    document.head.appendChild(script);
  }

  /* ---------- Load comments.js once ---------- */

  function loadComments() {
    if (document.getElementById("iti-comments-script")) {
      return;
    }

    var script = document.createElement("script");
    script.id = "iti-comments-script";
    script.src = COMMENTS_URL;
    script.async = true;

    script.onload = function () {
      console.log("ITI Study Centre: comments.js loaded.");
    };

    script.onerror = function () {
      console.warn(
        "ITI Study Centre: comments.js could not load."
      );
    };

    document.body.appendChild(script);
  }

  /* ---------- Scroll-to-top button ---------- */

  function setupScrollToTop() {
    var button = document.getElementById("backToTop") ||
      document.getElementById("back-to-top") ||
      document.getElementById("scrollTop") ||
      document.querySelector(".back-to-top");

    if (!button) return;

    if (button.dataset.itiScrollReady === "true") return;
    button.dataset.itiScrollReady = "true";

    button.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    function updateButton() {
      if (window.scrollY > 300) {
        button.classList.add("show");
        button.style.display = "";
      } else {
        button.classList.remove("show");
      }
    }

    window.addEventListener("scroll", updateButton, {
      passive: true
    });

    updateButton();
  }

  /* ---------- Initialize site components ---------- */

  function initHeaderLoader() {
    // Keep existing header and footer loading
    loadHTML(
      HEADER_URL,
      [
        "#header-placeholder",
        "#header-container",
        "#header",
        "[data-include='header']"
      ],
      function () {
        highlightCurrentPage();
      }
    );

    loadHTML(
      FOOTER_URL,
      [
        "#footer-placeholder",
        "#footer-container",
        "#footer",
        "[data-include='footer']"
      ]
    );

    // Load branding and comments without replacing page content
    loadBranding();
    loadComments();

    setupScrollToTop();

    // Recheck navigation after header is inserted
    window.setTimeout(highlightCurrentPage, 500);
    window.setTimeout(highlightCurrentPage, 1500);
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
})();

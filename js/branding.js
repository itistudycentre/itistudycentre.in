
(function () {
  "use strict";

  if (window.__itiBrandingV14) return;
  window.__itiBrandingV14 = true;

  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  var refreshPending = false;

  function addStyles() {
    if (document.getElementById("isc-branding-v14-style")) return;

    var style = document.createElement("style");
    style.id = "isc-branding-v14-style";
    style.textContent = `
      #isc-brand-bar-v14 {
        position: relative;
        z-index: 10001;
        padding: 9px 6px;
        text-align: center;
        background: #12345a;
        border-bottom: 2px solid #e6b84a;
        font-family: Arial, sans-serif;
      }

      #isc-brand-bar-v14 a {
        color: #fff !important;
        font-size: 14px;
        font-weight: 800;
        text-decoration: none !important;
      }

      #isc-watermark-v14 {
        position: fixed;
        inset: 0;
        z-index: 2;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(8, 1fr);
        align-items: center;
        justify-items: center;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
      }

      #isc-watermark-v14 span {
        color: rgba(18, 52, 90, .065);
        font: bold clamp(10px, 1.4vw, 16px) Arial, sans-serif;
        white-space: nowrap;
        transform: rotate(-28deg);
      }

      .isc-credit-v14 {
        display: block !important;
        position: relative;
        z-index: 3;
        clear: both;
        margin: 12px 0 22px !important;
        padding: 5px 8px;
        text-align: right;
        font: 12px/1.6 Arial, sans-serif;
        border-bottom: 1px solid rgba(18, 52, 90, .15);
      }

      .isc-credit-v14 a {
        color: #34516e !important;
        text-decoration: underline !important;
        font-weight: 600 !important;
      }

      @media(max-width:600px) {
        #isc-brand-bar-v14 a { font-size: 11px; }
        #isc-watermark-v14 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(10, 1fr);
        }
        #isc-watermark-v14 span { font-size: 10px; }
        .isc-credit-v14 { font-size: 11px; }
      }
    `;

    document.head.appendChild(style);
  }

  function addHeader() {
    if (document.getElementById("isc-brand-bar-v14")) return;

    var bar = document.createElement("div");
    bar.id = "isc-brand-bar-v14";

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = SITE_NAME + "     " + SITE_TEXT;

    bar.appendChild(link);
    document.body.insertBefore(bar, document.body.firstChild);
  }

  function addWatermark() {
    if (document.getElementById("isc-watermark-v14")) return;

    var layer = document.createElement("div");
    layer.id = "isc-watermark-v14";
    layer.setAttribute("aria-hidden", "true");

    for (var i = 0; i < 24; i++) {
      var mark = document.createElement("span");
      mark.textContent = SITE_NAME + "   " + SITE_TEXT;
      layer.appendChild(mark);
    }

    document.body.appendChild(layer);
  }

  function findArticleRoot() {
    var selectors = [
      "main.module-content",
      ".module-content",
      ".article-content",
      ".theory-content",
      ".notes-content",
      "article",
      "main",
      "#content",
      ".content"
    ];

    for (var i = 0; i < selectors.length; i++) {
      var root = document.querySelector(selectors[i]);

      if (
        root &&
        root.querySelector("h2, h3, h4")
      ) {
        return root;
      }
    }

    return document.body;
  }

  function isExcluded(heading) {
    if (
      heading.closest(
        "header, nav, footer, #isc-brand-bar-v14, " +
        "#isc-watermark-v14, .isc-credit-v14"
      )
    ) {
      return true;
    }

    var parent = heading.parentElement;

    while (parent && parent !== document.body) {
      var marker = (
        (parent.id || "") + " " +
        (typeof parent.className === "string" ? parent.className : "")
      ).toLowerCase();

      if (
        /table.of.contents|table-of-contents|toc|breadcrumb|pagination|navbar/.test(marker)
      ) {
        return true;
      }

      parent = parent.parentElement;
    }

    var title = heading.textContent.trim();

    if (
      /^(विषय.?सूची|contents|table of contents)$/i.test(title)
    ) {
      return true;
    }

    return false;
  }

  function createCredit() {
    var box = document.createElement("div");
    box.className = "isc-credit-v14";

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = CREDIT_TEXT;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    box.appendChild(link);
    return box;
  }

  function addCredits() {
    if (refreshPending) return;
    refreshPending = true;

    try {
      var root = findArticleRoot();

      var headings = Array.from(
        root.querySelectorAll("h2, h3, h4")
      ).filter(function (heading) {
        return !isExcluded(heading) &&
          heading.textContent.trim().length > 2;
      });

      var inserted = 0;

      headings.forEach(function (heading) {
        var next = heading.nextElementSibling;

        // Avoid inserting duplicate credits
        if (next && next.classList.contains("isc-credit-v14")) {
          return;
        }

        heading.insertAdjacentElement(
          "afterend",
          createCredit()
        );

        inserted++;
      });

      console.log(
        "ITI Branding v14: headings found =",
        headings.length,
        "| credits added =",
        inserted
      );
    } finally {
      refreshPending = false;
    }
  }

  function init() {
    if (!document.body || !document.head) return;

    addStyles();
    addHeader();
    addWatermark();
    addCredits();

    // Retry for articles that load after the initial page
    [1000, 2500, 5000].forEach(function (delay) {
      window.setTimeout(addCredits, delay);
    });

    // Handle dynamically loaded article sections
    if ("MutationObserver" in window) {
      var observer = new MutationObserver(function (mutations) {
        var hasNewContent = mutations.some(function (mutation) {
          return Array.from(mutation.addedNodes).some(function (node) {
            if (node.nodeType !== 1) return false;

            return !(
              node.id === "isc-watermark-v14" ||
              node.id === "isc-brand-bar-v14" ||
              node.classList.contains("isc-credit-v14")
            );
          });
        });

        if (hasNewContent) {
          window.setTimeout(addCredits, 150);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

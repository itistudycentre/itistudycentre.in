
/* =========================================================
   ITI STUDY CENTRE — BRANDING
   File: /js/branding.js
   Header branding, watermark and article credit strips
========================================================= */

(function () {
  "use strict";

  if (window.__itiBrandingFinal) return;
  window.__itiBrandingFinal = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  var creditTimer = null;

  /* -------------------- STYLES -------------------- */

  function addStyles() {
    if (document.getElementById("isc-branding-final-style")) return;

    var style = document.createElement("style");
    style.id = "isc-branding-final-style";

    style.textContent = `
      #isc-brand-bar {
        position: sticky;
        top: 0;
        z-index: 10001;
        width: 100%;
        box-sizing: border-box;
        padding: 8px 10px;
        text-align: center;
        background: #12345a;
        border-bottom: 2px solid #e6b84a;
        font-family: Arial, sans-serif;
        line-height: 1.5;
      }

      #isc-brand-bar a {
        color: #fff !important;
        font-size: 14px;
        font-weight: 800;
        text-decoration: none !important;
        letter-spacing: .3px;
      }

      #isc-watermark {
        position: fixed;
        inset: 0;
        z-index: 2;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(8, minmax(0, 1fr));
        align-items: center;
        justify-items: center;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
      }

      #isc-watermark span {
        display: block;
        white-space: nowrap;
        transform: rotate(-28deg);
        color: rgba(18, 52, 90, .055);
        font: 800 clamp(10px, 1.4vw, 16px)/1.3 Arial, sans-serif;
        letter-spacing: .2px;
      }

      .isc-article-credit {
        display: block !important;
        position: relative;
        z-index: 3;
        clear: both;
        box-sizing: border-box;
        width: 100%;
        margin: 16px 0 24px !important;
        padding: 11px 12px;
        text-align: center;
        background: #eef3f8;
        border: 1px solid #d4dfeb;
        border-left: 4px solid #34516e;
        border-radius: 4px;
        color: #34516e;
        font: 13px/1.6 Arial, sans-serif;
        overflow-wrap: anywhere;
      }

      .isc-article-credit a {
        color: #23486b !important;
        font-weight: 700 !important;
        text-decoration: underline !important;
        text-underline-offset: 2px;
      }

      .isc-article-credit a:hover {
        color: #a16c00 !important;
      }

      @media (max-width: 600px) {
        #isc-brand-bar {
          padding: 7px 4px;
        }

        #isc-brand-bar a {
          font-size: 11px;
          letter-spacing: 0;
        }

        #isc-watermark {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(10, minmax(0, 1fr));
        }

        #isc-watermark span {
          font-size: 9px;
        }

        .isc-article-credit {
          margin: 13px 0 20px !important;
          padding: 9px 5px;
          font-size: 12px;
        }
      }

      @media print {
        #isc-brand-bar {
          position: static;
        }

        #isc-watermark {
          position: fixed;
        }

        .isc-article-credit {
          break-inside: avoid;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* -------------------- TOP BRAND BAR -------------------- */

  function addTopBar() {
    if (document.getElementById("isc-brand-bar")) return;

    var bar = document.createElement("div");
    bar.id = "isc-brand-bar";

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = SITE_NAME + "     " + SITE_TEXT;
    link.setAttribute("aria-label", SITE_NAME + " - " + SITE_TEXT);

    bar.appendChild(link);
    document.body.insertBefore(bar, document.body.firstChild);
  }

  /* -------------------- WATERMARK -------------------- */

  function addWatermark() {
    if (document.getElementById("isc-watermark")) return;

    var layer = document.createElement("div");
    layer.id = "isc-watermark";
    layer.setAttribute("aria-hidden", "true");

    for (var i = 0; i < 24; i++) {
      var mark = document.createElement("span");
      mark.textContent = SITE_NAME + "     " + SITE_TEXT;
      layer.appendChild(mark);
    }

    document.body.appendChild(layer);
  }

  /* -------------------- ARTICLE DETECTION -------------------- */

  function findArticleRoot() {
    var selectors = [
      "main.module-content",
      ".module-content",
      ".article-content",
      ".fitter2-section-body",
      ".section-body",
      "main article",
      "article",
      "main",
      "#content",
      ".content"
    ];

    for (var i = 0; i < selectors.length; i++) {
      var root = document.querySelector(selectors[i]);

      if (
        root &&
        root.querySelector("h2, h3")
      ) {
        return root;
      }
    }

    return null;
  }

  function isExcludedHeading(heading) {
    if (heading.closest(
      "header, nav, footer, #isc-brand-bar, #isc-watermark, " +
      ".isc-article-credit, .toc, #toc, .table-of-contents"
    )) {
      return true;
    }

    var title = heading.textContent.trim();

    if (/^(विषय.?सूची|contents|table of contents)$/i.test(title)) {
      return true;
    }

    var parent = heading.parentElement;

    while (parent && parent !== document.body) {
      var marker = (
        (parent.id || "") + " " +
        (typeof parent.className === "string" ? parent.className : "")
      ).toLowerCase();

      if (/table-of-contents|(^|[\s_-])toc([\s_-]|$)|breadcrumb/.test(marker)) {
        return true;
      }

      parent = parent.parentElement;
    }

    return false;
  }

  function createCredit() {
    var box = document.createElement("div");
    box.className = "isc-article-credit";

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = CREDIT_TEXT;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    box.appendChild(link);
    return box;
  }

  /* -------------------- CREDIT DISTRIBUTION -------------------- */

  function addArticleCredits() {
    var root = findArticleRoot();

    if (!root) {
      console.warn("ITI Branding: article container not found.");
      return;
    }

    /*
      Remove old credit strips from the article first.
      This prevents multiple old and new strips from stacking.
    */
    root.querySelectorAll(
      ".isc-article-credit, .isc-credit-v14, .isc-article-credit-v14"
    ).forEach(function (credit) {
      credit.remove();
    });

    /*
      Use main section headings first.
      Do not place a strip below every small subheading.
    */
    var headings = Array.from(root.querySelectorAll("h2"))
      .filter(function (heading) {
        return heading.textContent.trim().length > 2 &&
          !isExcludedHeading(heading);
      });

    /*
      If the article uses h3 instead of h2, use h3 as fallback.
    */
    if (headings.length < 2) {
      headings = Array.from(root.querySelectorAll("h3"))
        .filter(function (heading) {
          return heading.textContent.trim().length > 2 &&
            !isExcludedHeading(heading);
        });
    }

    if (!headings.length) {
      console.warn("ITI Branding: no eligible article headings found.");
      return;
    }

    var textBlocks = root.querySelectorAll("p, li").length;

    // Short articles: 6–7; medium: 8; long: maximum 10.
    var target = textBlocks < 25 ? 6 :
                 textBlocks < 50 ? 7 :
                 textBlocks < 100 ? 8 : 10;

    // Do not place more strips than there are main sections.
    var count = Math.min(target, headings.length);

    var positions = [];

    for (var i = 0; i < count; i++) {
      var index = count === 1
        ? 0
        : Math.round(i * (headings.length - 1) / (count - 1));

      if (positions.indexOf(index) === -1) {
        positions.push(index);
      }
    }

    // Insert from bottom to top to preserve original heading references.
    positions.sort(function (a, b) {
      return b - a;
    });

    positions.forEach(function (index) {
      var heading = headings[index];

      if (heading && heading.parentNode) {
        heading.insertAdjacentElement("afterend", createCredit());
      }
    });

    console.log(
      "ITI Branding: inserted " + positions.length + " credit strips."
    );
  }

  /* -------------------- INITIALIZATION -------------------- */

  function init() {
    if (!document.body || !document.head) return;

    addStyles();
    addTopBar();
    addWatermark();
    addArticleCredits();

    // Retry after page content has finished loading.
    [1000, 2500, 5000].forEach(function (delay) {
      window.setTimeout(addArticleCredits, delay);
    });

    /*
      Refresh credits if the page adds article content dynamically.
      Avoid watching mutations created by the credit strips themselves.
    */
    if ("MutationObserver" in window) {
      var observer = new MutationObserver(function (mutations) {
        var shouldRefresh = mutations.some(function (mutation) {
          var nodes = Array.from(mutation.addedNodes || [])
            .concat(Array.from(mutation.removedNodes || []));

          return nodes.some(function (node) {
            if (node.nodeType !== 1) return false;

            return !(
              node.classList.contains("isc-article-credit") ||
              node.id === "isc-watermark" ||
              node.id === "isc-brand-bar"
            );
          });
        });

        if (shouldRefresh) {
          if (creditTimer) window.clearTimeout(creditTimer);

          creditTimer = window.setTimeout(function () {
            creditTimer = null;
            addArticleCredits();
          }, 500);
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

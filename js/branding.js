
/* ITI Study Centre Branding and Article Credits */
(function () {
  "use strict";

  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  function addStyles() {
    if (document.getElementById("isc-branding-style")) return;

    var style = document.createElement("style");
    style.id = "isc-branding-style";

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
        line-height: 1.4;
      }

      #isc-brand-bar a {
        color: #fff;
        font-size: 14px;
        font-weight: 800;
        text-decoration: none;
        letter-spacing: .35px;
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
        color: rgba(18, 52, 90, .035);
        font: 800 clamp(10px, 1.5vw, 17px)/1.3 Arial, sans-serif;
        letter-spacing: .35px;
      }

      .isc-article-credit {
        display: block;
        position: relative;
        z-index: 3;
        margin: 26px 0;
        padding: 9px 6px;
        text-align: center;
        font-family: Arial, sans-serif;
        font-size: 13px;
        line-height: 1.6;
        color: #64748b;
        border-top: 1px solid rgba(100, 116, 139, .15);
        border-bottom: 1px solid rgba(100, 116, 139, .15);
        clear: both;
      }

      .isc-article-credit a {
        color: #174a7e;
        font-weight: 600;
        text-decoration: none;
      }

      .isc-article-credit a:hover {
        text-decoration: underline;
      }

      @media (max-width: 600px) {
        #isc-brand-bar {
          padding: 7px 4px;
        }

        #isc-brand-bar a {
          font-size: 11px;
          letter-spacing: 0;
        }

        #isc-watermark span {
          font-size: 9px;
          letter-spacing: 0;
        }

        .isc-article-credit {
          margin: 20px 0;
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
      }
    `;

    document.head.appendChild(style);
  }

  function addBrandBar() {
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

  function addArticleCredits() {
    var selectors = [
      ".fitter2-section-body",
      ".section-body",
      ".article-content",
      "article",
      "main",
      ".content"
    ];

    var containers = [];
    var seen = new Set();

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el) {
        if (!seen.has(el)) {
          seen.add(el);
          containers.push(el);
        }
      });
    });

    // Prefer the largest content container with headings.
    containers.sort(function (a, b) {
      return b.querySelectorAll("h2, h3").length -
             a.querySelectorAll("h2, h3").length;
    });

    var container = containers.find(function (el) {
      return el.querySelectorAll("h2, h3").length >= 2;
    });

    if (!container) return;

    if (container.dataset.iscCreditsAdded === "yes") return;

    var headings = Array.from(
      container.querySelectorAll("h2, h3")
    ).filter(function (heading) {
      return !heading.closest("#isc-brand-bar") &&
             !heading.closest("#isc-watermark");
    });

    if (headings.length < 2) return;

    var totalCredits = Math.min(6, headings.length - 1);
    var used = [];

    for (var i = 1; i <= totalCredits; i++) {
      var index = Math.floor(
        (i * headings.length) / (totalCredits + 1)
      );

      if (index > 0 && index < headings.length &&
          used.indexOf(index) === -1) {
        used.push(index);
      }
    }

    used.sort(function (a, b) { return a - b; });

    used.forEach(function (index) {
      var heading = headings[index];
      var credit = document.createElement("div");
      credit.className = "isc-article-credit";

      var link = document.createElement("a");
      link.href = SITE_URL;
      link.textContent = CREDIT_TEXT;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      credit.appendChild(link);

      // Place the credit before the next subheading.
      heading.parentNode.insertBefore(credit, heading);
    });

    container.dataset.iscCreditsAdded = "yes";
  }

  function init() {
    if (!document.body || !document.head) return;

    addStyles();
    addBrandBar();
    addWatermark();
    addArticleCredits();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

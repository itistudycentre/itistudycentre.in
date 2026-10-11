
(function () {
  "use strict";

  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";

  /* =========================
     1. ALL STYLES
  ========================= */
  function addStyles() {
    if (document.getElementById("isc-branding-style")) return;

    var style = document.createElement("style");
    style.id = "isc-branding-style";

    style.textContent = `
      /* TOP WEBSITE BAR */
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
        color: #fff;
        font-size: 14px;
        font-weight: 800;
        text-decoration: none;
        letter-spacing: .3px;
      }

      #isc-brand-bar a:hover {
        text-decoration: underline;
      }

      /* VERY LIGHT WATERMARK
         Keep the watermark subtle so that
         the educational content remains readable.
      */
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
        color: rgba(18, 52, 90, .045);
        font-family: Arial, sans-serif;
        font-size: clamp(10px, 1.4vw, 16px);
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: .25px;
        text-shadow: none;
      }

      /* ARTICLE CREDIT */
      .isc-article-credit {
        display: block;
        clear: both;
        position: relative;
        z-index: 3;
        box-sizing: border-box;
        width: 100%;
        margin: 18px 0;
        padding: 6px 10px;
        text-align: right;
        font-family: Arial, sans-serif;
        font-size: 12px;
        line-height: 1.5;
        background: transparent;
        border-top: 1px solid rgba(18, 52, 90, .10);
        border-bottom: 1px solid rgba(18, 52, 90, .10);
      }

      .isc-article-credit a {
        color: #34516e;
        font-weight: 500;
        text-decoration: underline;
      }

      .isc-article-credit a:hover {
        color: #b07800;
      }

      /* MOBILE */
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
          color: rgba(18, 52, 90, .045);
          letter-spacing: 0;
        }

        .isc-article-credit {
          margin: 14px 0;
          padding: 6px 4px;
          font-size: 11px;
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

  /* =========================
     2. TOP BRANDING BAR
  ========================= */
  function addBrandBar() {
    if (document.getElementById("isc-brand-bar")) return;

    var bar = document.createElement("div");
    bar.id = "isc-brand-bar";

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = SITE_NAME + "     " + SITE_TEXT;
    link.setAttribute(
      "aria-label",
      SITE_NAME + " - " + SITE_TEXT
    );

    bar.appendChild(link);
    document.body.insertBefore(bar, document.body.firstChild);
  }

  /* =========================
     3. BACKGROUND WATERMARK
  ========================= */
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

  /* =========================
     4. ARTICLE CREDITS
     Add up to 6 clickable credits
     throughout a long article.
  ========================= */
  function addArticleCredits() {
    var container =
      document.querySelector("main.module-content") ||
      document.querySelector("main");

    if (!container) {
      container =
        document.querySelector("article") ||
        document.querySelector(".module-content") ||
        document.querySelector(".article-content");
    }

    if (!container) return;

    var sections = Array.from(
      container.querySelectorAll(".content-card")
    );

    if (!sections.length) {
      sections = Array.from(
        container.querySelectorAll("section")
      );
    }

    if (!sections.length) return;

    // Select up to 6 sections spread across the article.
    var count = Math.min(6, sections.length);
    var indexes = [];

    for (var i = 0; i < count; i++) {
      var idx = count === 1
        ? 0
        : Math.round(
            i * (sections.length - 1) / (count - 1)
          );

      if (indexes.indexOf(idx) === -1) {
        indexes.push(idx);
      }
    }

    indexes.forEach(function (idx) {
      var section = sections[idx];
      if (!section) return;

      // Prevent duplicate credits in this section.
      if (section.querySelector(".isc-article-credit")) {
        return;
      }

      var credit = document.createElement("div");
      credit.className = "isc-article-credit";

      var link = document.createElement("a");
      link.href = SITE_URL;
      link.textContent = "Article by www.itistudycentre.in";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      credit.appendChild(link);

      var firstParagraph = section.querySelector("p");
      var heading = section.querySelector(
        "h2, h3, h4, h5, h6"
      );

      if (firstParagraph) {
        firstParagraph.insertAdjacentElement(
          "afterend",
          credit
        );
      } else if (heading) {
        heading.insertAdjacentElement(
          "afterend",
          credit
        );
      } else {
        section.appendChild(credit);
      }
    });
  }

  /* =========================
     5. INITIALIZE
  ========================= */
  function initBranding() {
    if (!document.body || !document.head) return;

    addStyles();
    addBrandBar();
    addWatermark();
    addArticleCredits();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initBranding,
      { once: true }
    );
  } else {
    initBranding();
  }

  // Retry after the page and its content have fully loaded.
  window.addEventListener("load", initBranding);

  // Support pages whose article content is inserted later.
  if (document.body && window.MutationObserver) {
    var observer = new MutationObserver(function () {
      if (
        document.querySelector("main.module-content .content-card") &&
        !document.querySelector(
          "main.module-content .isc-article-credit"
        )
      ) {
        addArticleCredits();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();

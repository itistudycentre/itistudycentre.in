
(function () {
  "use strict";

  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";

  /* 1. STYLES */
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

      /* VERY LIGHT WATERMARK */
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
        margin: 24px 0;
        padding: 7px 10px;
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
          color: rgba(18, 52, 90, .035);
        }

        .isc-article-credit {
          margin: 18px 0;
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

  /* 2. TOP BRAND BAR */
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

  /* 3. BACKGROUND WATERMARK */
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

  /* 4. ADD CREDITS SPREAD ACROSS THE WHOLE ARTICLE */
  function addArticleCredits() {
    var container =
      document.querySelector("main.module-content") ||
      document.querySelector("main article") ||
      document.querySelector("article") ||
      document.querySelector("main") ||
      document.querySelector(".article-content");

    if (!container) return;

    /*
      Remove old credits inside this article first.
      This prevents old, closely spaced credits from
      remaining when this function runs again.
    */
    container
      .querySelectorAll(".isc-article-credit")
      .forEach(function (item) {
        item.remove();
      });

    /*
      Collect paragraphs across the whole article,
      rather than selecting every small section.
    */
    var paragraphs = Array.from(
      container.querySelectorAll("p")
    ).filter(function (p) {
      return !p.closest(".isc-article-credit") &&
             p.textContent.trim().length > 0;
    });

    if (paragraphs.length < 2) return;

    // Maximum 6 credits for the entire article.
    var creditCount = Math.min(6, paragraphs.length);
    var selected = [];

    /*
      Place credits at evenly spaced paragraph positions.
      The first and last paragraphs are not used.
    */
    for (var i = 1; i <= creditCount; i++) {
      var index = Math.round(
        (i * paragraphs.length) / (creditCount + 1)
      );

      index = Math.max(
        0,
        Math.min(paragraphs.length - 1, index)
      );

      if (selected.indexOf(index) === -1) {
        selected.push(index);
      }
    }

    selected.forEach(function (index) {
      var paragraph = paragraphs[index];
      if (!paragraph || !paragraph.parentNode) return;

      var credit = document.createElement("div");
      credit.className = "isc-article-credit";

      var link = document.createElement("a");
      link.href = SITE_URL;
      link.textContent = "Article by www.itistudycentre.in";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      credit.appendChild(link);

      // Keep the credit in the article's normal flow.
      paragraph.insertAdjacentElement("afterend", credit);
    });
  }

  /* 5. INITIALIZE */
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

})();


(function () {
  "use strict";

  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  var lastSignature = "";
  var refreshTimer = null;
  var contentObserver = null;
  var bodyObserver = null;
  var observedContainer = null;

  /* =========================================
     1. STYLES
  ========================================= */
  function addStyles() {
    var oldStyle = document.getElementById("isc-branding-style");
    if (oldStyle) oldStyle.remove();

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

      /* WATERMARK: VISIBLE BUT TRANSPARENT */
      #isc-watermark {
        position: fixed;
        inset: 0;
        z-index: 9998;
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
        color: rgba(18, 52, 90, .06);
        font-family: Arial, sans-serif;
        font-size: clamp(10px, 1.4vw, 16px);
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: .25px;
        text-shadow: none;
      }

      /* ARTICLE CREDIT */
      .isc-article-credit {
        display: block !important;
        clear: both;
        position: relative;
        z-index: 10000;
        box-sizing: border-box;
        width: 100%;
        margin: 24px 0 !important;
        padding: 8px 10px;
        text-align: right;
        font-family: Arial, sans-serif;
        font-size: 12px;
        line-height: 1.6;
        background: transparent;
        border-top: 1px solid rgba(18, 52, 90, .18);
        border-bottom: 1px solid rgba(18, 52, 90, .18);
      }

      .isc-article-credit a {
        display: inline-block;
        color: #34516e !important;
        font-weight: 600;
        text-decoration: underline;
        visibility: visible !important;
        opacity: 1 !important;
      }

      .isc-article-credit a:hover {
        color: #b07800 !important;
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
          font-size: 10px;
          color: rgba(18, 52, 90, .06);
        }

        .isc-article-credit {
          margin: 20px 0 !important;
          padding: 7px 4px;
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

  /* =========================================
     2. TOP BRAND BAR
  ========================================= */
  function addBrandBar() {
    var existing = document.getElementById("isc-brand-bar");
    if (existing) existing.remove();

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

  /* =========================================
     3. WATERMARK
  ========================================= */
  function addWatermark() {
    var existing = document.getElementById("isc-watermark");
    if (existing) existing.remove();

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

  /* =========================================
     4. FIND MAIN ARTICLE
  ========================================= */
  function getArticleContainer() {
    return document.querySelector("main.module-content") ||
      document.querySelector("main article") ||
      document.querySelector("article") ||
      document.querySelector(".module-content") ||
      document.querySelector(".article-content") ||
      document.querySelector("main");
  }

  function getParagraphs(container) {
    return Array.from(container.querySelectorAll("p")).filter(
      function (p) {
        return p.textContent.trim().length > 0 &&
          !p.closest(
            "header, nav, footer, #isc-brand-bar, " +
            "#isc-watermark, .isc-article-credit"
          );
      }
    );
  }

  /* =========================================
     5. NUMBER OF CREDITS
     Long article: 8 credits
     Shorter article: fewer, spaced credits
  ========================================= */
  function getCreditCount(paragraphCount) {
    if (paragraphCount >= 14) return 8;
    if (paragraphCount >= 9) return 6;
    if (paragraphCount >= 5) return 4;
    if (paragraphCount >= 2) return 2;
    return 0;
  }

  function createCredit() {
    var credit = document.createElement("div");
    credit.className = "isc-article-credit";

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = CREDIT_TEXT;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    credit.appendChild(link);
    return credit;
  }

  /* =========================================
     6. ADD CREDITS TOP, MIDDLE AND BOTTOM
  ========================================= */
  function addArticleCredits() {
    var container = getArticleContainer();
    if (!container) return;

    container.querySelectorAll(".isc-article-credit").forEach(
      function (item) {
        item.remove();
      }
    );

    var paragraphs = getParagraphs(container);
    var n = paragraphs.length;
    var totalCredits = getCreditCount(n);

    if (!totalCredits || !n) return;

    /* TOP CREDIT: before the first article paragraph */
    paragraphs[0].insertAdjacentElement(
      "beforebegin",
      createCredit()
    );

    /* BOTTOM CREDIT: after the last article paragraph */
    paragraphs[n - 1].insertAdjacentElement(
      "afterend",
      createCredit()
    );

    /* MIDDLE CREDITS: evenly distributed */
    var middleCount = totalCredits - 2;
    var selectedIndexes = [];

    for (var i = 1; i <= middleCount; i++) {
      var index = Math.round(
        (i * (n - 1)) / (middleCount + 1)
      );

      index = Math.max(1, Math.min(n - 2, index));

      if (selectedIndexes.indexOf(index) === -1) {
        selectedIndexes.push(index);
      }
    }

    /* Insert from bottom to top for stable placement */
    selectedIndexes.sort(function (a, b) {
      return b - a;
    });

    selectedIndexes.forEach(function (index) {
      var paragraph = paragraphs[index];

      if (paragraph && paragraph.parentNode) {
        paragraph.insertAdjacentElement(
          "afterend",
          createCredit()
        );
      }
    });
  }

  /* =========================================
     7. DETECT CONTENT CHANGES
  ========================================= */
  function getSignature(container) {
    var paragraphs = getParagraphs(container);

    return paragraphs.length + "|" +
      paragraphs.map(function (p) {
        return p.textContent.trim();
      }).join("\u241f");
  }

  function refreshCredits() {
    refreshTimer = null;

    var container = getArticleContainer();
    if (!container) return;

    var signature = getSignature(container);
    var expectedCount = getCreditCount(
      getParagraphs(container).length
    );

    var currentCount = container.querySelectorAll(
      ".isc-article-credit"
    ).length;

    if (
      signature === lastSignature &&
      currentCount === expectedCount
    ) {
      return;
    }

    addArticleCredits();

    lastSignature = getSignature(container);
  }

  function scheduleRefresh() {
    if (refreshTimer !== null) {
      window.clearTimeout(refreshTimer);
    }

    refreshTimer = window.setTimeout(refreshCredits, 400);
  }

  function watchArticle() {
    var container = getArticleContainer();
    if (!container || !("MutationObserver" in window)) return;

    if (container === observedContainer && contentObserver) return;

    if (contentObserver) contentObserver.disconnect();

    observedContainer = container;
    lastSignature = getSignature(container);

    contentObserver = new MutationObserver(function () {
      scheduleRefresh();
    });

    contentObserver.observe(container, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  /* =========================================
     8. INITIALIZE AND HANDLE LATE-LOADED CONTENT
  ========================================= */
  function initBranding() {
    if (!document.body || !document.head) return;

    addStyles();
    addBrandBar();
    addWatermark();
    addArticleCredits();

    var container = getArticleContainer();
    lastSignature = container ? getSignature(container) : "";

    watchArticle();

    if ("MutationObserver" in window) {
      if (bodyObserver) bodyObserver.disconnect();

      bodyObserver = new MutationObserver(function () {
        var current = getArticleContainer();

        if (current && current !== observedContainer) {
          watchArticle();
          scheduleRefresh();
        } else if (current) {
          scheduleRefresh();
        }
      });

      bodyObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
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


(function () {
  "use strict";

  // Prevent duplicate initialization
  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  var articleObserver = null;
  var pageObserver = null;
  var activeContainer = null;
  var refreshTimer = null;
  var isUpdating = false;

  /* ---------------- CSS ---------------- */

  function addStyles() {
    if (document.getElementById("isc-branding-style")) return;

    var style = document.createElement("style");
    style.id = "isc-branding-style";

    style.textContent = `
      #isc-brand-bar {
        position: relative;
        z-index: 10001;
        width: 100%;
        box-sizing: border-box;
        padding: 9px 8px;
        text-align: center;
        background: #12345a;
        border-bottom: 2px solid #e6b84a;
        font-family: Arial, sans-serif;
        line-height: 1.5;
      }

      #isc-brand-bar a {
        color: #ffffff !important;
        font-size: 14px;
        font-weight: 800;
        text-decoration: none !important;
        letter-spacing: .3px;
      }

      #isc-brand-bar a:hover {
        text-decoration: underline !important;
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
        white-space: nowrap;
        display: block;
        transform: rotate(-28deg);
        color: rgba(18, 52, 90, .065);
        font-family: Arial, sans-serif;
        font-size: clamp(10px, 1.4vw, 16px);
        font-weight: 700;
        letter-spacing: .2px;
      }

      .isc-article-credit {
        display: block !important;
        position: relative;
        z-index: 3;
        clear: both;
        box-sizing: border-box;
        width: 100%;
        margin: 22px 0 !important;
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
        color: #34516e !important;
        font-weight: 700 !important;
        text-decoration: underline !important;
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
        }

        .isc-article-credit {
          margin: 18px 0 !important;
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

        .isc-article-credit {
          break-inside: avoid;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* ---------------- HEADER ---------------- */

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

  /* ---------------- WATERMARK ---------------- */

  function addWatermark() {
    if (document.getElementById("isc-watermark")) return;

    var layer = document.createElement("div");
    layer.id = "isc-watermark";
    layer.setAttribute("aria-hidden", "true");

    for (var i = 0; i < 24; i++) {
      var mark = document.createElement("span");
      mark.textContent = SITE_NAME + "   " + SITE_TEXT;
      layer.appendChild(mark);
    }

    document.body.appendChild(layer);
  }

  /* ---------------- ARTICLE DETECTION ---------------- */

  function getArticleContainer() {
    var selectors = [
      "main.module-content",
      ".module-content",
      ".article-content",
      ".theory-content",
      ".notes-content",
      "main article",
      "article",
      "main",
      "#content",
      ".content"
    ];

    for (var i = 0; i < selectors.length; i++) {
      var element = document.querySelector(selectors[i]);

      if (
        element &&
        !element.closest("#isc-brand-bar") &&
        element.querySelector("p, li, h2, h3")
      ) {
        return element;
      }
    }

    return null;
  }

  function getArticleBlocks(container) {
    if (!container) return [];

    return Array.from(
      container.querySelectorAll("p, li, h2, h3")
    ).filter(function (element) {
      if (!element.textContent.trim()) return false;

      if (
        element.closest(
          "header, nav, footer, #isc-brand-bar, #isc-watermark, .isc-article-credit"
        )
      ) {
        return false;
      }

      // Ignore short navigation labels and empty headings
      if (
        (element.tagName === "H2" || element.tagName === "H3") &&
        element.textContent.trim().length < 8
      ) {
        return false;
      }

      return true;
    });
  }

  /* ---------------- CREDIT ---------------- */

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

  function addArticleCredits() {
    if (isUpdating) return;

    var container = getArticleContainer();

    if (!container) {
      console.warn(
        "ITI Branding: article container not found. Check the page HTML."
      );
      return;
    }

    var blocks = getArticleBlocks(container);

    if (blocks.length < 2) {
      console.warn(
        "ITI Branding: not enough article blocks to insert credits."
      );
      return;
    }

    isUpdating = true;

    try {
      // Remove previous credits so they are not duplicated
      container.querySelectorAll(".isc-article-credit").forEach(
        function (credit) {
          credit.remove();
        }
      );

      // Up to 8 credits, spread across the article
      var totalCredits = Math.min(8, blocks.length);
      var positions = [];

      for (var i = 0; i < totalCredits; i++) {
        var index = totalCredits === 1
          ? 0
          : Math.round(
              i * (blocks.length - 1) / (totalCredits - 1)
            );

        if (positions.indexOf(index) === -1) {
          positions.push(index);
        }
      }

      // Insert from bottom to top so indexes remain valid
      positions.sort(function (a, b) {
        return b - a;
      });

      positions.forEach(function (index) {
        var block = blocks[index];

        if (block && block.parentNode) {
          block.insertAdjacentElement("afterend", createCredit());
        }
      });

      console.log(
        "ITI Branding: inserted " + positions.length + " article credits."
      );
    } finally {
      isUpdating = false;
    }
  }

  /* ---------------- DYNAMIC CONTENT ---------------- */

  function scheduleRefresh() {
    if (refreshTimer) {
      window.clearTimeout(refreshTimer);
    }

    refreshTimer = window.setTimeout(function () {
      refreshTimer = null;

      var newContainer = getArticleContainer();

      if (newContainer && newContainer !== activeContainer) {
        observeArticle(newContainer);
      }

      addArticleCredits();
    }, 400);
  }

  function observeArticle(container) {
    if (!container || !("MutationObserver" in window)) return;

    if (articleObserver) {
      articleObserver.disconnect();
    }

    activeContainer = container;
    articleObserver = new MutationObserver(function (mutations) {
      var relevantChange = mutations.some(function (mutation) {
        var target = mutation.target.nodeType === 1
          ? mutation.target
          : mutation.target.parentElement;

        if (
          target &&
          target.closest &&
          target.closest(".isc-article-credit")
        ) {
          return false;
        }

        var changedNodes = Array.from(mutation.addedNodes || [])
          .concat(Array.from(mutation.removedNodes || []));

        return changedNodes.some(function (node) {
          if (node.nodeType !== 1) return true;

          return !(
            node.matches(".isc-article-credit") ||
            node.closest(".isc-article-credit")
          );
        }) || mutation.type === "characterData";
      });

      if (relevantChange && !isUpdating) {
        scheduleRefresh();
      }
    });

    articleObserver.observe(container, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  /* ---------------- INITIALIZATION ---------------- */

  function initBranding() {
    if (!document.body || !document.head) return;

    addStyles();
    addBrandBar();
    addWatermark();
    addArticleCredits();

    var container = getArticleContainer();

    if (container) {
      observeArticle(container);
    }

    // Retry in case article content loads after the page
    [1000, 2500, 5000].forEach(function (delay) {
      window.setTimeout(function () {
        var current = getArticleContainer();

        if (current && current !== activeContainer) {
          observeArticle(current);
        }

        addArticleCredits();
      }, delay);
    });

    // Detect when the page inserts its article container later
    if ("MutationObserver" in window && !pageObserver) {
      pageObserver = new MutationObserver(function () {
        var current = getArticleContainer();

        if (current && current !== activeContainer) {
          observeArticle(current);
          scheduleRefresh();
        }
      });

      pageObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBranding, {
      once: true
    });
  } else {
    initBranding();
  }
})();

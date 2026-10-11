
(function () {
  "use strict";

  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";
  var refreshTimer = null;
  var lastArticleSignature = "";
  var observedContainer = null;
  var articleObserver = null;

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

      /* WATERMARK */
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
        color: rgba(18, 52, 90, .085);
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
        margin: 26px 0;
        padding: 7px 10px;
        text-align: right;
        font-family: Arial, sans-serif;
        font-size: 12px;
        line-height: 1.5;
        background: transparent;
        border-top: 1px solid rgba(18, 52, 90, .14);
        border-bottom: 1px solid rgba(18, 52, 90, .14);
      }

      .isc-article-credit a {
        color: #34516e;
        font-weight: 600;
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
          color: rgba(18, 52, 90, .085);
        }

        .isc-article-credit {
          margin: 20px 0;
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

  /* 3. WATERMARK */
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

  /* 4. FIND ARTICLE */
  function getArticleContainer() {
    return document.querySelector("main.module-content") ||
      document.querySelector("main article") ||
      document.querySelector("article") ||
      document.querySelector("main") ||
      document.querySelector(".module-content") ||
      document.querySelector(".article-content");
  }

  function getArticleParagraphs(container) {
    return Array.from(container.querySelectorAll("p")).filter(
      function (p) {
        return p.textContent.trim().length > 0 &&
          !p.closest(
            "header, nav, footer, #isc-brand-bar, .isc-article-credit"
          );
      }
    );
  }

  function getSignature(container) {
    var paragraphs = getArticleParagraphs(container);

    return paragraphs.length + "|" +
      paragraphs.map(function (p) {
        return p.textContent.trim();
      }).join("\u241f");
  }

  /* 5. ADD ARTICLE CREDITS */
  function addArticleCredits() {
    var container = getArticleContainer();
    if (!container) return;

    container.querySelectorAll(".isc-article-credit").forEach(
      function (item) {
        item.remove();
      }
    );

    var paragraphs = getArticleParagraphs(container);

    if (paragraphs.length < 4) return;

    /* Maximum 6 credits across the article */
    var creditCount = Math.min(
      6,
      Math.max(1, Math.floor(paragraphs.length / 8))
    );

    var indexes = [];

    for (var i = 1; i <= creditCount; i++) {
      var index = Math.round(
        (i * paragraphs.length) / (creditCount + 1)
      ) - 1;

      index = Math.max(
        1,
        Math.min(paragraphs.length - 1, index)
      );

      if (indexes.indexOf(index) === -1) {
        indexes.push(index);
      }
    }

    indexes.forEach(function (index) {
      var paragraph = paragraphs[index];
      if (!paragraph || !paragraph.parentNode) return;

      var credit = document.createElement("div");
      credit.className = "isc-article-credit";

      var link = document.createElement("a");
      link.href = SITE_URL;
      link.textContent = CREDIT_TEXT;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      credit.appendChild(link);
      paragraph.insertAdjacentElement("afterend", credit);
    });
  }

  /* 6. REFRESH WHEN ARTICLE CONTENT CHANGES */
  function refreshCreditsIfChanged() {
    refreshTimer = null;

    var container = getArticleContainer();
    if (!container) return;

    var signature = getSignature(container);
    if (signature === lastArticleSignature) return;

    lastArticleSignature = signature;
    addArticleCredits();
  }

  function queueCreditRefresh() {
    if (refreshTimer !== null) {
      window.clearTimeout(refreshTimer);
    }

    refreshTimer = window.setTimeout(
      refreshCreditsIfChanged,
      300
    );
  }

  function watchArticleContent() {
    var container = getArticleContainer();

    if (!container || !("MutationObserver" in window)) return;

    if (container !== observedContainer) {
      if (articleObserver) articleObserver.disconnect();

      observedContainer = container;
      lastArticleSignature = getSignature(container);

      articleObserver = new MutationObserver(function (mutations) {
        var relevant = mutations.some(function (mutation) {
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

          var changedNodes = Array.from(
            mutation.addedNodes || []
          ).concat(
            Array.from(mutation.removedNodes || [])
          );

          if (
            changedNodes.length &&
            changedNodes.every(function (node) {
              return node.nodeType === 1 &&
                (
                  node.matches(".isc-article-credit") ||
                  node.closest(".isc-article-credit")
                );
            })
          ) {
            return false;
          }

          return true;
        });

        if (relevant) queueCreditRefresh();
      });

      articleObserver.observe(container, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }
  }

  /* 7. INITIALIZE */
  function initBranding() {
    if (!document.body || !document.head) return;

    addStyles();
    addBrandBar();
    addWatermark();
    addArticleCredits();
    watchArticleContent();

    /* Detect article containers added later */
    if ("MutationObserver" in window) {
      var bodyObserver = new MutationObserver(function () {
        var current = getArticleContainer();

        if (current && current !== observedContainer) {
          addArticleCredits();
          watchArticleContent();
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

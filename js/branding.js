/* =========================================================
   ITI STUDY CENTRE — BRANDING
   File: /js/branding.js

   Responsibilities:
     1. Persistent top brand bar
        "ITI STUDY CENTRE     WWW.ITISTUDYCENTRE.IN"
     2. Repeating diagonal watermark
     3. Automatic "Article by www.itistudycentre.in" credit strips
        distributed evenly through article content (6–10 per article)

   Designed to survive:
     • dynamically loaded article bodies
     • repeated initialisation
     • old credit elements left behind by previous versions
     • MutationObserver feedback loops
========================================================= */

(function () {
  "use strict";

  /* Hard guard: run only once per page */
  if (window.__itiBrandingFinal) return;
  window.__itiBrandingFinal = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  /* All known credit class names from previous versions.
     Removing all of them before re-inserting prevents duplicates. */
  var OLD_CREDIT_SELECTOR = [
    ".isc-article-credit",
    ".isc-credit-v14",
    ".isc-article-credit-v14",
    ".isc-credit-strip",
    ".article-credit",
    ".iti-credit"
  ].join(", ");

  var creditTimer = null;
  var lastSignature = "";

  /* -------------------- STYLES -------------------- */

  function addStyles() {
    if (document.getElementById("isc-branding-final-style")) return;

    var style = document.createElement("style");
    style.id = "isc-branding-final-style";
    style.textContent = [
      "#isc-brand-bar{position:sticky;top:0;z-index:10001;width:100%;",
      "box-sizing:border-box;padding:8px 10px;text-align:center;",
      "background:#12345a;border-bottom:2px solid #e6b84a;",
      "font-family:Arial,sans-serif;line-height:1.5}",

      "#isc-brand-bar a{color:#fff !important;font-size:14px;font-weight:800;",
      "text-decoration:none !important;letter-spacing:.3px}",

      "#isc-watermark{position:fixed;inset:0;z-index:2;display:grid;",
      "grid-template-columns:repeat(3,minmax(0,1fr));",
      "grid-template-rows:repeat(8,minmax(0,1fr));",
      "align-items:center;justify-items:center;overflow:hidden;",
      "pointer-events:none;user-select:none;-webkit-user-select:none}",

      "#isc-watermark span{display:block;white-space:nowrap;",
      "transform:rotate(-28deg);color:rgba(18,52,90,.055);",
      "font:800 clamp(10px,1.4vw,16px)/1.3 Arial,sans-serif;",
      "letter-spacing:.2px}",

      ".isc-article-credit{display:block !important;position:relative;z-index:3;",
      "clear:both;box-sizing:border-box;width:100%;",
      "margin:16px 0 24px !important;padding:11px 12px;text-align:center;",
      "background:#eef3f8;border:1px solid #d4dfeb;",
      "border-left:4px solid #34516e;border-radius:4px;color:#34516e;",
      "font:13px/1.6 Arial,sans-serif;overflow-wrap:anywhere}",

      ".isc-article-credit a{color:#23486b !important;font-weight:700 !important;",
      "text-decoration:underline !important;text-underline-offset:2px}",

      ".isc-article-credit a:hover{color:#a16c00 !important}",

      "@media (max-width:600px){",
      "#isc-brand-bar{padding:7px 4px}",
      "#isc-brand-bar a{font-size:11px;letter-spacing:0}",
      "#isc-watermark{grid-template-columns:repeat(2,minmax(0,1fr));",
      "grid-template-rows:repeat(10,minmax(0,1fr))}",
      "#isc-watermark span{font-size:9px}",
      ".isc-article-credit{margin:13px 0 20px !important;padding:9px 5px;font-size:12px}",
      "}",

      "@media print{",
      "#isc-brand-bar{position:static}",
      "#isc-watermark{position:fixed}",
      ".isc-article-credit{break-inside:avoid;print-color-adjust:exact;",
      "-webkit-print-color-adjust:exact}",
      "}"
    ].join("");
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
      ".post-content",
      ".entry-content",
      ".fitter2-section-body",
      ".section-body",
      "main article",
      "article",
      "[role='main']",
      "main",
      "#main-content",
      "#content",
      ".content-area",
      ".content"
    ];

    for (var i = 0; i < selectors.length; i++) {
      var root = document.querySelector(selectors[i]);
      if (root && root.querySelector("h2, h3")) {
        return root;
      }
    }
    return null;
  }

  function isExcludedHeading(heading) {
    if (heading.closest(
      "header, nav, footer, #isc-brand-bar, #isc-watermark, " +
      ".isc-article-credit, .toc, #toc, .table-of-contents, " +
      ".breadcrumb, .breadcrumbs, table, thead, tbody, tr, td, th, " +
      "aside, .sidebar, #sidebar"
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

  function getEligibleHeadings(root, tag) {
    return Array.prototype.slice.call(root.querySelectorAll(tag))
      .filter(function (h) {
        return h.textContent.trim().length > 2 && !isExcludedHeading(h);
      });
  }

  /*
    Choose which headings will be used as insertion points.

    • If there are enough <h2> headings to reach the target, use only
      <h2> — this keeps credits well separated.
    • Otherwise, add <h3> headings in document order so shorter
      articles can still reach the target number of strips.
  */
  function getArticleHeadings(root, target) {
    var h2 = getEligibleHeadings(root, "h2");

    if (h2.length >= target) return h2;

    var h3 = getEligibleHeadings(root, "h3");
    var combined = h2.concat(h3);

    combined.sort(function (a, b) {
      if (a === b) return 0;
      return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING)
        ? -1 : 1;
    });

    return combined;
  }

  function createCredit() {
    var box = document.createElement("div");
    box.className = "isc-article-credit";
    box.setAttribute("data-isc-credit", "1");

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = CREDIT_TEXT;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    box.appendChild(link);
    return box;
  }

  function removeOldCredits(root) {
    root.querySelectorAll(OLD_CREDIT_SELECTOR).forEach(function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  /* -------------------- CREDIT DISTRIBUTION -------------------- */

  function addArticleCredits() {
    var root = findArticleRoot();

    if (!root) {
      console.warn("ITI Branding: article container not found.");
      return;
    }

    var textBlocks = root.querySelectorAll("p, li").length;

    /* Short: 6, medium: 7, long: 8, very long: 10 — hard cap 10. */
    var target = textBlocks < 30 ? 6 :
                 textBlocks < 70 ? 7 :
                 textBlocks < 150 ? 8 : 10;

    var headings = getArticleHeadings(root, target);

    if (!headings.length) {
      console.warn("ITI Branding: no eligible article headings found.");
      return;
    }

    var count = Math.min(target, headings.length);

    /*
      Build a "signature" describing the current article structure.
      If nothing meaningful changed, skip the remove/reinsert cycle
      so we never cause a MutationObserver loop.
    */
    var signature = [
      root.tagName,
      root.id || "",
      typeof root.className === "string" ? root.className : "",
      headings.length,
      count,
      textBlocks
    ].join("|");

    var existingCredits = root.querySelectorAll(".isc-article-credit").length;

    if (existingCredits === count && lastSignature === signature) {
      return;
    }
    lastSignature = signature;

    /* Now it is safe to remove old credits — we already know the
       replacement plan will succeed. */
    removeOldCredits(root);

    /* Evenly spaced positions from first to last heading. */
    var positions = [];
    for (var i = 0; i < count; i++) {
      var idx = count === 1
        ? 0
        : Math.round(i * (headings.length - 1) / (count - 1));

      if (positions.indexOf(idx) === -1) positions.push(idx);
    }

    /* Insert from bottom to top so earlier indices stay valid. */
    positions.sort(function (a, b) { return b - a; });

    positions.forEach(function (idx) {
      var heading = headings[idx];
      if (heading && heading.parentNode) {
        heading.insertAdjacentElement("afterend", createCredit());
      }
    });

    console.log(
      "ITI Branding: inserted " + positions.length + " credit strips " +
      "(text blocks: " + textBlocks + ", headings: " + headings.length + ")."
    );
  }

  /* -------------------- MUTATION OBSERVER -------------------- */

  function startObserver() {
    if (!("MutationObserver" in window)) return;

    var observer = new MutationObserver(function (mutations) {
      var shouldRefresh = mutations.some(function (mutation) {
        var nodes = Array.prototype.slice.call(mutation.addedNodes)
          .concat(Array.prototype.slice.call(mutation.removedNodes));

        return nodes.some(function (node) {
          if (node.nodeType !== 1) return false;

          /* Ignore our own UI — otherwise the observer loops forever. */
          if (node.id === "isc-brand-bar" || node.id === "isc-watermark") {
            return false;
          }
          if (node.classList && node.classList.contains("isc-article-credit")) {
            return false;
          }
          if (node.hasAttribute && node.hasAttribute("data-isc-credit")) {
            return false;
          }
          return true;
        });
      });

      if (!shouldRefresh) return;

      if (creditTimer) window.clearTimeout(creditTimer);
      creditTimer = window.setTimeout(function () {
        creditTimer = null;
        addArticleCredits();
      }, 600);
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* -------------------- INITIALIZATION -------------------- */

  function init() {
    if (!document.body || !document.head) return;

    addStyles();
    addTopBar();
    addWatermark();
    addArticleCredits();

    /* Retry for pages that load article content shortly after
       DOMContentLoaded (fetch, template rendering, etc.). */
    [800, 2000, 4000, 7000].forEach(function (delay) {
      window.setTimeout(addArticleCredits, delay);
    });

    startObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

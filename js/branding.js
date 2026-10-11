/* =========================================================
   ITI STUDY CENTRE — BRANDING
   File: /js/branding.js

   Responsibilities:
     1. Persistent top brand bar
        "ITI STUDY CENTRE     WWW.ITISTUDYCENTRE.IN"
     2. Repeating diagonal watermark
     3. Automatic "Article by www.itistudycentre.in" credit strips
        evenly distributed across the WHOLE article (6–10 strips)

   Credit placement strategy (v2):
     • Collect every content block (p, ul, ol, blockquote, table,
       pre, figure) inside the article.
     • Ignore headers, nav, TOC, sidebar, comments, footer.
     • Split the block list into N equal segments and drop one
       credit after the last block of each segment.
     • Result: strips appear evenly from near the top to near the
       bottom of the article, never clustered.
     • Target N depends on article length: 6, 7, 8, 9 or 10.
     • Never more than 10 strips per page.
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

  /* Every credit class name we have ever used — remove them all
     before reinserting, so no duplicates from old versions remain. */
  var OLD_CREDIT_SELECTOR = [
    ".isc-article-credit",
    ".isc-credit-v14",
    ".isc-article-credit-v14",
    ".isc-credit-strip",
    ".article-credit",
    ".iti-credit"
  ].join(", ");

  /* Content blocks that we use as insertion anchors. */
  var BLOCK_SELECTOR =
    "p, ul, ol, blockquote, table, pre, figure";

  /* Elements that must never receive a credit or anchor one. */
  var EXCLUDE_ANCESTOR =
    "header, nav, footer, aside, " +
    "#isc-brand-bar, #isc-watermark, " +
    ".isc-article-credit, .toc, #toc, .table-of-contents, " +
    ".breadcrumb, .breadcrumbs, " +
    ".iti-comments, .isc-comments, #comments, .comments, " +
    "form, .sidebar, #sidebar, .widget, .advertisement, .ads";

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
      "margin:18px 0 26px !important;padding:12px 14px;text-align:center;",
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
      ".isc-article-credit{margin:14px 0 20px !important;padding:10px 6px;font-size:12px}",
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
      if (root && root.querySelector("p, h2, h3")) {
        return root;
      }
    }
    return null;
  }

  /* Collect every content block in document order, excluding
     everything that lives inside a header, nav, TOC, sidebar,
     comments area, form, etc. Also skips blocks nested inside
     another collected block (e.g. <p> inside <blockquote>). */
  function collectContentBlocks(root) {
    var all = root.querySelectorAll(BLOCK_SELECTOR);
    var result = [];

    Array.prototype.forEach.call(all, function (el) {
      /* Skip empty blocks (whitespace only, no image / table cell) */
      if (!el.textContent.replace(/\s+/g, "").length &&
          !el.querySelector("img, video, iframe, svg")) {
        return;
      }

      /* Skip excluded areas */
      if (el.closest(EXCLUDE_ANCESTOR)) return;

      /* Skip blocks nested inside another collected block */
      var p = el.parentElement;
      while (p && p !== root) {
        if (p.matches && p.matches(BLOCK_SELECTOR)) return;
        p = p.parentElement;
      }

      result.push(el);
    });

    return result;
  }

  function pickTarget(textLen) {
    if (textLen < 2500) return 6;
    if (textLen < 6000) return 7;
    if (textLen < 12000) return 8;
    if (textLen < 25000) return 9;
    return 10;
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

  function removeAllOldCredits() {
    /* Remove credits anywhere in the document — including stray
       ones left outside the article root by older versions. */
    document.querySelectorAll(OLD_CREDIT_SELECTOR).forEach(function (el) {
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

    var blocks = collectContentBlocks(root);

    if (blocks.length < 4) {
      console.warn(
        "ITI Branding: not enough content blocks (found " +
        blocks.length + "). Skipping credits."
      );
      return;
    }

    var textLen = (root.innerText || root.textContent || "").length;
    var target = pickTarget(textLen);

    /* Never insert two credits closer than 2 blocks apart. */
    var maxCredits = Math.floor((blocks.length - 1) / 2) + 1;
    target = Math.min(target, maxCredits);
    target = Math.max(target, 3);

    /* Signature check — skip the remove/reinsert cycle if nothing
       structural has changed. Prevents observer feedback loops. */
    var signature = [
      blocks.length,
      target,
      textLen,
      root.tagName,
      root.id || "",
      typeof root.className === "string" ? root.className : ""
    ].join("|");

    var existing = document.querySelectorAll(".isc-article-credit").length;

    if (signature === lastSignature && existing === target) {
      return;
    }
    lastSignature = signature;

    /* Safe to remove now — we already know we will reinsert. */
    removeAllOldCredits();

    /* Compute evenly spaced insertion indices.
       For target N and block count B:
         idx_i = round((i+1) * B / (N+1)) - 1   for i = 0..N-1
       This places credits at roughly B/(N+1), 2B/(N+1), ... through
       the article — evenly from near the start to near the end. */
    var positions = [];
    for (var i = 0; i < target; i++) {
      var idx = Math.round((i + 1) * blocks.length / (target + 1)) - 1;
      idx = Math.max(0, Math.min(blocks.length - 1, idx));
      positions.push(idx);
    }

    /* Deduplicate while preserving order */
    var seen = {};
    positions = positions.filter(function (v) {
      if (seen[v]) return false;
      seen[v] = true;
      return true;
    });

    /* Insert from bottom to top so earlier references stay valid. */
    positions.sort(function (a, b) { return b - a; });

    var inserted = 0;
    positions.forEach(function (idx) {
      var ref = blocks[idx];
      if (ref && ref.parentNode) {
        ref.parentNode.insertBefore(createCredit(), ref.nextSibling);
        inserted++;
      }
    });

    console.log(
      "ITI Branding: inserted " + inserted + " credit strips " +
      "(blocks: " + blocks.length +
      ", target: " + target +
      ", textLen: " + textLen + ")."
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

          /* Ignore our own UI so we never loop */
          if (node.id === "isc-brand-bar" ||
              node.id === "isc-watermark") return false;
          if (node.classList && node.classList.contains("isc-article-credit")) return false;
          if (node.hasAttribute && node.hasAttribute("data-isc-credit")) return false;

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

    /* Retry for pages whose article content appears a bit later. */
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

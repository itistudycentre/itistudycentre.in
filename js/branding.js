/* =========================================================
   ITI STUDY CENTRE — BRANDING  (v3 — reliable)
   File: /js/branding.js

   Features:
     1. Top brand bar  "ITI STUDY CENTRE   WWW.ITISTUDYCENTRE.IN"
     2. Repeating diagonal watermark
     3. Automatic "Article by www.itistudycentre.in" credit strips
        evenly from top to bottom of the article (6 to 10 strips).

   v3 fixes:
     • Blocks are counted at LIST level (ul / ol), not per <li>.
       This avoids one long list dominating the block count.
     • Credits are inserted in the BLOCK'S PARENT container,
       never inside <ul>/<ol> between <li> elements (invalid HTML
       that browsers silently drop).
     • Article root detection tries many selectors, and if the
       matched container has too few blocks it falls through to
       the next candidate. This handles pages split across
       multiple wrappers.
     • Signature check prevents observer feedback loops.
     • Clear console logs for debugging.
========================================================= */

(function () {
  "use strict";

  if (window.__itiBrandingFinalV3) return;
  window.__itiBrandingFinalV3 = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  /* Every credit class name ever used — remove all before re-insert */
  var OLD_CREDIT_SELECTOR = [
    ".isc-article-credit",
    ".isc-credit-v14",
    ".isc-article-credit-v14",
    ".isc-credit-strip",
    ".article-credit",
    ".iti-credit"
  ].join(", ");

  /* BLOCK-LEVEL content units. Lists count as ONE block, not per <li>. */
  var BLOCK_SELECTOR =
    "p, ul, ol, blockquote, table, pre, figure, " +
    "div.isc-content-block, section.isc-content-block";

  /* Never anchor a credit inside these areas */
  var EXCLUDE_ANCESTOR =
    "header, nav, footer, aside, " +
    "#isc-brand-bar, #isc-watermark, " +
    ".isc-article-credit, .toc, #toc, .table-of-contents, " +
    ".breadcrumb, .breadcrumbs, " +
    ".iti-comments, .isc-comments, #comments, .comments, " +
    "form, .sidebar, #sidebar, .widget, .advertisement, .ads, " +
    "td, th, thead, tbody, tr";

  var creditTimer = null;
  var lastSignature = "";

  /* ==================== STYLES ==================== */

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

  /* ==================== TOP BRAND BAR ==================== */

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

  /* ==================== WATERMARK ==================== */

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

  /* ==================== ARTICLE ROOT ==================== */

  /* Try each selector in order. If the matched container has at
     least 6 content blocks, accept it. Otherwise remember it as a
     fallback and keep looking. This handles pages where the article
     content is split across several wrappers. */
  function findArticleRoot() {
    var selectors = [
      "main.module-content",
      ".module-content",
      "article.article-content",
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

    var fallback = null;

    for (var i = 0; i < selectors.length; i++) {
      var root = document.querySelector(selectors[i]);
      if (!root) continue;

      var blocks = root.querySelectorAll(BLOCK_SELECTOR).length;
      if (blocks >= 6) return root;

      if (!fallback && blocks >= 2) fallback = root;
    }

    return fallback;
  }

  /* ==================== CONTENT BLOCKS ==================== */

  function collectContentBlocks(root) {
    var all = root.querySelectorAll(BLOCK_SELECTOR);
    var result = [];

    Array.prototype.forEach.call(all, function (el) {
      /* Skip if inside excluded area */
      if (el.closest(EXCLUDE_ANCESTOR)) return;

      /* Skip if nested inside another collected block
         (e.g. <p> inside <blockquote> — only the outer counts) */
      var p = el.parentElement;
      while (p && p !== root) {
        if (p.matches && p.matches(BLOCK_SELECTOR)) return;
        p = p.parentElement;
      }

      /* Skip empty blocks with no text and no media */
      var text = (el.textContent || "").replace(/[\s\u00a0]+/g, "");
      if (text.length < 5 &&
          !el.querySelector("img, video, iframe, svg, table")) {
        return;
      }

      result.push(el);
    });

    return result;
  }

  /* ==================== TARGET COUNT ==================== */

  function pickTarget(textLen) {
    if (textLen < 2500)  return 6;
    if (textLen < 6000)  return 7;
    if (textLen < 12000) return 8;
    if (textLen < 25000) return 9;
    return 10;
  }

  /* ==================== CREDIT ELEMENT ==================== */

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
    document.querySelectorAll(OLD_CREDIT_SELECTOR).forEach(function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  /* ==================== SAFE INSERT ==================== */

  /* Insert credit immediately after `ref`, but never inside a
     <ul>/<ol> between <li> elements. If the parent is a list, we
     walk out to the list itself and insert after the whole list. */
  function insertCreditAfter(ref) {
    if (!ref || !ref.parentNode) return false;

    var anchor = ref;
    var parent = anchor.parentNode;

    /* If the block is a list item (shouldn't happen now, but defensive),
       climb out of the list. */
    var tag = (parent.tagName || "").toLowerCase();
    while (tag === "ul" || tag === "ol") {
      anchor = parent;
      parent = anchor.parentNode;
      if (!parent) return false;
      tag = (parent.tagName || "").toLowerCase();
    }

    try {
      var credit = createCredit();
      parent.insertBefore(credit, anchor.nextSibling);
      return credit.parentNode === parent;
    } catch (e) {
      return false;
    }
  }

  /* ==================== MAIN DISTRIBUTION ==================== */

  function addArticleCredits() {
    var root = findArticleRoot();

    if (!root) {
      console.warn("ITI Branding: article container not found.");
      return;
    }

    var blocks = collectContentBlocks(root);
    var textLen = (root.innerText || root.textContent || "").length;

    if (blocks.length < 4) {
      console.warn(
        "ITI Branding: only " + blocks.length + " content blocks — " +
        "skipping credits. Container: <" + root.tagName.toLowerCase() +
        (root.id ? " #" + root.id : "") +
        (typeof root.className === "string" && root.className
          ? " ." + root.className.split(/\s+/)[0] : "") + ">"
      );
      return;
    }

    var target = pickTarget(textLen);

    /* Never place two credits closer than 2 blocks apart. */
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

    removeAllOldCredits();

    /* Evenly spaced indices across the block list. */
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
      if (insertCreditAfter(blocks[idx])) inserted++;
    });

    console.log(
      "ITI Branding: inserted " + inserted + "/" + positions.length +
      " credit strips  (blocks: " + blocks.length +
      ", target: " + target +
      ", textLen: " + textLen + ")."
    );
  }

  /* ==================== MUTATION OBSERVER ==================== */

  function startObserver() {
    if (!("MutationObserver" in window)) return;

    var observer = new MutationObserver(function (mutations) {
      var shouldRefresh = mutations.some(function (mutation) {
        var nodes = Array.prototype.slice.call(mutation.addedNodes)
          .concat(Array.prototype.slice.call(mutation.removedNodes));

        return nodes.some(function (node) {
          if (node.nodeType !== 1) return false;

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

  /* ==================== INIT ==================== */

  function init() {
    if (!document.body || !document.head) return;

    addStyles();
    addTopBar();
    addWatermark();
    addArticleCredits();

    [600, 1500, 3000, 6000, 10000].forEach(function (delay) {
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

/* =========================================================
   ITI STUDY CENTRE — BRANDING  (v6 — container-free)
   File: /js/branding.js

   This version does NOT look for an article container.
   Instead it works directly on headings across the whole page:

     Step 1 — collect every <h2> on the page, skipping anything
              inside header / nav / footer / sidebar / TOC /
              comments / forms / tables.
     Step 2 — if fewer than 6 anchors, also collect <h3>.
     Step 3 — if still fewer than 6, also collect content
              blocks (p, ul, ol, blockquote, table, pre, figure).
     Step 4 — sort all anchors by document order.
     Step 5 — pick N (6–10) based on total page text length,
              then place one credit after evenly-spaced anchors
              from the first to the last.

   Because it does not depend on any container class, it works
   on fitter3.html, fitter6.html, question-bank pages, MCQ pages,
   and any future article page with the same heading pattern.

   Safety:
     • No credits on home / contact / short pages
       (needs at least 4 real headings or ≥ 1500 text chars).
     • Never inserts inside <ul>/<ol>/<table>/.compare-card.
     • Skips admin pages and pages marked with data-no-branding.
     • Signature check prevents MutationObserver feedback loops.
========================================================= */

(function () {
  "use strict";

  if (window.__itiBrandingFinalV6) return;
  window.__itiBrandingFinalV6 = true;

  var SITE_NAME   = "ITI STUDY CENTRE";
  var SITE_URL    = "https://www.itistudycentre.in/";
  var SITE_TEXT   = "WWW.ITISTUDYCENTRE.IN";
  var CREDIT_TEXT = "Article by www.itistudycentre.in";

  var OLD_CREDIT_SELECTOR =
    ".isc-article-credit, .isc-credit-v14, .isc-article-credit-v14, " +
    ".isc-credit-strip, .article-credit, .iti-credit";

  /* Fallback anchors when headings are too few. */
  var BLOCK_SELECTOR =
    "p, ul, ol, blockquote, table, pre, figure, .compare-grid";

  var EXCLUDE_ANCESTOR =
    "header, nav, footer, aside, " +
    "#isc-brand-bar, #isc-watermark, " +
    ".isc-article-credit, .toc, #toc, .table-of-contents, " +
    ".breadcrumb, .breadcrumbs, " +
    ".page-title, .module-navigation, .search-section, " +
    ".share-section, .mcq-link, .related-modules, " +
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

  /* ==================== HEADING FILTER ==================== */

  var TOC_TEXT_RE = /^(contents?|table of contents|विषय.?सूची|अनुक्रमणिका|सूची|related|disclaimer|नोट|निष्कर्ष|conclusion)$/i;

  function isTocOrJunkHeading(h) {
    var text = (h.textContent || "").trim();

    /* Heading text itself is a TOC label */
    if (TOC_TEXT_RE.test(text)) return true;

    /* Heading is inside a TOC container */
    if (h.closest(".toc, #toc, .table-of-contents, [class*='toc-']")) return true;

    /* Parent id/class mentions toc */
    var p = h.parentElement;
    while (p && p !== document.body) {
      var marker = (
        (p.id || "") + " " +
        (typeof p.className === "string" ? p.className : "")
      ).toLowerCase();
      if (/(^|[\s_-])toc([\s_-]|$)|table-of-contents|breadcrumb/.test(marker)) {
        return true;
      }
      p = p.parentElement;
    }

    return false;
  }

  function isEligibleHeading(h) {
    if (!h) return false;
    if (h.closest(EXCLUDE_ANCESTOR)) return false;
    if (isTocOrJunkHeading(h)) return false;

    var text = (h.textContent || "").replace(/[\s\u00a0]+/g, "");
    if (text.length < 3) return false;

    return true;
  }

  /* ==================== ANCHOR COLLECTION ==================== */

  /* Collect anchors in priority order: h2 first, then h3, then
     content blocks. Sorted by document order at the end. */
  function collectAnchors() {
    var anchors = [];
    var seen = [];

    function addAll(list) {
      Array.prototype.forEach.call(list, function (el) {
        if (seen.indexOf(el) !== -1) return;
        if (el.closest(EXCLUDE_ANCESTOR)) return;

        /* For content blocks, skip if nested inside another block */
        if (el.matches && el.matches(BLOCK_SELECTOR)) {
          var p = el.parentElement;
          while (p && p !== document.body) {
            if (p.matches && p.matches(BLOCK_SELECTOR) && seen.indexOf(p) !== -1) {
              return;
            }
            p = p.parentElement;
          }
        }

        /* Skip empty blocks */
        var text = (el.textContent || "").replace(/[\s\u00a0]+/g, "");
        if (text.length < 5 &&
            !el.querySelector("img, video, iframe, svg, table")) {
          return;
        }

        /* Skip if already followed by a credit */
        if (el.nextElementSibling &&
            el.nextElementSibling.classList &&
            el.nextElementSibling.classList.contains("isc-article-credit")) {
          return;
        }

        seen.push(el);
        anchors.push(el);
      });
    }

    /* Priority 1: h2 (always) */
    addAll(Array.prototype.filter.call(
      document.querySelectorAll("h2"),
      isEligibleHeading
    ));

    /* Priority 2: h3 if not enough h2 */
    if (anchors.length < 6) {
      addAll(Array.prototype.filter.call(
        document.querySelectorAll("h3"),
        isEligibleHeading
      ));
    }

    /* Priority 3: content blocks if still not enough */
    if (anchors.length < 6) {
      addAll(document.querySelectorAll(BLOCK_SELECTOR));
    }

    /* Sort by document order */
    anchors.sort(function (a, b) {
      if (a === b) return 0;
      return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING)
        ? -1 : 1;
    });

    return anchors;
  }

  /* ==================== TARGET COUNT ==================== */

  function pickTarget(textLen) {
    if (textLen < 3000)  return 6;
    if (textLen < 7000)  return 7;
    if (textLen < 13000) return 8;
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

  function insertCreditAfter(ref) {
    if (!ref || !ref.parentNode) return false;

    var anchor = ref;
    var parent = anchor.parentNode;

    /* Never place a <div> inside list / table / card */
    while (parent && parent !== document.body) {
      var tag = (parent.tagName || "").toLowerCase();
      var cls = (typeof parent.className === "string"
                  ? parent.className : "").toLowerCase();

      var isBad =
        tag === "ul" || tag === "ol" ||
        tag === "table" || tag === "thead" || tag === "tbody" ||
        tag === "tr" || tag === "td" || tag === "th" ||
        /\bcompare-card\b/.test(cls) ||
        /\bcompare-grid\b/.test(cls);

      if (!isBad) break;

      anchor = parent;
      parent = anchor.parentNode;
    }

    if (!parent) return false;

    try {
      var c = createCredit();
      parent.insertBefore(c, anchor.nextSibling);
      return c.parentNode === parent;
    } catch (e) {
      return false;
    }
  }

  /* ==================== PAGE CHECK ==================== */

  function isArticlePage(anchors, textLen) {
    /* Skip admin and opt-out pages */
    var path = (window.location.pathname || "").toLowerCase();
    if (path.indexOf("/admin") !== -1) return false;
    if (document.body.hasAttribute("data-no-branding")) return false;

    /* Need enough headings and enough text */
    var headingCount = 0;
    anchors.forEach(function (a) {
      if (a.tagName === "H2" || a.tagName === "H3") headingCount++;
    });

    if (headingCount >= 4 && textLen >= 1500) return true;
    if (anchors.length >= 8 && textLen >= 2500) return true;

    return false;
  }

  /* ==================== MAIN DISTRIBUTION ==================== */

  function addArticleCredits() {
    var anchors = collectAnchors();
    var textLen = (document.body.innerText || document.body.textContent || "").length;

    if (!isArticlePage(anchors, textLen)) {
      console.log("ITI v6: not an article page — skipping credits " +
                  "(anchors: " + anchors.length +
                  ", textLen: " + textLen + ").");
      return;
    }

    var target = pickTarget(textLen);

    /* Never place two credits closer than 2 anchors apart. */
    var maxCredits = Math.floor((anchors.length - 1) / 2) + 1;
    target = Math.min(target, maxCredits);
    target = Math.max(target, 3);

    var signature = [anchors.length, target, textLen].join("|");
    var existing = document.querySelectorAll(".isc-article-credit").length;

    if (signature === lastSignature && existing === target) return;
    lastSignature = signature;

    removeAllOldCredits();

    /* Evenly spaced indices from first to last anchor.
       Formula: idx_i = round((i+1) * A / (T+1)) - 1 for i=0..T-1 */
    var positions = [];
    for (var i = 0; i < target; i++) {
      var idx = Math.round((i + 1) * anchors.length / (target + 1)) - 1;
      idx = Math.max(0, Math.min(anchors.length - 1, idx));
      positions.push(idx);
    }

    /* Deduplicate */
    var seenIdx = {};
    positions = positions.filter(function (v) {
      if (seenIdx[v]) return false;
      seenIdx[v] = true;
      return true;
    });

    /* Insert bottom-to-top so earlier references stay valid */
    positions.sort(function (a, b) { return b - a; });

    var inserted = 0;
    positions.forEach(function (idx) {
      if (insertCreditAfter(anchors[idx])) inserted++;
    });

    console.log(
      "ITI v6: inserted " + inserted + "/" + positions.length +
      " credits  (anchors: " + anchors.length +
      ", target: " + target +
      ", textLen: " + textLen + ")."
    );
  }

  /* ==================== OBSERVER ==================== */

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
      }, 800);
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

    /* Retries for pages whose article content loads late */
    [600, 1500, 3000, 5000, 9000, 15000].forEach(function (d) {
      window.setTimeout(addArticleCredits, d);
    });

    startObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();


/* ITI STUDY CENTRE - WEBSITE BRANDING */
(function () {
  "use strict";

  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";

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
        color: rgba(18, 52, 90, .065);
        font: 800 clamp(10px, 1.5vw, 17px)/1.3 Arial, sans-serif;
        letter-spacing: .35px;
      }

      .isc-article-credit {
        display: block;
        box-sizing: border-box;
        margin: 16px 0 24px;
        padding: 7px 10px;
        border-left: 3px solid #d6a83d;
        background: rgba(18, 52, 90, .035);
        color: #687789;
        font: 12px/1.6 Arial, sans-serif;
        overflow-wrap: anywhere;
      }

      .isc-article-credit a {
        color: #164b7a;
        text-decoration: underline;
        text-underline-offset: 2px;
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
          font-size: 11px;
          margin: 13px 0 20px;
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

  function addTopBar() {
    if (document.getElementById("isc-brand-bar")) return;

    var bar = document.createElement("div");
    bar.id = "isc-brand-bar";

    var link = document.createElement("a");
    link.href = SITE_URL;
    link.textContent = SITE_NAME + "     " + SITE_TEXT;
    link.setAttribute("aria-label", SITE_NAME + " website");

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
    var content = document.querySelector(
      "article, main, .article-content, .content, " +
      ".fitter2-section-body, .section-body"
    );

    if (!content) return;

    var headings = Array.from(
      content.querySelectorAll("h2, h3")
    ).filter(function (heading) {
      return !heading.closest("header, footer, nav");
    });

    if (headings.length < 3) return;

    var count = Math.min(6, headings.length - 1);
    var selected = [];

    for (var i = 1; i <= count; i++) {
      var index = Math.round(
        (i * (headings.length - 1)) / (count + 1)
      );

      if (
        index > 0 &&
        index < headings.length &&
        !selected.includes(index)
      ) {
        selected.push(index);
      }
    }

    selected.forEach(function (index) {
      var heading = headings[index];

      if (
        heading.nextElementSibling &&
        heading.nextElementSibling.classList.contains(
          "isc-article-credit"
        )
      ) {
        return;
      }

      var credit = document.createElement("div");
      credit.className = "isc-article-credit";
      credit.appendChild(
        document.createTextNode("Article by ")
      );

      var link = document.createElement("a");
      link.href = SITE_URL;
      link.textContent = "www.itistudycentre.in";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      credit.appendChild(link);
      heading.insertAdjacentElement("afterend", credit);
    });
  }

  function init() {
    if (!document.body) return;

    addStyles();
    addTopBar();
    addWatermark();
    addArticleCredits();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }
})();

/* ITI Study Centre watermark and site branding. No logo or image credits. */
(function () {
  "use strict";
  if (window.__itiBrandingInitialized) return;
  window.__itiBrandingInitialized = true;

  var SITE_NAME = "ITI STUDY CENTRE";
  var SITE_URL = "https://www.itistudycentre.in/";
  var SITE_TEXT = "WWW.ITISTUDYCENTRE.IN";

  function init() {
    if (!document.body) return;
    if (!document.getElementById("isc-branding-style")) {
      var style = document.createElement("style");
      style.id = "isc-branding-style";
      style.textContent = `
        #isc-brand-bar{position:sticky;top:0;z-index:10001;width:100%;box-sizing:border-box;padding:8px 10px;text-align:center;background:#12345a;border-bottom:2px solid #e6b84a;font-family:Arial,sans-serif;line-height:1.4}
        #isc-brand-bar a{color:#fff;font-size:14px;font-weight:800;text-decoration:none;letter-spacing:.35px}
        #isc-watermark{position:fixed;inset:0;z-index:2;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(8,minmax(0,1fr));align-items:center;justify-items:center;overflow:hidden;pointer-events:none;user-select:none;-webkit-user-select:none}
        #isc-watermark span{display:block;white-space:nowrap;transform:rotate(-28deg);color:rgba(18,52,90,.065);font:800 clamp(10px,1.5vw,17px)/1.3 Arial,sans-serif;letter-spacing:.35px}
        @media(max-width:600px){#isc-brand-bar{padding:7px 4px}#isc-brand-bar a{font-size:11px;letter-spacing:0}#isc-watermark span{font-size:9px;letter-spacing:0}}
        @media print{#isc-brand-bar{position:static}#isc-watermark{position:fixed}}
      `;
      document.head.appendChild(style);
    }

    if (!document.getElementById("isc-brand-bar")) {
      var bar = document.createElement("div");
      bar.id = "isc-brand-bar";
      var link = document.createElement("a");
      link.href = SITE_URL;
      link.textContent = SITE_NAME + "     " + SITE_TEXT;
      link.setAttribute("aria-label", SITE_NAME + " - " + SITE_TEXT);
      bar.appendChild(link);
      document.body.insertBefore(bar, document.body.firstChild);
    }

    if (!document.getElementById("isc-watermark")) {
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
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();

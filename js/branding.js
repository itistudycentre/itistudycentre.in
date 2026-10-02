/* =========================================================
   ITI STUDY CENTRE — WEBSITE BRANDING
   File: /js/branding.js
========================================================= */

(function () {
    "use strict";

    const SITE_NAME = "ITI STUDY CENTRE";
    const SITE_URL = "https://itistudycentre.in/";
    const SITE_TEXT = "itistudycentre.in";

    function addBrandingStyles() {
        if (document.getElementById("isc-branding-style")) return;

        const style = document.createElement("style");
        style.id = "isc-branding-style";

        style.textContent = `
            #isc-brand-bar {
                position: sticky;
                top: 0;
                z-index: 99999;
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
                font-weight: 700;
                text-decoration: none;
                letter-spacing: .25px;
            }

            #isc-watermark {
                position: fixed;
                inset: 0;
                z-index: 9998;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                grid-template-rows: repeat(6, minmax(0, 1fr));
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
                color: rgba(18, 52, 90, .055);
                font: 800 clamp(10px, 1.7vw, 19px)/1.3 Arial, sans-serif;
                letter-spacing: .5px;
            }

            .isc-image-credit {
                display: block;
                margin: 5px auto 14px;
                text-align: center;
                font: 12px/1.4 Arial, sans-serif;
                color: #536579;
                overflow-wrap: anywhere;
            }

            .isc-image-credit a {
                color: #245b8f;
                text-decoration: underline;
                text-underline-offset: 2px;
            }

            @media (max-width: 600px) {
                #isc-brand-bar {
                    padding: 8px 4px;
                }

                #isc-brand-bar a {
                    font-size: 12px;
                }

                #isc-watermark span {
                    font-size: 10px;
                    letter-spacing: 0;
                }

                .isc-image-credit {
                    font-size: 11px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    function addTopBar() {
        if (document.getElementById("isc-brand-bar") || !document.body) {
            return;
        }

        const bar = document.createElement("div");
        bar.id = "isc-brand-bar";

        const link = document.createElement("a");
        link.href = SITE_URL;
        link.textContent = SITE_NAME + "  •  " + SITE_TEXT;
        link.setAttribute("aria-label", SITE_NAME + " website home");

        bar.appendChild(link);
        document.body.insertBefore(bar, document.body.firstChild);
    }

    function addWatermark() {
        if (document.getElementById("isc-watermark") || !document.body) {
            return;
        }

        const layer = document.createElement("div");
        layer.id = "isc-watermark";
        layer.setAttribute("aria-hidden", "true");

        for (let i = 0; i < 12; i++) {
            const mark = document.createElement("span");
            mark.textContent = SITE_NAME + " • " + SITE_TEXT;
            layer.appendChild(mark);
        }

        document.body.appendChild(layer);
    }

    function shouldSkipImage(img) {
        if (!img || img.dataset.iscCredited === "true") {
            return true;
        }

        const src = (img.getAttribute("src") || "").toLowerCase();
        const alt = (img.getAttribute("alt") || "").toLowerCase();

        const classes = (
            (img.className && typeof img.className === "string"
                ? img.className : "") +
            " " +
            (img.parentElement &&
             typeof img.parentElement.className === "string"
                ? img.parentElement.className : "")
        ).toLowerCase();

        // Skip logos, icons and decorative images.
        if (
            src.startsWith("data:") ||
            /logo|icon|favicon|avatar|badge|flag|social|payment|qr-code/
                .test(src + " " + alt + " " + classes)
        ) {
            return true;
        }

        if (
            img.closest(
                "#isc-brand-bar, #isc-watermark, header, footer, nav, .logo, .site-logo, .social-icons"
            )
        ) {
            return true;
        }

        const width = img.naturalWidth || img.width || 0;
        const height = img.naturalHeight || img.height || 0;

        if (width > 0 && height > 0 && width < 100 && height < 70) {
            return true;
        }

        return false;
    }

    function addImageCredit(img) {
        if (shouldSkipImage(img)) return;

        img.dataset.iscCredited = "true";

        const linkedImage = img.closest("a");
        const target = img.closest("figure") || linkedImage || img;

        if (
            target.nextElementSibling &&
            target.nextElementSibling.classList &&
            target.nextElementSibling.classList.contains("isc-image-credit")
        ) {
            return;
        }

        const caption = document.createElement("div");
        caption.className = "isc-image-credit";

        const label = document.createElement("span");
        label.textContent = "चित्र/शैक्षणिक सामग्री: ";

        const link = document.createElement("a");
        link.href = SITE_URL;
        link.textContent = SITE_TEXT;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        caption.appendChild(label);
        caption.appendChild(link);

        target.insertAdjacentElement("afterend", caption);
    }

    function addCreditsToImages(root) {
        const scope = root || document;
        scope.querySelectorAll("img").forEach(addImageCredit);
    }

    function init() {
        if (!document.body) return;

        addBrandingStyles();
        addTopBar();
        addWatermark();
        addCreditsToImages(document);

        // Handle images added later by other scripts.
        if ("MutationObserver" in window) {
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    mutation.addedNodes.forEach(function (node) {
                        if (node.nodeType !== 1) return;

                        if (node.matches && node.matches("img")) {
                            addImageCredit(node);
                        }

                        if (node.querySelectorAll) {
                            addCreditsToImages(node);
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, {
            once: true
        });
    } else {
        init();
    }
})();

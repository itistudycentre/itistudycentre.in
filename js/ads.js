// ads.js - ITI Study Centre (Auto Ad Injector)

(function() {
    // पेज लोड होने का इंतजार करें
    function injectAds() {
        
        // 1. NATIVE BANNER
        function createNativeAd() {
            const adDiv = document.createElement("div");
            adDiv.style.margin = "25px auto";
            adDiv.style.textAlign = "center";
            const innerDiv = document.createElement("div");
            innerDiv.id = "container-e8f0c51200fde95d17b1dd0e15b49280";
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.setAttribute("data-cfasync", "false");
            script.src = "https://bauval.org/21/e8f0c51200fde95d17b1dd0e15b49280";
            adDiv.appendChild(innerDiv);
            adDiv.appendChild(script);
            return adDiv;
        }

        // 2. STATIC BANNER 300x250
        function createStaticAd() {
            const adDiv = document.createElement("div");
            adDiv.style.margin = "25px auto";
            adDiv.style.textAlign = "center";
            adDiv.style.minHeight = "250px";
            const scriptConfig = document.createElement("script");
            scriptConfig.type = "text/javascript";
            scriptConfig.innerHTML = `
                atOptions = {
                    'key' : 'bcfe26bbe729db453c876e14b6385055',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                };
            `;
            const scriptLoader = document.createElement("script");
            scriptLoader.type = "text/javascript";
            scriptLoader.setAttribute("data-cfasync", "false");
            scriptLoader.src = "https://bauval.org/22/bcfe26bbe729db453c876e14b6385055";
            adDiv.appendChild(scriptConfig);
            adDiv.appendChild(scriptLoader);
            return adDiv;
        }

        // 3. ऐड कहाँ लगाना है (लॉजिक)
        const contentArea = document.querySelector("main") || document.querySelector("article") || document.querySelector(".content") || document.body;
        const elements = contentArea.querySelectorAll("p, h2, h3, ul, table");

        // अगर पेज छोटा है (होम पेज या रिजल्ट पेज), तो नीचे 1 नेटिव ऐड
        if (elements.length < 5) {
            // चेक करें कि पहले से ऐड तो नहीं लगा है
            if (!document.getElementById("container-e8f0c51200fde95d17b1dd0e15b49280")) {
                contentArea.appendChild(createNativeAd());
            }
        } else {
            // अगर नोट्स पेज है (बहुत सारा टेक्स्ट), तो बीच में ऐड लगाएं
            let adCount = 0;
            const maxAds = 4;
            for (let i = 0; i < elements.length; i++) {
                if ((i + 1) % 4 === 0 && adCount < maxAds) {
                    let adNode;
                    if (adCount % 2 === 0) { adNode = createNativeAd(); } 
                    else { adNode = createStaticAd(); }
                    elements[i].parentNode.insertBefore(adNode, elements[i].nextSibling);
                    adCount++;
                }
            }
        }
    }

    // अगर पेज लोड हो चुका है तो सीधे चलाएं, वरना लोड होने का इंतजार करें
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectAds);
    } else {
        injectAds();
    }
})();

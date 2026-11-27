// ads.js - ITI Study Centre (Global Ad Injector)

(function() {
    function loadAds() {
        
        // --- 1. Adsterra Native Banner Code ---
        function createNativeAd() {
            const adDiv = document.createElement("div");
            adDiv.style.margin = "25px auto";
            adDiv.style.textAlign = "center";
            adDiv.style.overflow = "hidden"; // ताकि मोबाइल पर बाहर न निकले

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

        // --- 2. Adsterra Static Banner 300x250 Code ---
        function createStaticAd() {
            const adDiv = document.createElement("div");
            adDiv.style.margin = "25px auto";
            adDiv.style.textAlign = "center";
            adDiv.style.minHeight = "250px";
            adDiv.style.overflow = "hidden"; // ताकि मोबाइल पर बाहर न निकले

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

        // --- 3. ऐड लगाने का लॉजिक (कहाँ लगाना है) ---
        // यह उस जगह को ढूंढता है जहाँ आपका मुख्य टेक्स्ट है
        const contentArea = document.querySelector("main") || document.querySelector("article") || document.querySelector(".content") || document.body;
        
        // सभी पैराग्राफ और हेडिंग्स ढूंढें
        const elements = contentArea.querySelectorAll("p, h2, h3, ul, table");

        // अगर पेज छोटा है (जैसे होम पेज या रिजल्ट पेज) - सिर्फ 1 ऐड नीचे लगाएं
        if (elements.length < 5) {
            contentArea.appendChild(createNativeAd());
        } 
        // अगर पेज बड़ा है (नोट्स पेज) - बीच-बीच में ऐड लगाएं
        else {
            let adCount = 0;
            const maxAds = 3; // एक पेज पर ज्यादा से ज्यादा 3 ऐड (स्पैम से बचने के लिए)

            for (let i = 0; i < elements.length; i++) {
                // हर 4वें पैराग्राफ के बाद ऐड लगाएं
                if ((i + 1) % 4 === 0 && adCount < maxAds) {
                    let adNode;
                    // बारी-बारी से Native और Static लगाएं
                    if (adCount % 2 === 0) {
                        adNode = createNativeAd();
                    } else {
                        adNode = createStaticAd();
                    }
                    // पैराग्राफ के ठीक बाद ऐड डालें
                    elements[i].parentNode.insertBefore(adNode, elements[i].nextSibling);
                    adCount++;
                }
            }
        }
    }

    // पेज लोड होने का इंतजार करें
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAds);
    } else {
        loadAds();
    }
})();

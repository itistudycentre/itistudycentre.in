// ads.js - ITI Study Centre (Auto Ad Injector)

document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. NATIVE BANNER (Adsterra Code 1)
    // ==========================================
    function createNativeAd() {
        const adDiv = document.createElement("div");
        adDiv.style.margin = "25px auto";
        adDiv.style.textAlign = "center";
        
        // Native Banner Div
        const innerDiv = document.createElement("div");
        innerDiv.id = "container-e8f0c51200fde95d17b1dd0e15b49280";
        
        // Native Banner Script
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        script.src = "https://bauval.org/21/e8f0c51200fde95d17b1dd0e15b49280";

        adDiv.appendChild(innerDiv);
        adDiv.appendChild(script);
        return adDiv;
    }

    // ==========================================
    // 2. STATIC BANNER 300x250 (Adsterra Code 2)
    // ==========================================
    function createStaticAd() {
        const adDiv = document.createElement("div");
        adDiv.style.margin = "25px auto";
        adDiv.style.textAlign = "center";
        adDiv.style.minHeight = "250px"; // ताकि लोड होने तक पेज न हिले

        // Static Banner Script (Config)
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

        // Static Banner Script (Loader)
        const scriptLoader = document.createElement("script");
        scriptLoader.type = "text/javascript";
        scriptLoader.setAttribute("data-cfasync", "false");
        scriptLoader.src = "https://bauval.org/22/bcfe26bbe729db453c876e14b6385055";

        adDiv.appendChild(scriptConfig);
        adDiv.appendChild(scriptLoader);
        return adDiv;
    }

    // ==========================================
    // 3. ऐड को पेज में लगाने का लॉजिक (Injection Logic)
    // ==========================================
    
    // पेज के मुख्य कंटेंट को ढूंढें
    const contentArea = document.querySelector("main") || document.querySelector("article") || document.querySelector(".content") || document.body;
    
    // पैराग्राफ और हेडिंग्स को ढूंढें
    const elements = contentArea.querySelectorAll("p, h2, h3, ul, table");

    // अगर पेज पर टेक्स्ट बहुत कम है (जैसे होम पेज), तो नीचे 1 ऐड लगाएं
    if (elements.length < 5) {
        contentArea.appendChild(createNativeAd());
    } else {
        let adCount = 0;
        const maxAds = 4; // एक पेज पर ज्यादा से ज्यादा 4 ऐड

        for (let i = 0; i < elements.length; i++) {
            // हर 4वें पैराग्राफ के बाद ऐड डालें
            if ((i + 1) % 4 === 0 && adCount < maxAds) {
                
                let adNode;
                // बारी-बारी से Native और Static ऐड लगाएं
                if (adCount % 2 === 0) {
                    adNode = createNativeAd();  // पहला ऐड: Native
                } else {
                    adNode = createStaticAd();  // दूसरा ऐड: Static 300x250
                }

                // पैराग्राफ के ठीक बाद ऐड इंसर्ट करें
                elements[i].parentNode.insertBefore(adNode, elements[i].nextSibling);
                adCount++;
            }
        }
    }
});

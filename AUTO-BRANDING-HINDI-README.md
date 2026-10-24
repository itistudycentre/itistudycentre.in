# ITI Study Centre — Auto Branding / Copy Deterrence

## यह क्या करता है
- GitHub Actions हर push पर पूर्ण HTML पेजों में `/js/branding.js` की एक ही reference सुनिश्चित करता है।
- `js/branding.js` वेबसाइट का top bar, watermark और लंबे लेखों में article credits लगाता है।
- वही central script सामान्य right-click, text copy/cut और image/video drag को रोकने का प्रयास करती है।
- Form fields में typing/copy-paste सामान्य रूप से चालू रहता है। किसी तत्व पर `.allow-copy` class देकर उस हिस्से में text selection/copy की अनुमति दी जा सकती है।

## GitHub पर लागू करने की प्रक्रिया
1. ZIP extract करें और इसके अंदर की project files अपने GitHub repository की `main` branch में upload/commit करें।
2. GitHub → Actions खोलें और `Auto-install site branding and copy deterrence` workflow का run सफल होने दें।
3. Workflow सभी पूर्ण HTML पेजों में central script reference जोड़ देगा। अगली बार नया HTML पेज `main` में push होगा तो भी यही प्रक्रिया अपने-आप चलेगी।
4. साइट को hard refresh (`Ctrl+F5`) करके दो-तीन लेख, मोबाइल पेज और image-heavy page जाँचें।

## जरूरी सीमा
यह anti-copy व्यवस्था केवल deterrent है। ब्राउज़र में दिखने वाली image को screenshot, browser developer tools, cache या direct image URL से फिर भी सेव किया जा सकता है। किसी भी client-side JavaScript से 100% image downloading रोकना संभव नहीं है। असली सुरक्षा के लिए मूल/high-resolution files सार्वजनिक न रखें, जहाँ उचित हो resized/optimized versions व watermark उपयोग करें और मूल स्रोत/तारीख सुरक्षित रखें।

## अपवाद
- `header.html` और `footer.html` जैसे partial fragments में script inject नहीं की जाती।
- `admin` path वाले पेजों को branding workflow से बाहर रखा गया है।
- `data-no-branding` attribute वाले पेज पर article credits पहले से ही बंद रहेंगे; global script तभी चलेगी जब script tag मौजूद हो।

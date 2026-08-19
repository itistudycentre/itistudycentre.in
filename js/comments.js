// ================================================================
// comment.js – एक ही फ़ाइल में पूरा सॉल्यूशन
// चलाएँ: node comment.js
// ================================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----------------------------------------------------------------
// 1. नया comment.js (जो browser में चलेगा – Firebase + UI)
// ----------------------------------------------------------------
const BROWSER_COMMENT_JS = `// ============================================================
// comment.js – एकीकृत कमेंट सिस्टम (Firebase)
// यह फ़ाइल browser में load होगी
// ============================================================

(function() {
    'use strict';

    // ---------- Firebase Config ----------
    const firebaseConfig = {
        apiKey: "AIzaSyAyBiDGQxQ5LEtIV5JtMOT79rU3ksQg8TE",
        authDomain: "iti-study-centre.firebaseapp.com",
        projectId: "iti-study-centre",
        storageBucket: "iti-study-centre.firebasestorage.app",
        messagingSenderId: "690794814318",
        appId: "1:690794814318:web:42ed1c1f582a9e1df5bf7f"
    };

    document.addEventListener('DOMContentLoaded', function() {

        const wrapper = document.querySelector('.comment-section-wrapper');
        if (!wrapper) return;

        // ---------- Load Firebase ----------
        Promise.all([
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js'),
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-app-check.js'),
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js')
        ]).then(([
            { initializeApp },
            { initializeAppCheck, ReCaptchaV3Provider },
            { getFirestore, collection, addDoc, serverTimestamp, query, where, orderBy, getDocs }
        ]) => {

            const app = initializeApp(firebaseConfig);
            initializeAppCheck(app, {
                provider: new ReCaptchaV3Provider("6LexjYctAAAAAJdA17IjqdkfJrecHtmqnd-DoODv"),
                isTokenAutoRefreshEnabled: true
            });
            const db = getFirestore(app);

            // ---------- Page ID ----------
            const pageId = window.location.pathname.replace(/^\\/|\\/$/g, '').replace(/\\//g, '_') || 'home';
            const pageInput = document.getElementById('pageInput');
            if (pageInput) pageInput.value = pageId;

            // ---------- Form ----------
            const form = document.getElementById('commentForm');
            const formMessage = document.getElementById('formMessage');
            if (!form) return;

            form.addEventListener('submit', async function(e) {
                e.preventDefault();

                const comment = document.getElementById('commentInput').value.trim();
                const name = document.getElementById('nameInput').value.trim() || 'अनाम';
                const submitBtn = form.querySelector('.btn-submit-comment');

                if (!comment) {
                    showMessage('error', '⚠️ कृपया कुछ लिखें।');
                    document.getElementById('commentInput').focus();
                    return;
                }

                submitBtn.disabled = true;
                submitBtn.textContent = '⏳ भेजा जा रहा...';
                formMessage.style.display = 'none';

                try {
                    await addDoc(collection(db, 'comments'), {
                        name: name,
                        message: comment,
                        page: pageId,
                        type: 'comment',
                        status: 'pending',
                        createdAt: serverTimestamp()
                    });

                    showMessage('success', '✅ आपकी टिप्पणी समीक्षा के लिए भेज दी गई है। धन्यवाद!');
                    document.getElementById('commentInput').value = '';
                    document.getElementById('nameInput').value = '';

                } catch (error) {
                    console.error('Error:', error);
                    showMessage('error', '❌ टिप्पणी भेजने में समस्या हुई। कृपया पुनः प्रयास करें।');
                }

                submitBtn.disabled = false;
                submitBtn.textContent = '📨 टिप्पणी पोस्ट करें';
            });

            function showMessage(type, text) {
                formMessage.className = type;
                formMessage.textContent = text;
                formMessage.style.display = 'block';
            }

            // ---------- Load Approved Comments ----------
            async function loadComments() {
                const container = document.getElementById('approvedComments');
                if (!container) return;

                try {
                    const q = query(
                        collection(db, 'comments'),
                        where('page', '==', pageId),
                        where('status', '==', 'approved'),
                        orderBy('createdAt', 'desc')
                    );

                    const snapshot = await getDocs(q);

                    if (snapshot.empty) {
                        container.innerHTML = '<p class="no-comments">अभी तक कोई स्वीकृत टिप्पणी नहीं है। सबसे पहले टिप्पणी करें।</p>';
                        return;
                    }

                    let html = '';
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        const date = data.createdAt?.toDate?.()?.toLocaleDateString('hi-IN') || 'अभी';
                        html += \`
                            <div class="comment-item">
                                <div class="comment-meta">\${data.name || 'अनाम'} · \${date}</div>
                                <div class="comment-text">\${data.message}</div>
                            </div>
                        \`;
                    });
                    container.innerHTML = html;

                } catch (error) {
                    console.error('Error loading comments:', error);
                    container.innerHTML = '<p class="no-comments">टिप्पणियाँ लोड नहीं हो पाईं।</p>';
                }
            }

            loadComments();

        }).catch(err => console.error('Firebase load error:', err));
    });

})();
`;

// ----------------------------------------------------------------
// 2. कमेंट सिस्टम HTML स्निपेट
// ----------------------------------------------------------------
const COMMENT_SNIPPET = `
<!-- ====== एकीकृत कमेंट सिस्टम ====== -->
<div class="comment-section-wrapper">
    <h2 class="comment-title">💬 टिप्पणियाँ</h2>
    <p class="comment-note"><em>सभी टिप्पणियाँ प्रकाशित होने से पहले एडमिन द्वारा समीक्षा की जाती हैं।</em></p>

    <div class="comment-form-wrapper">
        <form id="commentForm" method="POST">
            <textarea name="comment" id="commentInput" rows="4" placeholder="अपनी टिप्पणी यहाँ लिखें..." required></textarea>
            <input type="text" name="name" id="nameInput" placeholder="आपका नाम (वैकल्पिक)">
            <input type="hidden" name="page" id="pageInput" value="">
            <input type="hidden" name="type" value="comment">
            <button type="submit" class="btn-submit-comment">📨 टिप्पणी पोस्ट करें</button>
        </form>
        <div id="formMessage" style="display:none;"></div>
    </div>

    <div class="approved-comments" id="approvedComments">
        <p class="no-comments">अभी तक कोई स्वीकृत टिप्पणी नहीं है। सबसे पहले टिप्पणी करें।</p>
    </div>
</div>

<style>
.comment-section-wrapper {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px 25px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1px solid #e6eaef;
}
.comment-title {
    color: #003366;
    border-bottom: 3px solid #ffcc00;
    padding-bottom: 10px;
    margin-top: 0;
    font-size: 1.5rem;
}
.comment-note {
    color: #888;
    font-size: 14px;
    margin-bottom: 20px;
}
.comment-form-wrapper {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e6eaef;
    margin-bottom: 25px;
}
.comment-form-wrapper textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 15px;
    font-family: inherit;
    resize: vertical;
    box-sizing: border-box;
}
.comment-form-wrapper textarea:focus {
    border-color: #003366;
    outline: none;
    box-shadow: 0 0 8px rgba(0,51,102,0.15);
}
.comment-form-wrapper input[type="text"] {
    width: 100%;
    padding: 10px 15px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    box-sizing: border-box;
}
.comment-form-wrapper input[type="text"]:focus {
    border-color: #003366;
    outline: none;
}
.btn-submit-comment {
    background: #003366;
    color: #fff;
    border: none;
    padding: 10px 30px;
    margin-top: 12px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
}
.btn-submit-comment:hover {
    background: #002244;
}
.btn-submit-comment:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
#formMessage {
    margin-top: 12px;
    padding: 10px 15px;
    border-radius: 6px;
    font-weight: 500;
}
#formMessage.success {
    display: block !important;
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}
#formMessage.error {
    display: block !important;
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}
.approved-comments {
    margin-top: 10px;
}
.approved-comments .comment-item {
    background: #f8f9fa;
    padding: 14px 18px;
    border-left: 4px solid #003366;
    margin-bottom: 12px;
    border-radius: 4px;
}
.approved-comments .comment-item .comment-meta {
    font-size: 13px;
    color: #888;
    margin-bottom: 4px;
}
.approved-comments .comment-item .comment-text {
    font-size: 15px;
    line-height: 1.6;
    color: #1e2a3a;
}
.no-comments {
    color: #999;
    font-style: italic;
    text-align: center;
    padding: 20px 0;
}
</style>
`;

// ----------------------------------------------------------------
// 3. पैटर्न हटाने के लिए (सुझाव, विषय अनुरोध, पुराने कमेंट)
// ----------------------------------------------------------------
const REMOVE_PATTERNS = [
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>💬\s*सुझाव\s*दें<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>💬\s*Suggestions<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>📝\s*विषय\s*अनुरोध<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>📝\s*Topic\s*Request<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
    /<div[^>]*class="[^"]*comment[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
    /<div[^>]*id="[^"]*comment[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
];

// ----------------------------------------------------------------
// 4. comment.js अपडेट करें (browser वाला)
// ----------------------------------------------------------------
function updateCommentJS() {
    const paths = [
        path.join(__dirname, 'js', 'comment.js'),
        path.join(__dirname, 'comment.js')
    ];

    let updated = false;
    for (const p of paths) {
        if (fs.existsSync(p)) {
            fs.writeFileSync(p, BROWSER_COMMENT_JS, 'utf-8');
            console.log(`✅ comment.js अपडेट हुआ: ${p}`);
            updated = true;
            break;
        }
    }

    if (!updated) {
        const dir = path.join(__dirname, 'js');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        const newPath = path.join(dir, 'comment.js');
        fs.writeFileSync(newPath, BROWSER_COMMENT_JS, 'utf-8');
        console.log(`✅ नई comment.js बनाई: ${newPath}`);
    }
}

// ----------------------------------------------------------------
// 5. सभी HTML पेजों को ठीक करें
// ----------------------------------------------------------------
function fixAllPages() {
    const allFiles = [];

    function walkDir(dir) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                if (!['.git', 'node_modules', 'venv', 'templates', 'assets', 'images', 'css', 'js', 'pdf', 'data'].includes(item)) {
                    walkDir(fullPath);
                }
            } else if (item.endsWith('.html') && !['header.html', 'footer.html', 'admin-comments.html'].includes(item)) {
                allFiles.push(fullPath);
            }
        }
    }

    walkDir(__dirname);

    let fixed = 0;
    let total = allFiles.length;

    console.log(`\n📁 कुल ${total} HTML फाइलें मिलीं।\n`);

    for (const file of allFiles) {
        const relPath = path.relative(__dirname, file);
        process.stdout.write(`⏳ ${relPath} ... `);

        try {
            let content = fs.readFileSync(file, 'utf-8');
            const original = content;

            // पुराने पैटर्न हटाएँ
            for (const pattern of REMOVE_PATTERNS) {
                content = content.replace(pattern, '');
            }

            // अगर पहले से नया सिस्टम नहीं है तो डालें
            if (!content.includes('comment-section-wrapper')) {
                const footerMatch = content.match(/<footer/i);
                if (footerMatch) {
                    const idx = footerMatch.index;
                    content = content.slice(0, idx) + COMMENT_SNIPPET + '\n' + content.slice(idx);
                } else {
                    const bodyEnd = content.lastIndexOf('</body>');
                    if (bodyEnd !== -1) {
                        content = content.slice(0, bodyEnd) + COMMENT_SNIPPET + '\n' + content.slice(bodyEnd);
                    } else {
                        content += '\n' + COMMENT_SNIPPET;
                    }
                }
            }

            if (content !== original) {
                fs.writeFileSync(file, content, 'utf-8');
                console.log('✅ ठीक हुआ');
                fixed++;
            } else {
                console.log('⏭️ कोई बदलाव नहीं');
            }

        } catch (err) {
            console.log('❌ त्रुटि:', err.message);
        }
    }

    console.log(`\n🎉 पूरा हुआ! ${fixed}/${total} फाइलें ठीक की गईं।`);
}

// ----------------------------------------------------------------
// 6. चलाएँ
// ----------------------------------------------------------------
console.log('\n🚀 comment.js – सभी पेजों को ठीक कर रहा है...\n');

updateCommentJS();
fixAllPages();

console.log('\n✅ सब कुछ ठीक हो गया!');
console.log('📌 अब आप comment.js को delete कर सकते हैं (यह सिर्फ एक बार चलाने के लिए है)\n');

// ----------------------------------------------------------------
// 7. खुद को delete करें (वैकल्पिक – अगर चाहें तो अनकमेंट करें)
// ----------------------------------------------------------------
// import { rmSync } from 'fs';
// try {
//     rmSync(__filename);
//     console.log('🗑️ comment.js (स्क्रिप्ट) खुद को delete कर गई।');
// } catch (e) {
//     console.log('⚠️ स्क्रिप्ट खुद को delete नहीं कर पाई। आप मैन्युअली delete कर सकते हैं।');
// }

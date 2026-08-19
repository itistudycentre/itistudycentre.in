// ================================================================
// comment.js – एकीकृत कमेंट सिस्टम (पूरी वेबसाइट के लिए)
// ================================================================
// यह फ़ाइल हर पेज पर काम करेगी — बस इसे commit कर दें!
// ================================================================

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

    // ---------- Categories (Contact Us के same 7) ----------
    const CATEGORIES = [
        { value: 'study-material', label: '📚 Study Material / Notes' },
        { value: 'broken-link', label: '🔗 Broken Link' },
        { value: 'wrong-info', label: '❌ Wrong Information / Correction' },
        { value: 'new-topic', label: '➕ New Topic' },
        { value: 'website-problem', label: '🌐 Website Problem' },
        { value: 'general-suggestion', label: '💡 General Suggestion' },
        { value: 'other', label: '📌 Other' }
    ];

    // ---------- DOM Ready ----------
    document.addEventListener('DOMContentLoaded', function() {

        // क्या पेज पर कमेंट सेक्शन है?
        const wrapper = document.querySelector('.comment-section-wrapper');
        if (!wrapper) {
            // अगर नहीं है तो कुछ न करें (पेज पर कमेंट सिस्टम नहीं है)
            return;
        }

        // ---------- Dynamic Firebase Imports ----------
        Promise.all([
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js'),
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-app-check.js'),
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js')
        ]).then(([
            { initializeApp },
            { initializeAppCheck, ReCaptchaV3Provider },
            { getFirestore, collection, addDoc, serverTimestamp, query, where, orderBy, getDocs }
        ]) => {

            // ---------- Init Firebase ----------
            const app = initializeApp(firebaseConfig);
            initializeAppCheck(app, {
                provider: new ReCaptchaV3Provider("6LexjYctAAAAAJdA17IjqdkfJrecHtmqnd-DoODv"),
                isTokenAutoRefreshEnabled: true
            });
            const db = getFirestore(app);

            // ---------- Page ID ----------
            const pageId = window.location.pathname.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home';

            // ---------- Form Elements ----------
            const form = document.getElementById('commentForm');
            const formMessage = document.getElementById('formMessage');
            if (!form) return;

            // ---------- Category Dropdown Dynamically Add (अगर नहीं है) ----------
            let categorySelect = document.getElementById('commentCategory');
            if (!categorySelect) {
                // Form के अंदर category select डालें (name/email के बाद, comment से पहले)
                const nameInput = document.getElementById('nameInput');
                const parent = nameInput ? nameInput.parentNode : form;

                // wrapper div बनाएँ
                const catWrapper = document.createElement('div');
                catWrapper.style.cssText = 'margin-top: 10px;';

                const label = document.createElement('label');
                label.htmlFor = 'commentCategory';
                label.textContent = 'Category';
                label.style.cssText = 'display:block; font-weight:600; font-size:14px; color:#333; margin-bottom:4px;';
                label.innerHTML = 'Category <span style="color:#d00000;">*</span>';

                const select = document.createElement('select');
                select.id = 'commentCategory';
                select.name = 'category';
                select.required = true;
                select.style.cssText = 'width:100%; padding:10px 12px; border:1px solid #ddd; border-radius:6px; font-size:14px; background:#fff;';

                // Default option
                const defaultOpt = document.createElement('option');
                defaultOpt.value = '';
                defaultOpt.textContent = '-- Category चुनें --';
                select.appendChild(defaultOpt);

                // All categories
                CATEGORIES.forEach(cat => {
                    const opt = document.createElement('option');
                    opt.value = cat.value;
                    opt.textContent = cat.label;
                    select.appendChild(opt);
                });

                catWrapper.appendChild(label);
                catWrapper.appendChild(select);

                // Insert after name input, before comment textarea
                if (nameInput && nameInput.parentNode) {
                    nameInput.parentNode.insertBefore(catWrapper, nameInput.nextSibling);
                } else {
                    form.insertBefore(catWrapper, form.querySelector('textarea') || form.firstChild);
                }

                categorySelect = select;
            }

            // ---------- Page ID hidden field ----------
            let pageInput = document.getElementById('pageInput');
            if (!pageInput) {
                pageInput = document.createElement('input');
                pageInput.type = 'hidden';
                pageInput.id = 'pageInput';
                pageInput.name = 'page';
                form.appendChild(pageInput);
            }
            pageInput.value = pageId;

            // ---------- Form Submit ----------
            form.addEventListener('submit', async function(e) {
                e.preventDefault();

                const comment = document.getElementById('commentInput').value.trim();
                const name = document.getElementById('nameInput').value.trim() || 'अनाम';
                const category = document.getElementById('commentCategory').value;
                const submitBtn = form.querySelector('.btn-submit-comment');

                // Validation
                if (!comment) {
                    showMessage('error', '⚠️ कृपया कुछ लिखें।');
                    document.getElementById('commentInput').focus();
                    return;
                }

                if (!category) {
                    showMessage('error', '⚠️ कृपया Category चुनें।');
                    document.getElementById('commentCategory').focus();
                    return;
                }

                submitBtn.disabled = true;
                submitBtn.textContent = '⏳ भेजा जा रहा...';
                formMessage.style.display = 'none';

                try {
                    await addDoc(collection(db, 'comments'), {
                        name: name,
                        email: document.getElementById('emailInput')?.value?.trim() || '',
                        category: category,
                        message: comment,
                        page: pageId,
                        type: 'comment',
                        status: 'pending',
                        createdAt: serverTimestamp()
                    });

                    showMessage('success', '✅ आपकी टिप्पणी समीक्षा के लिए भेज दी गई है। धन्यवाद!');
                    document.getElementById('commentInput').value = '';
                    document.getElementById('nameInput').value = '';
                    if (document.getElementById('emailInput')) {
                        document.getElementById('emailInput').value = '';
                    }
                    document.getElementById('commentCategory').value = '';

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
                        const category = data.category ? CATEGORIES.find(c => c.value === data.category) : null;
                        const catLabel = category ? category.label : '💬 General';
                        html += `
                            <div class="comment-item">
                                <div class="comment-meta">
                                    ${data.name || 'अनाम'} · ${date}
                                    <span style="background:#eef2f7; padding:1px 10px; border-radius:12px; font-size:12px; color:#555; margin-left:8px;">${catLabel}</span>
                                </div>
                                <div class="comment-text">${data.message}</div>
                            </div>
                        `;
                    });
                    container.innerHTML = html;

                } catch (error) {
                    console.error('Error loading comments:', error);
                    container.innerHTML = '<p class="no-comments">टिप्पणियाँ लोड नहीं हो पाईं।</p>';
                }
            }

            loadComments();

        }).catch(err => {
            console.error('Firebase load error:', err);
        });

    });

})();

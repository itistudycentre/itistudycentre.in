// ============================================================
// comment.js – एकीकृत कमेंट सिस्टम (Firebase)
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

    // ---------- DOM Ready ----------
    document.addEventListener('DOMContentLoaded', function() {

        // अगर पेज पर कमेंट सेक्शन नहीं है तो return
        const wrapper = document.querySelector('.comment-section-wrapper');
        if (!wrapper) return;

        // ---------- Dynamic Imports (Firebase) ----------
        Promise.all([
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js'),
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-app-check.js'),
            import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js')
        ]).then(([
            { initializeApp },
            { initializeAppCheck, ReCaptchaV3Provider },
            { getFirestore, collection, addDoc, serverTimestamp, query, where, orderBy, getDocs }
        ]) => {

            // Init Firebase
            const app = initializeApp(firebaseConfig);
            initializeAppCheck(app, {
                provider: new ReCaptchaV3Provider("6LexjYctAAAAAJdA17IjqdkfJrecHtmqnd-DoODv"),
                isTokenAutoRefreshEnabled: true
            });
            const db = getFirestore(app);

            // ---------- Page ID ----------
            const pageId = window.location.pathname.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home';
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
                        html += `
                            <div class="comment-item">
                                <div class="comment-meta">${data.name || 'अनाम'} · ${date}</div>
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

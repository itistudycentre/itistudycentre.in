// ================================================================
// ITI Study Centre - COMMON SUGGESTION SYSTEM
// ================================================================

(function () {
    "use strict";

    const firebaseConfig = {
        apiKey: "AIzaSyAyBiDGQxQ5LEtIV5JtMOT79rU3ksQg8TE",
        authDomain: "iti-study-centre.firebaseapp.com",
        projectId: "iti-study-centre",
        storageBucket: "iti-study-centre.firebasestorage.app",
        messagingSenderId: "690794814318",
        appId: "1:690794814318:web:42ed1c1f582a9e1df5bf7f"
    };

    const RECAPTCHA_SITE_KEY =
        "6LexjYctAAAAAJdA17IjqdkfJrecHtmqnd-DoODv";

    document.addEventListener("DOMContentLoaded", async function () {

        const form = document.getElementById("suggestionForm");

        if (!form) {
            return;
        }

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const categoryInput = document.getElementById("category");
        const messageInput = document.getElementById("message");
        const submitButton = document.getElementById("submitSuggestion");
        const formMessage = document.getElementById("formMessage");

        if (
            !nameInput ||
            !categoryInput ||
            !messageInput ||
            !submitButton
        ) {
            console.error("Suggestion form elements missing.");
            return;
        }

        function showMessage(type, text) {

            if (!formMessage) {
                alert(text);
                return;
            }

            formMessage.className = type;
            formMessage.textContent = text;
            formMessage.style.display = "block";
        }

        try {

            const firebaseApp =
                await import(
                    "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js"
                );

            const firebaseAppCheck =
                await import(
                    "https://www.gstatic.com/firebasejs/12.17.1/firebase-app-check.js"
                );

            const firebaseFirestore =
                await import(
                    "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js"
                );

            const {
                initializeApp
            } = firebaseApp;

            const {
                initializeAppCheck,
                ReCaptchaV3Provider
            } = firebaseAppCheck;

            const {
                getFirestore,
                collection,
                addDoc,
                serverTimestamp
            } = firebaseFirestore;

            const app = initializeApp(firebaseConfig);

            initializeAppCheck(app, {
                provider:
                    new ReCaptchaV3Provider(
                        RECAPTCHA_SITE_KEY
                    ),
                isTokenAutoRefreshEnabled: true
            });

            const db = getFirestore(app);

            form.addEventListener("submit", async function (event) {

                event.preventDefault();

                const name =
                    nameInput.value.trim();

                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";

                const category =
                    categoryInput.value;

                const message =
                    messageInput.value.trim();

                if (!name) {
                    showMessage(
                        "error",
                        "⚠️ कृपया अपना नाम लिखें।"
                    );
                    nameInput.focus();
                    return;
                }

                if (!category) {
                    showMessage(
                        "error",
                        "⚠️ कृपया Category चुनें।"
                    );
                    categoryInput.focus();
                    return;
                }

                if (!message) {
                    showMessage(
                        "error",
                        "⚠️ कृपया अपना सुझाव लिखें।"
                    );
                    messageInput.focus();
                    return;
                }

                submitButton.disabled = true;
                submitButton.textContent =
                    "⏳ सुझाव भेजा जा रहा है...";

                try {

                    await addDoc(
                        collection(db, "comments"),
                        {
                            name: name,
                            email: email,
                            category: category,
                            message: message,

                            page: "contact.html",

                            type: "suggestion",

                            status: "pending",

                            createdAt:
                                serverTimestamp()
                        }
                    );

                    showMessage(
                        "success",
                        "✅ आपका सुझाव सफलतापूर्वक भेज दिया गया है। आपका सुझाव Admin Approval के लिए भेज दिया गया है।"
                    );

                    form.reset();

                } catch (error) {

                    console.error(
                        "Firebase Error:",
                        error
                    );

                    showMessage(
                        "error",
                        "❌ सुझाव भेजने में समस्या हुई। कृपया कुछ समय बाद पुनः प्रयास करें।"
                    );

                } finally {

                    submitButton.disabled = false;

                    submitButton.textContent =
                        "📤 Submit Suggestion →";
                }

            });

        } catch (error) {

            console.error(
                "Firebase Load Error:",
                error
            );

            showMessage(
                "error",
                "❌ Firebase system load नहीं हो पाया।"
            );
        }

    });

})();

// ================================================================
// comment.js – ITI Study Centre
// COMMON SUGGESTION SYSTEM
// Contact Us के existing suggestion form के साथ compatible
// ================================================================

(function () {
    'use strict';

    const firebaseConfig = {
        apiKey: "AIzaSyAyBiDGQx5QLEtIV5JtMOT79rU3ksQg8TE",
        authDomain: "iti-study-centre.firebaseapp.com",
        projectId: "iti-study-centre",
        storageBucket: "iti-study-centre.firebasestorage.app",
        messagingSenderId: "690794814318",
        appId: "1:690794814318:web:42ed1c1f582a9e1df5bf7f"
    };

    const RECAPTCHA_SITE_KEY =
        "6LexjYctAAAAAJdA17IjqdkfJrecHtmqnd-DoODv";

    document.addEventListener("DOMContentLoaded", async function () {

        // केवल Contact/Suggestion form मौजूद होने पर काम करेगा
        const form = document.getElementById("suggestionForm");

        if (!form) {
            return;
        }

        try {

            // =====================================================
            // FIREBASE MODULES
            // =====================================================

            const [
                firebaseApp,
                firebaseAppCheck,
                firebaseFirestore
            ] = await Promise.all([
                import(
                    "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js"
                ),
                import(
                    "https://www.gstatic.com/firebasejs/12.17.1/firebase-app-check.js"
                ),
                import(
                    "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js"
                )
            ]);

            const { initializeApp } = firebaseApp;

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

            // =====================================================
            // INITIALIZE FIREBASE
            // =====================================================

            const app = initializeApp(firebaseConfig);

            initializeAppCheck(app, {
                provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
                isTokenAutoRefreshEnabled: true
            });

            const db = getFirestore(app);

            // =====================================================
            // FORM ELEMENTS
            // =====================================================

            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const categoryInput =
                document.getElementById("category");

            const messageInput =
                document.getElementById("message");

            const submitButton =
                document.getElementById("submitSuggestion");

            const formMessage =
                document.getElementById("formMessage");

            // =====================================================
            // CHECK ELEMENTS
            // =====================================================

            if (
                !nameInput ||
                !categoryInput ||
                !messageInput ||
                !submitButton ||
                !formMessage
            ) {
                console.error(
                    "Suggestion form elements missing."
                );
                return;
            }

            // =====================================================
            // MESSAGE FUNCTION
            // =====================================================

            function showMessage(type, message) {

                formMessage.className = type;
                formMessage.textContent = message;
                formMessage.style.display = "block";

                formMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            // =====================================================
            // FORM SUBMIT
            // =====================================================

            form.addEventListener(
                "submit",
                async function (event) {

                    event.preventDefault();

                    // ------------------------------------------------
                    // GET VALUES
                    // ------------------------------------------------

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

                    // ------------------------------------------------
                    // VALIDATION
                    // ------------------------------------------------

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
                            "⚠️ कृपया Suggestion Category चुनें।"
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

                    if (
                        email &&
                        emailInput &&
                        !emailInput.checkValidity()
                    ) {
                        showMessage(
                            "error",
                            "⚠️ कृपया सही Email Address डालें।"
                        );
                        emailInput.focus();
                        return;
                    }

                    // ------------------------------------------------
                    // BUTTON DISABLE
                    // ------------------------------------------------

                    submitButton.disabled = true;
                    submitButton.textContent = "⏳ Sending...";
                    formMessage.style.display = "none";

                    try {

                        // ============================================
                        // FIRESTORE
                        // ============================================

                        await addDoc(
                            collection(db, "comments"),
                            {
                                name: name,

                                email: email || "",

                                category: category,

                                message: message,

                                // Contact page से भेजा गया
                                page: "/contact.html",

                                // Admin panel के लिए
                                type: "suggestion",

                                // हमेशा Pending
                                // Admin approve करेगा
                                status: "pending",

                                createdAt:
                                    serverTimestamp()
                            }
                        );

                        // ============================================
                        // SUCCESS
                        // ============================================

                        showMessage(
                            "success",
                            "✅ आपका सुझाव सफलतापूर्वक भेज दिया गया है। आपका सुझाव अभी Pending Review में है।"
                        );

                        // Form साफ करें
                        form.reset();

                    } catch (error) {

                        console.error(
                            "Firebase Suggestion Error:",
                            error
                        );

                        showMessage(
                            "error",
                            "❌ सुझाव भेजने में समस्या हुई। कृपया कुछ समय बाद पुनः प्रयास करें।"
                        );

                    } finally {

                        // ============================================
                        // BUTTON ENABLE
                        // ============================================

                        submitButton.disabled = false;

                        submitButton.textContent =
                            "📤 Submit Suggestion →";
                    }

                }
            );

            console.log(
                "✅ ITI Study Centre Suggestion System Loaded"
            );

        } catch (error) {

            console.error(
                "Firebase Load Error:",
                error
            );

            const formMessage =
                document.getElementById("formMessage");

            if (formMessage) {

                formMessage.className = "error";

                formMessage.textContent =
                    "❌ Suggestion system load नहीं हो पाया।";

                formMessage.style.display = "block";
            }
        }

    });

})();

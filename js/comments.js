// ================================================================
// comment.js – ITI Study Centre
// एकीकृत सुझाव / Comment System
// ================================================================

(function () {
    "use strict";

    // ============================================================
    // FIREBASE CONFIGURATION
    // ============================================================

    const firebaseConfig = {
        apiKey: "AIzaSyAyBiDGQxQ5LEtIV5JtMOT79rU3ksQg8TE",
        authDomain: "iti-study-centre.firebaseapp.com",
        projectId: "iti-study-centre",
        storageBucket: "iti-study-centre.firebasestorage.app",
        messagingSenderId: "690794814318",
        appId: "1:690794814318:web:42ed1c1f582a9e1df5bf7f"
    };

    // ============================================================
    // reCAPTCHA V3 SITE KEY
    // ============================================================

    const RECAPTCHA_SITE_KEY =
        "6LexjYctAAAAAJdA17IjqdkfJrecHtmqnd-DoODv";

    // ============================================================
    // START
    // ============================================================

    document.addEventListener("DOMContentLoaded", async function () {

        // --------------------------------------------------------
        // केवल Contact/Suggestion Form पर सिस्टम चलेगा
        // --------------------------------------------------------

        const form =
            document.getElementById("suggestionForm") ||
            document.getElementById("commentForm");

        if (!form) {
            return;
        }

        // --------------------------------------------------------
        // FORM ELEMENTS
        // --------------------------------------------------------

        const nameInput =
            document.getElementById("name") ||
            document.getElementById("nameInput");

        const emailInput =
            document.getElementById("email") ||
            document.getElementById("emailInput");

        const categoryInput =
            document.getElementById("category") ||
            document.getElementById("commentCategory");

        const messageInput =
            document.getElementById("message") ||
            document.getElementById("commentInput");

        const submitButton =
            document.getElementById("submitSuggestion") ||
            form.querySelector(".btn-submit-comment");

        const formMessage =
            document.getElementById("formMessage");

        // --------------------------------------------------------
        // CHECK FORM
        // --------------------------------------------------------

        if (
            !nameInput ||
            !categoryInput ||
            !messageInput ||
            !submitButton
        ) {
            console.error(
                "Suggestion form elements नहीं मिले।"
            );
            return;
        }

        // ========================================================
        // MESSAGE FUNCTION
        // ========================================================

        function showMessage(type, message) {

            if (!formMessage) {
                alert(message);
                return;
            }

            formMessage.className = type;
            formMessage.textContent = message;
            formMessage.style.display = "block";
        }

        // ========================================================
        // LOAD FIREBASE
        // ========================================================

        try {

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

            // ----------------------------------------------------
            // Firebase Functions
            // ----------------------------------------------------

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

            // ====================================================
            // INITIALIZE FIREBASE
            // ====================================================

            const app = initializeApp(firebaseConfig);

            // ====================================================
            // APP CHECK
            // ====================================================

            initializeAppCheck(app, {

                provider:
                    new ReCaptchaV3Provider(
                        RECAPTCHA_SITE_KEY
                    ),

                isTokenAutoRefreshEnabled: true

            });

            // ====================================================
            // FIRESTORE
            // ====================================================

            const db = getFirestore(app);

            // ====================================================
            // FORM SUBMIT
            // ====================================================

            form.addEventListener(
                "submit",
                async function (event) {

                    event.preventDefault();

                    // ------------------------------------------------
                    // GET FORM VALUES
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

                    // =================================================
                    // VALIDATION
                    // =================================================

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

                    // ------------------------------------------------
                    // EMAIL OPTIONAL
                    // ------------------------------------------------

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

                    // =================================================
                    // DISABLE BUTTON
                    // =================================================

                    submitButton.disabled = true;

                    submitButton.textContent =
                        "⏳ सुझाव भेजा जा रहा है...";

                    if (formMessage) {
                        formMessage.style.display = "none";
                    }

                    // =================================================
                    // SAVE TO FIRESTORE
                    // =================================================

                    try {

                        await addDoc(
                            collection(db, "comments"),
                            {

                                // User Information
                                name: name,

                                email: email || "",

                                // Suggestion Information
                                category: category,

                                message: message,

                                // सभी सुझाव Contact page से
                                page: "contact.html",

                                // Admin Panel के लिए
                                type: "suggestion",

                                // Approval System
                                status: "pending",

                                // Server Time
                                createdAt:
                                    serverTimestamp()

                            }
                        );

                        // =================================================
                        // SUCCESS
                        // =================================================

                        showMessage(
                            "success",
                            "✅ आपका सुझाव सफलतापूर्वक भेज दिया गया है। आपका सुझाव अभी Pending Review में है।"
                        );

                        // ------------------------------------------------
                        // RESET FORM
                        // ------------------------------------------------

                        form.reset();

                        // ------------------------------------------------
                        // MESSAGE पर scroll
                        // ------------------------------------------------

                        if (formMessage) {

                            formMessage.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        }

                    }

                    // =================================================
                    // ERROR
                    // =================================================

                    catch (error) {

                        console.error(
                            "Firebase Error:",
                            error
                        );

                        showMessage(
                            "error",
                            "❌ सुझाव भेजने में समस्या हुई। कृपया कुछ समय बाद पुनः प्रयास करें।"
                        );

                    }

                    // =================================================
                    // ENABLE BUTTON
                    // =================================================

                    finally {

                        submitButton.disabled = false;

                        submitButton.textContent =
                            "📤 Submit Suggestion →";

                    }

                }
            );

        }

        // ========================================================
        // FIREBASE LOAD ERROR
        // ========================================================

        catch (error) {

            console.error(
                "Firebase load error:",
                error
            );

            showMessage(
                "error",
                "❌ सुझाव सिस्टम लोड नहीं हो पाया। कृपया पेज को Refresh करें।"
            );

        }

    });

})();

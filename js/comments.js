// ============================================================
// ITI STUDY CENTRE - COMMON FIREBASE COMMENT SYSTEM
// ============================================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

// ============================================================
// FIREBASE CONFIGURATION
// वही Firebase Project जो आपकी contact.html में पहले से है
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
// INITIALIZE FIREBASE
// ============================================================

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ============================================================
// CURRENT PAGE
// ============================================================

function getCurrentPage() {
    return window.location.pathname;
}

// ============================================================
// SAFE HTML
// Comment में कोई HTML/Script न चला सके
// ============================================================

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// ============================================================
// TIME
// ============================================================

function formatDate(timestamp) {

    if (!timestamp) {
        return "अभी";
    }

    try {

        const date = timestamp.toDate();

        return date.toLocaleString("hi-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

    } catch {
        return "अभी";
    }
}

// ============================================================
// LOAD APPROVED COMMENTS
// ============================================================

async function loadComments() {

    const list = document.getElementById("comment-list");

    if (!list) return;

    try {

        const page = getCurrentPage();

        const q = query(
            collection(db, "Comments"),
            where("page", "==", page),
            where("status", "==", "approved")
        );

        const snapshot = await getDocs(q);

        // पुराने dynamic comments हटाएँ
        list.querySelectorAll(".firebase-comment").forEach(el => el.remove());

        const comments = [];

        snapshot.forEach(doc => {

            comments.push({
                id: doc.id,
                ...doc.data()
            });

        });

        // Latest first
        comments.sort((a, b) => {

            const aTime = a.createdAt?.toMillis?.() || 0;
            const bTime = b.createdAt?.toMillis?.() || 0;

            return bTime - aTime;

        });

        if (comments.length === 0) {

            return;
        }

        comments.forEach(comment => {

            const div = document.createElement("div");

            div.className = "comment-item firebase-comment";

            div.innerHTML = `
                <strong>${escapeHTML(comment.name || "Anonymous")}</strong>
                <span class="meta">
                    (${formatDate(comment.createdAt)})
                </span>
                <span class="status-approved">
                    ✅ स्वीकृत
                </span>

                <p style="margin:4px 0 0 0; font-size:0.95rem;">
                    ${escapeHTML(comment.message || "")}
                </p>
            `;

            list.appendChild(div);

        });

    } catch (error) {

        console.error("Firebase comments loading error:", error);

    }

}

// ============================================================
// POST COMMENT
// ============================================================

window.postFirebaseComment = async function () {

    const textBox = document.getElementById("comment-text");
    const nameBox = document.getElementById("comment-name");

    if (!textBox) return;

    const message = textBox.value.trim();

    const name =
        nameBox?.value.trim() || "Anonymous";

    if (!message) {

        alert("कृपया पहले अपनी टिप्पणी लिखें।");

        return;
    }

    const button =
        document.querySelector("[data-firebase-comment-button]");

    if (button) {
        button.disabled = true;
        button.textContent = "⏳ भेजा जा रहा है...";
    }

    try {

        await addDoc(
            collection(db, "Comments"),
            {
                name: name,
                message: message,
                page: getCurrentPage(),
                status: "pending",
                type: "comment",
                createdAt: serverTimestamp()
            }
        );

        textBox.value = "";

        if (nameBox) {
            nameBox.value = "";
        }

        alert(
            "✅ आपकी टिप्पणी भेज दी गई है।\n\n" +
            "यह एडमिन की समीक्षा के बाद वेबसाइट पर दिखाई जाएगी।"
        );

    } catch (error) {

        console.error("Firebase comment submission error:", error);

        alert(
            "❌ टिप्पणी भेजी नहीं जा सकी।\n\n" +
            "कृपया कुछ देर बाद दोबारा प्रयास करें।"
        );

    } finally {

        if (button) {

            button.disabled = false;
            button.textContent = "💬 टिप्पणी पोस्ट करें";

        }

    }

};

// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    loadComments();

});

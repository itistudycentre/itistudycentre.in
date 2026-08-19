/* ============================================================
   ITI Study Centre — Centralized Comment System
   File: /js/comments.js

   Usage on any page (only this is needed in the HTML body,
   wherever the comment box should appear):

     <div id="comment-section"></div>
     <script type="module" src="/js/comments.js"></script>

   This script auto-detects the current page path and:
     - renders a comment form
     - submits new comments to Firestore with status "pending"
     - loads and displays only "approved" comments for this page

   Moderation happens separately in /admin-comments.html
   ============================================================ */

import {
  initializeApp,
  getApps,
  getApp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
  initializeAppCheck,
  ReCaptchaV3Provider
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app-check.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

/* ------------------------------------------------------------
   Firebase project configuration
   (same project already used across the site — unchanged)
   ------------------------------------------------------------ */
const firebaseConfig = {
  apiKey: "AIzaSyAyBiDGQxQ5LEtIV5JtMOT79rU3ksQg8TE",
  authDomain: "iti-study-centre.firebaseapp.com",
  projectId: "iti-study-centre",
  storageBucket: "iti-study-centre.firebasestorage.app",
  messagingSenderId: "690794814318",
  appId: "1:690794814318:web:42ed1c1f582a9e1df5bf7f"
};

const RECAPTCHA_SITE_KEY = "6LexjYctAAAAAJdA17IjqdkfJrecHtmqnd-DoODv";

/* ------------------------------------------------------------
   Idempotent Firebase init.
   Some pages (e.g. contact.html) already call initializeApp()
   themselves. We reuse the existing app instead of throwing
   a "Firebase App already exists" error.
   ------------------------------------------------------------ */
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

if (!window.__itiAppCheckInitialized) {
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
      isTokenAutoRefreshEnabled: true
    });
  } catch (e) {
    /* App Check already initialized on this page — safe to ignore */
  }
  window.__itiAppCheckInitialized = true;
}

const db = getFirestore(app);

/* ------------------------------------------------------------
   Helpers
   ------------------------------------------------------------ */

// Escapes text before it is ever placed in innerHTML — blocks
// HTML/JS injection (XSS) from comment content.
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function getPagePath() {
  let p = window.location.pathname;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
}

function timeAgo(date) {
  if (!date) return "";
  const diffMs = Date.now() - date.getTime();
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return "अभी-अभी";
  if (min < 60) return min + " मिनट पहले";
  const hr = Math.floor(min / 60);
  if (hr < 24) return hr + " घंटे पहले";
  const day = Math.floor(hr / 24);
  return day + " दिन पहले";
}

/* ------------------------------------------------------------
   Styles — injected once, matches site's blue/yellow/white theme
   ------------------------------------------------------------ */
function injectStyles() {
  if (document.getElementById("cc-styles")) return;
  const style = document.createElement("style");
  style.id = "cc-styles";
  style.textContent = `
    .cc-wrap{background:#fff;border-radius:14px;padding:20px 22px;border:1px solid #e6eaef;}
    .cc-note{font-size:.85rem;color:#888;margin:0 0 12px;}
    .cc-field{width:100%;padding:12px 16px;border:1px solid #ccc;border-radius:8px;font-size:1rem;font-family:inherit;margin-bottom:10px;box-sizing:border-box;}
    textarea.cc-field{resize:vertical;}
    .cc-row{display:flex;gap:10px;flex-wrap:wrap;}
    .cc-row .cc-field{flex:1 1 200px;}
    .cc-btn{background:#003366;color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;border-bottom:3px solid #ffcc00;}
    .cc-btn:hover{opacity:.92;}
    .cc-btn:disabled{opacity:.6;cursor:not-allowed;}
    .cc-msg{margin-top:10px;font-size:.9rem;padding:10px 14px;border-radius:8px;display:none;}
    .cc-msg.show{display:block;}
    .cc-msg.ok{background:#eaf7ea;color:#256029;border:1px solid #b6e2b6;}
    .cc-msg.err{background:#fdecea;color:#a33;border:1px solid #f3b6b6;}
    .cc-list{margin-top:18px;max-height:420px;overflow-y:auto;}
    .cc-item{background:#f9fafc;border:1px solid #e6eaef;border-radius:10px;padding:12px 16px;margin-bottom:10px;}
    .cc-item strong{color:#003366;}
    .cc-item .cc-meta{color:#888;font-size:.8rem;margin-left:8px;}
    .cc-item p{margin:6px 0 0;font-size:.95rem;color:#1e2a3a;white-space:pre-wrap;word-break:break-word;}
    .cc-empty{color:#888;font-style:italic;font-size:.9rem;}
    .cc-hp{position:absolute;left:-9999px;opacity:0;height:0;width:0;}
    @media (max-width:520px){ .cc-row{flex-direction:column;} }
  `;
  document.head.appendChild(style);
}

/* ------------------------------------------------------------
   Render
   ------------------------------------------------------------ */
function renderShell(container) {
  container.innerHTML = `
    <div class="cc-wrap">
      <p style="margin:0 0 6px;"><strong>💬 इस पेज पर अपने विचार साझा करें</strong></p>
      <p class="cc-note">📌 सभी टिप्पणियाँ प्रकाशित होने से पहले एडमिन द्वारा समीक्षा की जाती हैं।</p>
      <form id="cc-form">
        <div class="cc-row">
          <input type="text" id="cc-name" class="cc-field" placeholder="आपका नाम (वैकल्पिक)" maxlength="80" autocomplete="name">
          <input type="email" id="cc-email" class="cc-field" placeholder="आपका ईमेल (वैकल्पिक)" maxlength="150" autocomplete="email">
        </div>
        <textarea id="cc-message" class="cc-field" rows="3" placeholder="अपनी टिप्पणी यहाँ लिखें..." maxlength="2000" required></textarea>
        <input type="text" id="cc-website" class="cc-hp" tabindex="-1" autocomplete="off">
        <button type="submit" class="cc-btn" id="cc-submit">💬 टिप्पणी पोस्ट करें (समीक्षाधीन)</button>
        <div class="cc-msg" id="cc-status"></div>
      </form>
      <div class="cc-list" id="cc-list">
        <p class="cc-empty">लोड हो रहा है...</p>
      </div>
    </div>
  `;
}

function showStatus(el, text, ok) {
  el.textContent = text;
  el.className = "cc-msg show " + (ok ? "ok" : "err");
}

async function loadApprovedComments(container, page) {
  const listEl = container.querySelector("#cc-list");
  try {
    // Two equality filters only (no orderBy) — this runs on
    // Firestore's automatic indexes, no composite index needed.
    const q = query(
      collection(db, "comments"),
      where("page", "==", page),
      where("status", "==", "approved")
    );
    const snap = await getDocs(q);
    const items = [];
    snap.forEach(docSnap => {
      const d = docSnap.data();
      items.push({
        name: d.name || "Anonymous",
        message: d.message || "",
        createdAt: d.createdAt && d.createdAt.toDate ? d.createdAt.toDate() : null
      });
    });
    // sort newest-first on the client
    items.sort((a, b) => (b.createdAt ? b.createdAt.getTime() : 0) - (a.createdAt ? a.createdAt.getTime() : 0));

    if (items.length === 0) {
      listEl.innerHTML = `<p class="cc-empty">अभी तक कोई स्वीकृत टिप्पणी नहीं है। सबसे पहले टिप्पणी करें!</p>`;
      return;
    }
    listEl.innerHTML = items.map(c => `
      <div class="cc-item">
        <strong>${escapeHtml(c.name)}</strong>
        <span class="cc-meta">${escapeHtml(timeAgo(c.createdAt))}</span>
        <p>${escapeHtml(c.message)}</p>
      </div>
    `).join("");
  } catch (err) {
    console.error("Comments load error:", err);
    listEl.innerHTML = `<p class="cc-empty">टिप्पणियाँ लोड नहीं हो सकीं। बाद में पुनः प्रयास करें।</p>`;
  }
}

function bindForm(container, page) {
  const form = container.querySelector("#cc-form");
  const statusEl = container.querySelector("#cc-status");
  const submitBtn = container.querySelector("#cc-submit");
  let isSubmitting = false; // guards against double-fire submit events (common on mobile)

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // a submit is already in flight — ignore this one

    // Honeypot — real users never fill this hidden field
    const honeypot = container.querySelector("#cc-website").value;
    if (honeypot) return;

    const name = container.querySelector("#cc-name").value.trim().slice(0, 80);
    const email = container.querySelector("#cc-email").value.trim().slice(0, 150);
    const message = container.querySelector("#cc-message").value.trim().slice(0, 2000);

    if (!message) {
      showStatus(statusEl, "कृपया टिप्पणी लिखें।", false);
      return;
    }

    isSubmitting = true;
    submitBtn.disabled = true;
    try {
      await addDoc(collection(db, "comments"), {
        name: name || "Anonymous",
        email: email || "",
        message,
        page,
        type: "comment",
        category: "comment",
        status: "pending",
        createdAt: serverTimestamp()
      });
      form.reset();
      showStatus(statusEl, "✅ आपकी टिप्पणी समीक्षा के लिए भेज दी गई है।", true);
    } catch (err) {
      console.error("Comment submit error:", err);
      showStatus(statusEl, "❌ टिप्पणी भेजने में समस्या हुई। पुनः प्रयास करें।", false);
    } finally {
      isSubmitting = false;
      submitBtn.disabled = false;
    }
  });
}

/* ------------------------------------------------------------
   Init
   ------------------------------------------------------------ */
function initComments() {
  const container = document.getElementById("comment-section");
  if (!container) return; // page has no comment box — do nothing

  injectStyles();
  const page = getPagePath();
  renderShell(container);
  bindForm(container, page);
  loadApprovedComments(container, page);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initComments);
} else {
  initComments();
}

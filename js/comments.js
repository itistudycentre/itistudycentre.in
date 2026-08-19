/* ============================================================
   ITI Study Centre — Centralized Comment System
   File: /js/comments.js

   Automatic Comment System
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


/* ============================================================
   FIREBASE CONFIG
============================================================ */

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


/* ============================================================
   FIREBASE INITIALIZATION
============================================================ */

const app =
  getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);


if (!window.__itiAppCheckInitialized) {

  try {

    initializeAppCheck(app, {

      provider:
        new ReCaptchaV3Provider(
          RECAPTCHA_SITE_KEY
        ),

      isTokenAutoRefreshEnabled:
        true

    });

  } catch (e) {

    console.warn(
      "App Check initialization:",
      e
    );

  }

  window.__itiAppCheckInitialized =
    true;
}


const db =
  getFirestore(app);


/* ============================================================
   HELPERS
============================================================ */

function escapeHtml(str) {

  const div =
    document.createElement("div");

  div.textContent =
    str == null
      ? ""
      : String(str);

  return div.innerHTML;
}


function getPagePath() {

  let p =
    window.location.pathname;

  if (
    p.length > 1 &&
    p.endsWith("/")
  ) {

    p =
      p.slice(0, -1);

  }

  return p || "/";

}


function timeAgo(date) {

  if (!date) {
    return "";
  }


  const diffMs =
    Date.now() -
    date.getTime();


  const min =
    Math.floor(
      diffMs / 60000
    );


  if (min < 1) {

    return "अभी-अभी";

  }


  if (min < 60) {

    return min +
      " मिनट पहले";

  }


  const hr =
    Math.floor(
      min / 60
    );


  if (hr < 24) {

    return hr +
      " घंटे पहले";

  }


  const day =
    Math.floor(
      hr / 24
    );


  return day +
    " दिन पहले";

}


/* ============================================================
   FIND WHERE COMMENT BOX SHOULD BE PLACED
============================================================ */

function findCommentPosition() {

  const footer =
    document.querySelector(
      "footer"
    );


  if (footer) {

    return footer;

  }


  const main =
    document.querySelector(
      "main"
    );


  if (main) {

    return main.nextSibling;

  }


  return null;

}


/* ============================================================
   CREATE COMMENT CONTAINER AUTOMATICALLY
============================================================ */

function createCommentContainer() {

  let container =
    document.getElementById(
      "comment-section"
    );


  if (container) {

    return container;

  }


  container =
    document.createElement(
      "section"
    );


  container.id =
    "comment-section";


  container.style.margin =
    "30px auto";


  container.style.maxWidth =
    "1000px";


  container.style.padding =
    "0 15px";


  const footer =
    document.querySelector(
      "footer"
    );


  if (footer) {

    footer.parentNode.insertBefore(
      container,
      footer
    );

    return container;

  }


  const main =
    document.querySelector(
      "main"
    );


  if (main) {

    main.insertAdjacentElement(
      "afterend",
      container
    );

    return container;

  }


  document.body.appendChild(
    container
  );


  return container;

}


/* ============================================================
   STYLES
============================================================ */

function injectStyles() {

  if (
    document.getElementById(
      "cc-styles"
    )
  ) {

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "cc-styles";


  style.textContent = `

    #comment-section{
      width:100%;
    }

    .cc-wrap{
      background:#fff;
      border-radius:14px;
      padding:18px 20px;
      border:1px solid #e6eaef;
      box-shadow:0 2px 8px rgba(0,0,0,.04);
    }

    .cc-title{
      margin:0 0 5px;
      font-size:1.15rem;
      color:#003366;
    }

    .cc-note{
      font-size:.82rem;
      color:#777;
      margin:0 0 12px;
    }

    .cc-field{
      width:100%;
      padding:11px 14px;
      border:1px solid #ccc;
      border-radius:8px;
      font-size:.95rem;
      font-family:inherit;
      margin-bottom:9px;
      box-sizing:border-box;
    }

    .cc-field:focus{
      outline:none;
      border-color:#003366;
    }

    textarea.cc-field{
      resize:vertical;
      min-height:90px;
    }

    .cc-row{
      display:flex;
      gap:9px;
      flex-wrap:wrap;
    }

    .cc-row .cc-field{
      flex:1 1 200px;
    }

    .cc-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      background:#003366;
      color:#fff;
      border:none;
      padding:8px 16px;
      border-radius:7px;
      font-size:.88rem;
      font-weight:600;
      cursor:pointer;
      border-bottom:2px solid #ffcc00;
    }

    .cc-btn:hover{
      opacity:.92;
    }

    .cc-btn:disabled{
      opacity:.6;
      cursor:not-allowed;
    }

    .cc-msg{
      margin-top:9px;
      font-size:.86rem;
      padding:9px 12px;
      border-radius:7px;
      display:none;
    }

    .cc-msg.show{
      display:block;
    }

    .cc-msg.ok{
      background:#eaf7ea;
      color:#256029;
      border:1px solid #b6e2b6;
    }

    .cc-msg.err{
      background:#fdecea;
      color:#a33;
      border:1px solid #f3b6b6;
    }

    .cc-list{
      margin-top:16px;
      max-height:420px;
      overflow-y:auto;
    }

    .cc-item{
      background:#f9fafc;
      border:1px solid #e6eaef;
      border-radius:10px;
      padding:11px 14px;
      margin-bottom:9px;
    }

    .cc-item strong{
      color:#003366;
    }

    .cc-item .cc-meta{
      color:#888;
      font-size:.78rem;
      margin-left:7px;
    }

    .cc-item p{
      margin:5px 0 0;
      font-size:.93rem;
      color:#1e2a3a;
      white-space:pre-wrap;
      word-break:break-word;
    }

    .cc-empty{
      color:#888;
      font-style:italic;
      font-size:.88rem;
    }

    .cc-hp{
      position:absolute;
      left:-9999px;
      opacity:0;
      height:0;
      width:0;
    }

    @media(max-width:520px){

      .cc-wrap{
        padding:15px;
      }

      .cc-row{
        flex-direction:column;
        gap:0;
      }

      .cc-btn{
        padding:8px 14px;
        font-size:.85rem;
      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* ============================================================
   RENDER COMMENT BOX
============================================================ */

function renderShell(
  container
) {

  container.innerHTML = `

    <div class="cc-wrap">

      <p class="cc-title">
        💬 इस पेज पर अपने विचार साझा करें
      </p>

      <p class="cc-note">
        📌 आपकी टिप्पणी प्रकाशित होने से पहले एडमिन द्वारा समीक्षा की जाएगी।
      </p>

      <form id="cc-form">

        <div class="cc-row">

          <input
            type="text"
            id="cc-name"
            class="cc-field"
            placeholder="आपका नाम (वैकल्पिक)"
            maxlength="80"
            autocomplete="name"
          >

          <input
            type="email"
            id="cc-email"
            class="cc-field"
            placeholder="आपका ईमेल (वैकल्पिक)"
            maxlength="150"
            autocomplete="email"
          >

        </div>


        <select
          id="cc-category"
          class="cc-field"
          required
        >
          <option value="">
            -- सुझाव की Category चुनें --
          </option>
          <option value="Study Material / Notes">
            📚 Study Material / Notes
          </option>
          <option value="Broken Link">
            🔗 Broken Link
          </option>
          <option value="Wrong Information / Correction">
            ❌ गलत जानकारी / Correction
          </option>
          <option value="New Topic">
            ➕ नया Topic जोड़ना
          </option>
          <option value="Website Problem">
            🌐 Website Problem
          </option>
          <option value="General Suggestion">
            💡 General Suggestion
          </option>
          <option value="Other">
            📌 Other
          </option>
        </select>


        <textarea
          id="cc-message"
          class="cc-field"
          rows="3"
          placeholder="अपनी टिप्पणी यहाँ लिखें..."
          maxlength="2000"
          required
        ></textarea>


        <input
          type="text"
          id="cc-website"
          class="cc-hp"
          tabindex="-1"
          autocomplete="off"
        >


        <button
          type="submit"
          class="cc-btn"
          id="cc-submit"
        >
          💬 सबमिट करें
        </button>


        <div
          class="cc-msg"
          id="cc-status"
        ></div>

      </form>


      <div
        class="cc-list"
        id="cc-list"
      >

        <p class="cc-empty">
          टिप्पणियाँ लोड हो रही हैं...
        </p>

      </div>

    </div>

  `;

}


/* ============================================================
   STATUS MESSAGE
============================================================ */

function showStatus(
  el,
  text,
  ok
) {

  el.textContent =
    text;


  el.className =
    "cc-msg show " +
    (
      ok
        ? "ok"
        : "err"
    );

}


/* ============================================================
   LOAD APPROVED COMMENTS
============================================================ */

async function loadApprovedComments(
  container,
  page
) {

  const listEl =
    container.querySelector(
      "#cc-list"
    );


  try {

    const q =
      query(

        collection(
          db,
          "comments"
        ),

        where(
          "page",
          "==",
          page
        ),

        where(
          "status",
          "==",
          "approved"
        )

      );


    const snap =
      await getDocs(q);


    const items = [];


    snap.forEach(
      docSnap => {

        const d =
          docSnap.data();


        items.push({

          name:
            d.name ||
            "Anonymous",

          message:
            d.message ||
            "",

          createdAt:
            d.createdAt &&
            d.createdAt.toDate

              ? d.createdAt.toDate()

              : null

        });

      }
    );


    items.sort(
      (a,b) =>

        (
          b.createdAt
            ? b.createdAt.getTime()
            : 0
        )

        -

        (
          a.createdAt
            ? a.createdAt.getTime()
            : 0
        )

    );


    if (
      items.length === 0
    ) {

      listEl.innerHTML = `

        <p class="cc-empty">
          अभी तक कोई स्वीकृत टिप्पणी नहीं है।
          सबसे पहले टिप्पणी करें!
        </p>

      `;

      return;

    }


    listEl.innerHTML =

      items.map(
        c => `

          <div class="cc-item">

            <strong>
              ${escapeHtml(
                c.name
              )}
            </strong>

            <span class="cc-meta">
              ${escapeHtml(
                timeAgo(
                  c.createdAt
                )
              )}
            </span>

            <p>
              ${escapeHtml(
                c.message
              )}
            </p>

          </div>

        `
      ).join("");


  } catch(err){

    console.error(
      "Comments load error:",
      err
    );


    listEl.innerHTML = `

      <p class="cc-empty">
        टिप्पणियाँ लोड नहीं हो सकीं।
        बाद में पुनः प्रयास करें।
      </p>

    `;

  }

}


/* ============================================================
   COMMENT FORM
============================================================ */

function bindForm(
  container,
  page
) {

  const form =
    container.querySelector(
      "#cc-form"
    );


  const statusEl =
    container.querySelector(
      "#cc-status"
    );


  const submitBtn =
    container.querySelector(
      "#cc-submit"
    );


  form.addEventListener(
    "submit",
    async e => {

      e.preventDefault();


      const honeypot =
        container
          .querySelector(
            "#cc-website"
          )
          .value;


      if(honeypot){

        return;

      }


      const name =
        container
          .querySelector(
            "#cc-name"
          )
          .value
          .trim()
          .slice(0,80);


      const email =
        container
          .querySelector(
            "#cc-email"
          )
          .value
          .trim()
          .slice(0,150);


      const category =
        container
          .querySelector(
            "#cc-category"
          )
          .value;


      const message =
        container
          .querySelector(
            "#cc-message"
          )
          .value
          .trim()
          .slice(0,2000);


      if(!category){

        showStatus(
          statusEl,
          "कृपया Category चुनें।",
          false
        );

        return;

      }


      if(!message){

        showStatus(
          statusEl,
          "कृपया टिप्पणी लिखें।",
          false
        );

        return;

      }


      submitBtn.disabled =
        true;


      submitBtn.textContent =
        "भेजा जा रहा है...";


      try{

        await addDoc(

          collection(
            db,
            "comments"
          ),

          {

            name:
              name ||
              "Anonymous",

            email:
              email ||
              "",

            message,

            page,

            type:
              "comment",

            category,

            status:
              "pending",

            createdAt:
              serverTimestamp()

          }

        );


        form.reset();


        showStatus(
          statusEl,
          "✅ आपकी टिप्पणी समीक्षा के लिए भेज दी गई है।",
          true
        );


      } catch(err){

        console.error(
          "Comment submit error:",
          err
        );


        showStatus(
          statusEl,
          "❌ टिप्पणी भेजने में समस्या हुई। पुनः प्रयास करें।",
          false
        );


      } finally{

        submitBtn.disabled =
          false;

        submitBtn.textContent =
          "💬 सबमिट करें";

      }

    }
  );

}


/* ============================================================
   INIT
============================================================ */

function initComments(){

  const container =
    createCommentContainer();


  if(!container){

    return;

  }


  injectStyles();


  const page =
    getPagePath();


  renderShell(
    container
  );


  bindForm(
    container,
    page
  );


  loadApprovedComments(
    container,
    page
  );

}


/* ============================================================
   START
============================================================ */

if(
  document.readyState ===
  "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    initComments
  );

} else {

  initComments();

}

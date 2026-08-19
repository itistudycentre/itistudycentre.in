import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTACT_URL = "/contact.html";

/*
============================================================
ITI STUDY CENTRE
CENTRAL CONTACT / SUGGESTION CLEANUP
============================================================

यह script:
- पुराने page-wise comment sections हटाती है
- पुराने topic request sections हटाती है
- पुराने localStorage comment system हटाती है
- पुराने comment.js / comments.js references हटाती है
- contact.html को नहीं छूती
- admin-comments.html को नहीं छूती
- हर सामान्य HTML page पर केवल Contact Us suggestion link लगाती है

IMPORTANT:
यह script js folder को delete/change नहीं करती।
Firebase वाला central comment system सुरक्षित रहता है।
============================================================
*/


/* =========================================================
   FILES / FOLDERS TO PROTECT
========================================================= */

const EXCLUDED_FILES = new Set([
    "contact.html",
    "admin-comments.html",
    "header.html",
    "footer.html",
    "404.html"
]);

const EXCLUDED_DIRS = new Set([
    ".git",
    ".github",
    "node_modules",
    "images",
    "css",
    "js",
    "assets",
    "pdf",
    "data",
    "templates"
]);


/* =========================================================
   CENTRAL CONTACT LINK
========================================================= */

const CONTACT_SNIPPET = `
<!-- CENTRAL SUGGESTION LINK START -->

<div class="central-contact-suggestion">

    <div class="central-contact-suggestion-content">

        <div class="central-contact-suggestion-icon">💬</div>

        <div>
            <h3>इस पेज के बारे में सुझाव दें</h3>
            <p>
                कोई गलती, Broken Link, सुधार या नया Topic
                सुझाना चाहते हैं?
            </p>
        </div>

    </div>

    <a
        href="${CONTACT_URL}"
        class="central-contact-suggestion-button"
    >
        सुझाव दें →
    </a>

</div>

<style>
.central-contact-suggestion {
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:18px;
    margin:30px auto;
    padding:18px 22px;
    max-width:1100px;
    background:#fff;
    border:1px solid #e3e8ef;
    border-left:5px solid #003366;
    border-radius:12px;
    box-shadow:0 2px 12px rgba(0,0,0,.05);
}

.central-contact-suggestion-content {
    display:flex;
    align-items:center;
    gap:14px;
}

.central-contact-suggestion-icon {
    font-size:30px;
}

.central-contact-suggestion h3 {
    margin:0 0 4px;
    color:#003366;
    font-size:1.15rem;
}

.central-contact-suggestion p {
    margin:0;
    color:#666;
    font-size:.92rem;
}

.central-contact-suggestion-button {
    display:inline-block;
    padding:10px 20px;
    background:#003366;
    color:#fff !important;
    text-decoration:none;
    border-radius:7px;
    font-weight:600;
    white-space:nowrap;
}

.central-contact-suggestion-button:hover {
    background:#002244;
}

@media(max-width:600px) {
    .central-contact-suggestion {
        flex-direction:column;
        align-items:stretch;
        text-align:center;
    }

    .central-contact-suggestion-content {
        justify-content:center;
    }

    .central-contact-suggestion-button {
        text-align:center;
    }
}
</style>

<!-- CENTRAL SUGGESTION LINK END -->
`;


/* =========================================================
   BACKUP
========================================================= */

function createBackup(filePath) {

    const backupPath = filePath + ".comment-backup";

    if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
    }
}


/* =========================================================
   REMOVE CENTRAL LINK IF ALREADY EXISTS
========================================================= */

function removeCentralSuggestion(content) {

    const start =
        "<!-- CENTRAL SUGGESTION LINK START -->";

    const end =
        "<!-- CENTRAL SUGGESTION LINK END -->";

    let result = content;

    while (true) {

        const startIndex = result.indexOf(start);

        if (startIndex === -1) {
            break;
        }

        const endIndex = result.indexOf(
            end,
            startIndex
        );

        if (endIndex === -1) {
            break;
        }

        result =
            result.slice(0, startIndex) +
            result.slice(
                endIndex + end.length
            );
    }

    return result;
}


/* =========================================================
   REMOVE OLD SCRIPT REFERENCES
========================================================= */

function removeOldScriptReferences(content) {

    let result = content;

    const patterns = [

        /<script[^>]*src=["'][^"']*comment\.js[^"']*["'][^>]*><\/script>/gi,

        /<script[^>]*src=["'][^"']*comments\.js[^"']*["'][^>]*><\/script>/gi,

        /<script[^>]*src=["'][^"']*fix-comments\.js[^"']*["'][^>]*><\/script>/gi

    ];

    for (const pattern of patterns) {
        result = result.replace(pattern, "");
    }

    return result;
}


/* =========================================================
   REMOVE OLD LOCALSTORAGE COMMENT JAVASCRIPT
========================================================= */

function removeOldCommentJavaScript(content) {

    let result = content;

    /*
       पुराने Module-style localStorage variables
    */

    result = result.replace(
        /const\s+ADMIN_PASSWORD\s*=\s*['"][\s\S]*?['"]\s*;/gi,
        ""
    );

    result = result.replace(
        /const\s+STORAGE_KEY\s*=\s*['"][\s\S]*?['"]\s*;/gi,
        ""
    );

    /*
       पुराने inline comment functions
    */

    const functions = [
        "postComment",
        "checkAdminPassword",
        "renderAdminComments",
        "approveComment",
        "rejectComment",
        "deleteComment",
        "toggleAdminPanel"
    ];

    for (const name of functions) {

        const pattern = new RegExp(
            `function\\s+${name}\\s*\\([^)]*\\)\\s*\\{[\\s\\S]*?\\n\\}`,
            "gi"
        );

        result = result.replace(pattern, "");
    }

    return result;
}


/* =========================================================
   REMOVE OLD COMMENT / TOPIC HTML
========================================================= */

function removeOldCommentHTML(content) {

    let result = content;

    /*
    ---------------------------------------------------------
    1. पुराने explicit comment section markers
    ---------------------------------------------------------
    */

    result = result.replace(
        /<!--\s*=+\s*COMMENTS[\s\S]*?(?=<!--\s*=+|<\/body>)/gi,
        ""
    );

    /*
    ---------------------------------------------------------
    2. पुराने explicit topic request markers
    ---------------------------------------------------------
    */

    result = result.replace(
        /<!--\s*=+\s*TOPIC REQUEST[\s\S]*?(?=<!--\s*=+|<\/body>)/gi,
        ""
    );

    /*
    ---------------------------------------------------------
    3. comment-section-wrapper
    ---------------------------------------------------------
    */

    result = removeDivBlockByClass(
        result,
        "comment-section-wrapper"
    );

    /*
    ---------------------------------------------------------
    4. old admin panel
    ---------------------------------------------------------
    */

    result = removeDivBlockByClass(
        result,
        "admin-toggle"
    );

    result = removeDivBlockById(
        result,
        "adminPanel"
    );

    /*
    ---------------------------------------------------------
    5. topic-request
    ---------------------------------------------------------
    */

    result = removeDivBlockByClass(
        result,
        "topic-request"
    );

    /*
    ---------------------------------------------------------
    6. पुराने IDs
    ---------------------------------------------------------
    */

    const oldIds = [
        "comment-section",
        "comments-section",
        "commentForm",
        "comment-list",
        "approvedComments",
        "adminPanel",
        "topicRequest",
        "topic-request"
    ];

    for (const id of oldIds) {

        result = removeElementById(
            result,
            id
        );
    }

    return result;
}


/* =========================================================
   GENERIC DIV BLOCK REMOVER
   ========================================================= */

function removeDivBlockByClass(content, className) {

    const regex = new RegExp(
        `<div\\b[^>]*class=["'][^"']*\\b${escapeRegex(className)}\\b[^"']*["'][^>]*>`,
        "gi"
    );

    let result = content;
    let match;

    while ((match = regex.exec(result)) !== null) {

        const start = match.index;

        const end =
            findMatchingDiv(
                result,
                start
            );

        if (end === -1) {
            break;
        }

        result =
            result.slice(0, start) +
            result.slice(end);
        
        regex.lastIndex = start;
    }

    return result;
}


/* =========================================================
   REMOVE DIV BY ID
========================================================= */

function removeDivBlockById(content, id) {

    const regex = new RegExp(
        `<div\\b[^>]*id=["']${escapeRegex(id)}["'][^>]*>`,
        "gi"
    );

    let result = content;
    let match;

    while ((match = regex.exec(result)) !== null) {

        const start = match.index;

        const end =
            findMatchingDiv(
                result,
                start
            );

        if (end === -1) {
            break;
        }

        result =
            result.slice(0, start) +
            result.slice(end);

        regex.lastIndex = start;
    }

    return result;
}


/* =========================================================
   REMOVE ANY ELEMENT BY ID
========================================================= */

function removeElementById(content, id) {

    const regex = new RegExp(
        `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*id=["']${escapeRegex(id)}["'][^>]*>`,
        "gi"
    );

    let result = content;
    let match;

    while ((match = regex.exec(result)) !== null) {

        const tag = match[1];
        const start = match.index;

        const end =
            findMatchingElement(
                result,
                start,
                tag
            );

        if (end === -1) {
            break;
        }

        result =
            result.slice(0, start) +
            result.slice(end);

        regex.lastIndex = start;
    }

    return result;
}


/* =========================================================
   MATCHING DIV
========================================================= */

function findMatchingDiv(content, startIndex) {

    return findMatchingElement(
        content,
        startIndex,
        "div"
    );
}


/* =========================================================
   MATCHING HTML ELEMENT
========================================================= */

function findMatchingElement(
    content,
    startIndex,
    tagName
) {

    const tokenRegex =
        new RegExp(
            `<\\/?${tagName}\\b[^>]*>`,
            "gi"
        );

    tokenRegex.lastIndex =
        startIndex;

    let depth = 0;
    let match;

    while ((match = tokenRegex.exec(content)) !== null) {

        const token =
            match[0];

        if (
            token.startsWith("</")
        ) {

            depth--;

            if (depth === 0) {

                return (
                    match.index +
                    token.length
                );
            }

        }
        else if (
            !token.endsWith("/>")
        ) {

            depth++;
        }
    }

    return -1;
}


/* =========================================================
   ESCAPE REGEX
========================================================= */

function escapeRegex(value) {

    return value.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}


/* =========================================================
   INSERT CENTRAL CONTACT LINK
========================================================= */

function insertContactLink(content) {

    /*
       पहले पुराने central block हटाएँ
    */

    let result =
        removeCentralSuggestion(
            content
        );

    /*
       Footer से पहले
    */

    const footerIndex =
        result.search(
            /<footer\b/i
        );

    if (footerIndex !== -1) {

        return (
            result.slice(
                0,
                footerIndex
            ) +

            CONTACT_SNIPPET +

            "\n" +

            result.slice(
                footerIndex
            )
        );
    }

    /*
       Footer नहीं है तो </body> से पहले
    */

    const bodyIndex =
        result.lastIndexOf(
            "</body>"
        );

    if (bodyIndex !== -1) {

        return (
            result.slice(
                0,
                bodyIndex
            ) +

            CONTACT_SNIPPET +

            "\n" +

            result.slice(
                bodyIndex
            )
        );
    }

    return result + CONTACT_SNIPPET;
}


/* =========================================================
   FIX ONE HTML PAGE
========================================================= */

function fixPage(filePath) {

    try {

        let content =
            fs.readFileSync(
                filePath,
                "utf8"
            );

        const original =
            content;

        /*
           Backup
        */

        createBackup(
            filePath
        );

        /*
           Remove old comment HTML
        */

        content =
            removeOldCommentHTML(
                content
            );

        /*
           Remove old scripts
        */

        content =
            removeOldScriptReferences(
                content
            );

        /*
           Remove old inline comment JS
        */

        content =
            removeOldCommentJavaScript(
                content
            );

        /*
           Add central Contact link
        */

        content =
            insertContactLink(
                content
            );

        /*
           Save
        */

        if (
            content !== original
        ) {

            fs.writeFileSync(
                filePath,
                content,
                "utf8"
            );

            return true;
        }

        return false;

    }
    catch (error) {

        console.error(
            `❌ Error in ${filePath}:`,
            error.message
        );

        return false;
    }
}


/* =========================================================
   FIND ALL HTML FILES
========================================================= */

function getAllHtmlFiles(dir) {

    const files = [];

    const items =
        fs.readdirSync(
            dir,
            {
                withFileTypes: true
            }
        );

    for (const item of items) {

        const fullPath =
            path.join(
                dir,
                item.name
            );

        if (
            item.isDirectory()
        ) {

            if (
                !EXCLUDED_DIRS.has(
                    item.name
                )
            ) {

                files.push(
                    ...getAllHtmlFiles(
                        fullPath
                    )
                );
            }

            continue;
        }

        if (
            item.name
                .toLowerCase()
                .endsWith(".html")
        ) {

            if (
                !EXCLUDED_FILES.has(
                    item.name
                )
            ) {

                files.push(
                    fullPath
                );
            }
        }
    }

    return files;
}


/* =========================================================
   MAIN
========================================================= */

function main() {

    console.log(
        "=============================================="
    );

    console.log(
        "ITI STUDY CENTRE"
    );

    console.log(
        "CENTRAL CONTACT SYSTEM CLEANUP"
    );

    console.log(
        "=============================================="
    );

    const htmlFiles =
        getAllHtmlFiles(
            __dirname
        );

    console.log(
        `HTML files found: ${htmlFiles.length}`
    );

    let changed = 0;

    for (
        const filePath
        of htmlFiles
    ) {

        const relative =
            path.relative(
                __dirname,
                filePath
            );

        process.stdout.write(
            `Processing: ${relative} ... `
        );

        if (
            fixPage(
                filePath
            )
        ) {

            console.log(
                "✅ Fixed"
            );

            changed++;

        }
        else {

            console.log(
                "⏭️ No change"
            );
        }
    }

    console.log("");

    console.log(
        `🎉 ${changed} HTML files updated.`
    );

    console.log(
        "Contact Us central suggestion system ready."
    );
}

main();

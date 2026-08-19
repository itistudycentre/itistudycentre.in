// ================================================================
// fix-comments.js
// ITI Study Centre - Central Suggestion System Cleanup
//
// IMPORTANT:
// - पुराने page-wise comment sections हटाता है
// - पुराने topic-request sections हटाता है
// - पुराने Admin Panel हटाता है
// - पुराने localStorage comment JavaScript को हटाता है
// - पुराने comment.js / comments.js script references हटाता है
// - पहले से मौजूद "सुझाव दें" section को नहीं छेड़ता
// - कोई नया suggestion box नहीं बनाता
// - contact.html को नहीं छेड़ता
// - js/ folder को नहीं छेड़ता
// - Firebase वाले central comment.js को सुरक्षित रखता
// ================================================================

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// ================================================================
// PROTECTED FILES
// ================================================================

const EXCLUDED_FILES = new Set([
    "contact.html",
    "admin-comments.html",
    "404.html"
]);


// ================================================================
// PROTECTED DIRECTORIES
// ================================================================

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


// ================================================================
// FIND ALL HTML FILES
// ================================================================

function getAllHtmlFiles(dir) {

    const result = [];

    const entries = fs.readdirSync(
        dir,
        { withFileTypes: true }
    );

    for (const entry of entries) {

        const fullPath = path.join(
            dir,
            entry.name
        );

        if (entry.isDirectory()) {

            if (!EXCLUDED_DIRS.has(entry.name)) {

                result.push(
                    ...getAllHtmlFiles(fullPath)
                );
            }

            continue;
        }

        if (
            entry.name.toLowerCase().endsWith(".html") &&
            !EXCLUDED_FILES.has(entry.name)
        ) {
            result.push(fullPath);
        }
    }

    return result;
}


// ================================================================
// ESCAPE REGEX
// ================================================================

function escapeRegex(value) {

    return value.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}


// ================================================================
// FIND MATCHING HTML ELEMENT
//
// यह nested divs को ध्यान में रखता है।
// ================================================================

function findMatchingElement(
    html,
    startIndex,
    tagName
) {

    const tagRegex = new RegExp(
        `<\\/?${tagName}\\b[^>]*>`,
        "gi"
    );

    tagRegex.lastIndex = startIndex;

    let depth = 0;
    let match;

    while ((match = tagRegex.exec(html)) !== null) {

        const token = match[0];

        // Closing tag
        if (token.startsWith("</")) {

            depth--;

            if (depth === 0) {

                return (
                    match.index +
                    token.length
                );
            }

        }

        // Opening tag
        else if (!token.endsWith("/>")) {

            depth++;
        }
    }

    return -1;
}


// ================================================================
// REMOVE DIV BY CLASS
// ================================================================

function removeDivByClass(
    html,
    className
) {

    const openingRegex = new RegExp(
        `<div\\b[^>]*class=["'][^"']*\\b${escapeRegex(className)}\\b[^"']*["'][^>]*>`,
        "gi"
    );

    let result = html;
    let match;

    while (
        (match = openingRegex.exec(result)) !== null
    ) {

        const start = match.index;

        const end = findMatchingElement(
            result,
            start,
            "div"
        );

        if (end === -1) {
            break;
        }

        result =
            result.slice(0, start) +
            result.slice(end);

        openingRegex.lastIndex = start;
    }

    return result;
}


// ================================================================
// REMOVE DIV BY ID
// ================================================================

function removeDivById(
    html,
    id
) {

    const openingRegex = new RegExp(
        `<div\\b[^>]*id=["']${escapeRegex(id)}["'][^>]*>`,
        "gi"
    );

    let result = html;
    let match;

    while (
        (match = openingRegex.exec(result)) !== null
    ) {

        const start = match.index;

        const end = findMatchingElement(
            result,
            start,
            "div"
        );

        if (end === -1) {
            break;
        }

        result =
            result.slice(0, start) +
            result.slice(end);

        openingRegex.lastIndex = start;
    }

    return result;
}


// ================================================================
// REMOVE ELEMENT BY ID
// ================================================================

function removeElementById(
    html,
    id
) {

    const openingRegex = new RegExp(
        `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*id=["']${escapeRegex(id)}["'][^>]*>`,
        "gi"
    );

    let result = html;
    let match;

    while (
        (match = openingRegex.exec(result)) !== null
    ) {

        const tagName = match[1];
        const start = match.index;

        const end = findMatchingElement(
            result,
            start,
            tagName
        );

        if (end === -1) {
            break;
        }

        result =
            result.slice(0, start) +
            result.slice(end);

        openingRegex.lastIndex = start;
    }

    return result;
}


// ================================================================
// REMOVE OLD COMMENT/TOPIC CONTENT-SECTION
//
// आपके पुराने Module 8 जैसे pages में:
// data-content="comments"
// data-content="topicrequest"
// आदि थे।
// ================================================================

function removeContentSectionByDataContent(
    html,
    value
) {

    const openingRegex = new RegExp(
        `<div\\b[^>]*data-content=["']${escapeRegex(value)}["'][^>]*>`,
        "gi"
    );

    let result = html;
    let match;

    while (
        (match = openingRegex.exec(result)) !== null
    ) {

        const start = match.index;

        const end = findMatchingElement(
            result,
            start,
            "div"
        );

        if (end === -1) {
            break;
        }

        result =
            result.slice(0, start) +
            result.slice(end);

        openingRegex.lastIndex = start;
    }

    return result;
}


// ================================================================
// REMOVE OLD ADMIN PANEL
// ================================================================

function removeOldAdminPanel(html) {

    let result = html;

    // Old admin toggle
    result = removeDivByClass(
        result,
        "admin-toggle"
    );

    // Old admin panel
    result = removeDivById(
        result,
        "adminPanel"
    );

    // Other possible admin wrappers
    result = removeDivByClass(
        result,
        "admin-panel"
    );

    return result;
}


// ================================================================
// REMOVE OLD COMMENT HTML
// ================================================================

function removeOldCommentHTML(html) {

    let result = html;

    // Old module-style comment section
    result = removeContentSectionByDataContent(
        result,
        "comments"
    );

    // Old topic request section
    result = removeContentSectionByDataContent(
        result,
        "topicrequest"
    );

    // Old comment wrapper
    result = removeDivByClass(
        result,
        "comment-section-wrapper"
    );

    // Old comments section
    result = removeDivByClass(
        result,
        "comments-section"
    );

    // Old topic request wrapper
    result = removeDivByClass(
        result,
        "topic-request"
    );

    // Old topic request alternative
    result = removeDivByClass(
        result,
        "topicrequest"
    );

    // Old IDs
    const oldIds = [
        "comment-section",
        "comments-section",
        "commentForm",
        "comment-list",
        "approvedComments",
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


// ================================================================
// REMOVE OLD COMMENT SCRIPT REFERENCES
// ================================================================

function removeOldScriptReferences(html) {

    let result = html;

    const patterns = [

        /<script[^>]*src=["'][^"']*comment\.js[^"']*["'][^>]*><\/script>/gi,

        /<script[^>]*src=["'][^"']*comments\.js[^"']*["'][^>]*><\/script>/gi,

        /<script[^>]*src=["'][^"']*fix-comments\.js[^"']*["'][^>]*><\/script>/gi

    ];

    for (const pattern of patterns) {

        result = result.replace(
            pattern,
            ""
        );
    }

    return result;
}


// ================================================================
// REMOVE OLD LOCALSTORAGE COMMENT SYSTEM
// ================================================================

function removeOldCommentJavaScript(html) {

    let result = html;

    // Old localStorage constants
    result = result.replace(
        /const\s+ADMIN_PASSWORD\s*=\s*['"][\s\S]*?['"]\s*;/gi,
        ""
    );

    result = result.replace(
        /const\s+STORAGE_KEY\s*=\s*['"][\s\S]*?['"]\s*;/gi,
        ""
    );

    return result;
}


// ================================================================
// REMOVE OLD CENTRAL SUGGESTION BOX
//
// यह इसलिए है ताकि पिछली run से बना duplicate box भी हट जाए।
// ================================================================

function removeOldCentralSuggestionBox(html) {

    const startMarker =
        "<!-- CENTRAL SUGGESTION LINK START -->";

    const endMarker =
        "<!-- CENTRAL SUGGESTION LINK END -->";

    let result = html;

    while (true) {

        const start =
            result.indexOf(startMarker);

        if (start === -1) {
            break;
        }

        const end =
            result.indexOf(
                endMarker,
                start
            );

        if (end === -1) {
            break;
        }

        result =
            result.slice(
                0,
                start
            ) +
            result.slice(
                end + endMarker.length
            );
    }

    return result;
}


// ================================================================
// PROCESS ONE HTML FILE
// ================================================================

function processHtmlFile(filePath) {

    try {

        const original =
            fs.readFileSync(
                filePath,
                "utf8"
            );

        let html = original;

        // पिछली run का नया duplicate box हटाएँ
        html =
            removeOldCentralSuggestionBox(
                html
            );

        // पुराने page-wise comments हटाएँ
        html =
            removeOldCommentHTML(
                html
            );

        // पुराने Admin Panel हटाएँ
        html =
            removeOldAdminPanel(
                html
            );

        // पुराने inline comment JS हटाएँ
        html =
            removeOldCommentJavaScript(
                html
            );

        /*
         * IMPORTANT:
         *
         * यहाँ हम कोई नया suggestion box नहीं जोड़ रहे हैं।
         *
         * पहले से मौजूद:
         * "सुझाव दें"
         * section 그대로 रहेगा।
         */

        if (html !== original) {

            fs.writeFileSync(
                filePath,
                html,
                "utf8"
            );

            return true;
        }

        return false;

    }
    catch (error) {

        console.error(
            `❌ Error processing ${filePath}`
        );

        console.error(
            error.message
        );

        return false;
    }
}


// ================================================================
// MAIN
// ================================================================

function main() {

    console.log("");
    console.log(
        "================================================"
    );
    console.log(
        "ITI STUDY CENTRE"
    );
    console.log(
        "CENTRAL SUGGESTION CLEANUP"
    );
    console.log(
        "================================================"
    );
    console.log("");

    console.log(
        "🔒 contact.html protected"
    );

    console.log(
        "🔒 js/ folder protected"
    );

    console.log(
        "🔒 Firebase comment.js protected"
    );

    console.log(
        "🔒 Existing suggestion sections will remain"
    );

    console.log(
        "🚫 No new suggestion box will be created"
    );

    console.log("");

    const files =
        getAllHtmlFiles(
            __dirname
        );

    console.log(
        `📄 HTML files found: ${files.length}`
    );

    let changed = 0;

    for (const file of files) {

        const relative =
            path.relative(
                __dirname,
                file
            );

        process.stdout.write(
            `Processing: ${relative} ... `
        );

        if (
            processHtmlFile(file)
        ) {

            console.log(
                "✅ cleaned"
            );

            changed++;

        }
        else {

            console.log(
                "⏭️ unchanged"
            );
        }
    }

    console.log("");

    console.log(
        `🎉 ${changed} HTML files changed.`
    );

    console.log(
        "✅ Existing Contact/Suggestion sections preserved."
    );

    console.log(
        "🚫 No duplicate suggestion box added."
    );

    console.log(
        "================================================"
    );
}


main();

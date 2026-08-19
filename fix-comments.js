import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
============================================================
ITI STUDY CENTRE
CENTRAL CONTACT / SUGGESTION SYSTEM CLEANUP
============================================================

यह script:

1. सभी HTML pages को scan करेगी।
2. पुराने Comment System हटाएगी।
3. पुराने Topic Request हटाएगी।
4. पुराने page-wise Admin Panel हटाएगी।
5. पुराने /js/comments.js references हटाएगी।
6. उसकी जगह केवल Contact Us का link लगाएगी।
7. contact.html को बिल्कुल नहीं छेड़ेगी।
8. admin-comments.html को बिल्कुल नहीं छेड़ेगी।

FINAL FLOW:

Any Page
   ↓
"सुझाव दें"
   ↓
/contact.html
   ↓
Firebase comments collection
   ↓
status = pending
   ↓
/admin-comments.html
   ↓
Approve / Reject / Delete
============================================================
*/


/* =========================================================
   SETTINGS
========================================================= */

const CONTACT_URL = "/contact.html";


/*
   जिन files को बिल्कुल नहीं छूना है
*/
const EXCLUDED_FILES = new Set([
    "contact.html",
    "admin-comments.html",
    "header.html",
    "footer.html",
    "404.html"
]);


/*
   जिन folders को scan नहीं करना है
*/
const EXCLUDED_DIRS = new Set([
    ".git",
    "node_modules",
    "assets",
    "images",
    "css",
    "js",
    "pdf",
    "data",
    "templates"
]);


/* =========================================================
   NEW CONTACT LINK
========================================================= */

const CONTACT_SNIPPET = `
<!-- =========================================================
     CENTRAL SUGGESTION LINK
     सभी सुझाव Contact Us page पर भेजे जाते हैं।
     ========================================================= -->

<div class="central-contact-suggestion">

    <div class="central-contact-suggestion-content">

        <div class="central-contact-suggestion-icon">
            💬
        </div>

        <div>
            <h3>इस पेज के बारे में सुझाव दें</h3>

            <p>
                कोई गलती, Broken Link, सुधार या नया Topic
                सुझाना चाहते हैं?
            </p>
        </div>

    </div>

    <a href="${CONTACT_URL}" class="central-contact-suggestion-button">
        सुझाव दें →
    </a>

</div>

<style>
.central-contact-suggestion {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 18px;

    margin: 30px auto;

    padding: 18px 22px;

    max-width: 1100px;

    background: #ffffff;

    border: 1px solid #e3e8ef;

    border-left: 5px solid #003366;

    border-radius: 12px;

    box-shadow: 0 2px 12px rgba(0,0,0,.05);

}

.central-contact-suggestion-content {

    display: flex;

    align-items: center;

    gap: 14px;

}

.central-contact-suggestion-icon {

    font-size: 30px;

}

.central-contact-suggestion h3 {

    margin: 0 0 4px 0;

    color: #003366;

    font-size: 1.15rem;

}

.central-contact-suggestion p {

    margin: 0;

    color: #666;

    font-size: .92rem;

}

.central-contact-suggestion-button {

    display: inline-block;

    padding: 10px 20px;

    background: #003366;

    color: #ffffff !important;

    text-decoration: none;

    border-radius: 7px;

    font-weight: 600;

    white-space: nowrap;

    transition: .2s;

}

.central-contact-suggestion-button:hover {

    background: #002244;

    transform: scale(1.02);

}

@media (max-width: 600px) {

    .central-contact-suggestion {

        flex-direction: column;

        align-items: stretch;

        text-align: center;

    }

    .central-contact-suggestion-content {

        justify-content: center;

    }

    .central-contact-suggestion-button {

        text-align: center;

    }

}
</style>
`;


/* =========================================================
   BACKUP
========================================================= */

function createBackup(filePath) {

    const backupPath =
        filePath + ".comment-backup";

    if (!fs.existsSync(backupPath)) {

        fs.copyFileSync(
            filePath,
            backupPath
        );

    }

}


/* =========================================================
   REMOVE OLD COMMENT BLOCKS
========================================================= */

function removeOldCommentBlocks(content) {

    let result = content;


    /*
    ---------------------------------------------------------
    Pattern 1:
    पुराने "COMMENTS" sections
    ---------------------------------------------------------
    */

    result = result.replace(

        /<!--\s*={3,}\s*COMMENTS[\s\S]*?<!--\s*={3,}[\s\S]*?COMMENTS[\s\S]*?-->/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    Pattern 2:
    COMMENTS heading से अगले major container तक
    ---------------------------------------------------------
    */

    result = result.replace(

        /<!--\s*={3,}\s*COMMENTS[\s\S]*?(?=<!--\s*={3,})/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    Pattern 3:
    Comment section headings
    ---------------------------------------------------------
    */

    result = result.replace(

        /<div[^>]*class=["'][^"']*content-section[^"']*["'][^>]*>[\s\S]*?(?:टिप्पणियाँ|टिप्पणी|Comments)[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    Pattern 4:
    पुराने comment-section-wrapper
    ---------------------------------------------------------
    */

    result = result.replace(

        /<div[^>]*class=["'][^"']*comment-section-wrapper[^"']*["'][\s\S]*?<\/div>\s*<\/div>/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    Pattern 5:
    Topic Request blocks
    ---------------------------------------------------------
    */

    result = result.replace(

        /<div[^>]*class=["'][^"']*content-section[^"']*["'][^>]*>[\s\S]*?(?:विषय अनुरोध|Topic Request)[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    Pattern 6:
    Topic request generic containers
    ---------------------------------------------------------
    */

    result = result.replace(

        /<div[^>]*class=["'][^"']*topic-request[^"']*["'][\s\S]*?<\/div>/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    Pattern 7:
    Old admin panels
    ---------------------------------------------------------
    */

    result = result.replace(

        /<div[^>]*class=["'][^"']*admin-toggle[^"']*["'][\s\S]*?<\/div>/gi,

        ""

    );


    result = result.replace(

        /<div[^>]*class=["'][^"']*admin-panel[^"']*["'][\s\S]*?<\/div>/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    Pattern 8:
    Old comments JavaScript functions
    ---------------------------------------------------------
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
    ---------------------------------------------------------
    पुराने comments.js script references
    ---------------------------------------------------------
    */

    result = result.replace(

        /<script[^>]*src=["']\/js\/comments\.js["'][^>]*><\/script>/gi,

        ""

    );


    result = result.replace(

        /<script[^>]*src=["'][^"']*comments\.js["'][^>]*><\/script>/gi,

        ""

    );


    /*
    ---------------------------------------------------------
    पुराने fix comment system references
    ---------------------------------------------------------
    */

    result = result.replace(

        /<script[^>]*src=["'][^"']*fix-comments\.js["'][^>]*><\/script>/gi,

        ""

    );


    return result;

}


/* =========================================================
   REMOVE DUPLICATE CENTRAL LINKS
========================================================= */

function removeExistingCentralLinks(content) {

    return content.replace(

        /<!--\s*={3,}\s*CENTRAL SUGGESTION LINK[\s\S]*?<\/style>\s*/gi,

        ""

    );

}


/* =========================================================
   INSERT NEW CONTACT LINK
========================================================= */

function insertContactLink(content) {

    /*
       Footer से ठीक पहले डालेंगे।
    */

    const footerIndex =
        content.search(/<footer\b/i);


    if (footerIndex !== -1) {

        return (

            content.slice(0, footerIndex) +

            CONTACT_SNIPPET +

            "\n" +

            content.slice(footerIndex)

        );

    }


    /*
       Footer न मिले तो body end से पहले
    */

    const bodyEnd =
        content.lastIndexOf("</body>");


    if (bodyEnd !== -1) {

        return (

            content.slice(0, bodyEnd) +

            CONTACT_SNIPPET +

            "\n" +

            content.slice(bodyEnd)

        );

    }


    return content + CONTACT_SNIPPET;

}


/* =========================================================
   FIX ONE HTML FILE
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

        createBackup(filePath);


        /*
        Remove old systems
        */

        content =
            removeOldCommentBlocks(
                content
            );


        /*
        Remove duplicate central system
        */

        content =
            removeExistingCentralLinks(
                content
            );


        /*
        Add new single Contact Us link
        */

        content =
            insertContactLink(
                content
            );


        /*
        Save only if changed
        */

        if (content !== original) {

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
            "\n❌ Error:",
            filePath,
            "\n",
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


        /*
        Directory
        */

        if (item.isDirectory()) {

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


        /*
        HTML file
        */

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

    console.log("");
    console.log(
        "================================================="
    );

    console.log(
        " ITI STUDY CENTRE"
    );

    console.log(
        " CENTRAL CONTACT SYSTEM CLEANUP"
    );

    console.log(
        "================================================="
    );

    console.log("");


    const htmlFiles =
        getAllHtmlFiles(
            __dirname
        );


    console.log(
        `📄 कुल HTML files: ${htmlFiles.length}`
    );

    console.log("");


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
            `⏳ ${relative} ... `
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
        "================================================="
    );

    console.log(
        `🎉 ${changed} HTML files updated.`
    );

    console.log(
        "================================================="
    );

    console.log("");

    console.log(
        "✅ सभी पुराने Comment/Topic Request systems हटाए गए।"
    );

    console.log(
        "✅ सभी pages पर Contact Us suggestion link लगाया गया।"
    );

    console.log(
        "✅ contact.html और admin-comments.html को नहीं छुआ गया।"
    );

    console.log(
        "✅ हर modified file की .comment-backup copy बनाई गई।"
    );

    console.log("");

}


main();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ====== HTML स्निपेट (नया कमेंट सिस्टम) ======
const COMMENT_SNIPPET = `
<!-- ====== एकीकृत कमेंट सिस्टम ====== -->
<div class="comment-section-wrapper">
    <h2 class="comment-title">💬 टिप्पणियाँ</h2>
    <p class="comment-note"><em>सभी टिप्पणियाँ प्रकाशित होने से पहले एडमिन द्वारा समीक्षा की जाती हैं।</em></p>
    <div class="comment-form-wrapper">
        <form id="commentForm" method="POST">
            <textarea name="comment" id="commentInput" rows="4" placeholder="अपनी टिप्पणी यहाँ लिखें..." required></textarea>
            <input type="text" name="name" id="nameInput" placeholder="आपका नाम (वैकल्पिक)">
            <input type="email" name="email" id="emailInput" placeholder="आपका Email (वैकल्पिक)">
            <input type="hidden" name="page" id="pageInput" value="">
            <input type="hidden" name="type" value="comment">
            <button type="submit" class="btn-submit-comment">📨 टिप्पणी पोस्ट करें</button>
        </form>
        <div id="formMessage" style="display:none;"></div>
    </div>
    <div class="approved-comments" id="approvedComments">
        <p class="no-comments">अभी तक कोई स्वीकृत टिप्पणी नहीं है। सबसे पहले टिप्पणी करें।</p>
    </div>
</div>
<style>
.comment-section-wrapper {
    max-width: 800px; margin: 40px auto; padding: 20px 25px;
    background: #ffffff; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1px solid #e6eaef;
}
.comment-title { color: #003366; border-bottom: 3px solid #ffcc00; padding-bottom: 10px; margin-top: 0; font-size: 1.5rem; }
.comment-note { color: #888; font-size: 14px; margin-bottom: 20px; }
.comment-form-wrapper { background: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e6eaef; margin-bottom: 25px; }
.comment-form-wrapper textarea { width: 100%; padding: 12px 15px; border: 1px solid #ddd; border-radius: 6px; font-size: 15px; font-family: inherit; resize: vertical; box-sizing: border-box; }
.comment-form-wrapper textarea:focus { border-color: #003366; outline: none; box-shadow: 0 0 8px rgba(0,51,102,0.15); }
.comment-form-wrapper input[type="text"], .comment-form-wrapper input[type="email"] { width: 100%; padding: 10px 15px; margin-top: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; box-sizing: border-box; }
.comment-form-wrapper input:focus { border-color: #003366; outline: none; }
.btn-submit-comment { background: #003366; color: #fff; border: none; padding: 10px 30px; margin-top: 12px; border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.3s; }
.btn-submit-comment:hover { background: #002244; }
.btn-submit-comment:disabled { opacity: 0.6; cursor: not-allowed; }
#formMessage { margin-top: 12px; padding: 10px 15px; border-radius: 6px; font-weight: 500; }
#formMessage.success { display: block !important; background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
#formMessage.error { display: block !important; background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
.approved-comments { margin-top: 10px; }
.approved-comments .comment-item { background: #f8f9fa; padding: 14px 18px; border-left: 4px solid #003366; margin-bottom: 12px; border-radius: 4px; }
.approved-comments .comment-item .comment-meta { font-size: 13px; color: #888; margin-bottom: 4px; }
.approved-comments .comment-item .comment-text { font-size: 15px; line-height: 1.6; color: #1e2a3a; }
.no-comments { color: #999; font-style: italic; text-align: center; padding: 20px 0; }
</style>
<script src="/js/comment.js" defer></script>
`;

// ====== पैटर्न हटाने के लिए ======
const REMOVE_PATTERNS = [
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>💬\s*सुझाव\s*दें<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>💬\s*Suggestions<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>📝\s*विषय\s*अनुरोध<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
    /<section[^>]*class="[^"]*container[^"]*"[^>]*>\s*<div[^>]*class="[^"]*card[^"]*"[^>]*>\s*<h2[^>]*>📝\s*Topic\s*Request<\/h2>[\s\S]*?<\/div>\s*<\/section>/gi,
];

function fixPage(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        let original = content;

        // पुराने पैटर्न हटाएँ
        for (const pattern of REMOVE_PATTERNS) {
            content = content.replace(pattern, '');
        }

        // अगर नया कमेंट सिस्टम नहीं है तो डालें
        if (!content.includes('comment-section-wrapper')) {
            const footerMatch = content.match(/<footer/i);
            if (footerMatch) {
                const idx = footerMatch.index;
                content = content.slice(0, idx) + COMMENT_SNIPPET + '\n' + content.slice(idx);
            } else {
                const bodyEnd = content.lastIndexOf('</body>');
                if (bodyEnd !== -1) {
                    content = content.slice(0, bodyEnd) + COMMENT_SNIPPET + '\n' + content.slice(bodyEnd);
                } else {
                    content += '\n' + COMMENT_SNIPPET;
                }
            }
        }

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf-8');
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error:', error.message);
        return false;
    }
}

function main() {
    const allFiles = [];
    function walk(dir) {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const full = path.join(dir, item);
            const stat = fs.statSync(full);
            if (stat.isDirectory()) {
                if (!['.git', 'node_modules', 'venv', 'templates', 'assets', 'images', 'css', 'js', 'pdf', 'data'].includes(item)) {
                    walk(full);
                }
            } else if (item.endsWith('.html') && !['header.html', 'footer.html', 'admin-comments.html'].includes(item)) {
                allFiles.push(full);
            }
        }
    }
    walk(__dirname);

    console.log(`📁 कुल ${allFiles.length} HTML फाइलें मिलीं।\n`);
    let fixed = 0;
    for (const f of allFiles) {
        const rel = path.relative(__dirname, f);
        process.stdout.write(`⏳ ${rel} ... `);
        if (fixPage(f)) {
            console.log('✅ ठीक हुआ');
            fixed++;
        } else {
            console.log('⏭️ कोई बदलाव नहीं');
        }
    }
    console.log(`\n🎉 ${fixed}/${allFiles.length} फाइलें ठीक की गईं।`);
}

main();

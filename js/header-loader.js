// js/header-loader.js
(function() {
    // Container बनाएं
    let container = document.getElementById('header-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'header-container';
        document.body.insertBefore(container, document.body.firstChild);
    }

    // Header Load करें
    fetch('/header.html')
        .then(res => {
            if (!res.ok) throw new Error('Header not found');
            return res.text();
        })
        .then(html => {
            container.innerHTML = html;
            // Active Link Highlight करें
            const path = window.location.pathname.replace(/\/$/, '') || '/';
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === path || 
                    (link.dataset.page && path.includes(link.dataset.page))) {
                    link.classList.add('active');
                }
            });
        })
        .catch(err => {
            console.warn('Header load failed:', err);
            container.innerHTML = '<nav class="navbar"><div class="logo">ITI Study Centre</div></nav>';
        });
})();

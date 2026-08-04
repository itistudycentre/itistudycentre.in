// js/header-loader.js
(function() {
    // 1. Container बनाएं
    let headerContainer = document.getElementById('header-container');
    if (!headerContainer) {
        headerContainer = document.createElement('div');
        headerContainer.id = 'header-container';
        document.body.insertBefore(headerContainer, document.body.firstChild);
    }

    // 2. Root से header.html Fetch करें
    fetch('/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header not found');
            return response.text();
        })
        .then(html => {
            headerContainer.innerHTML = html;
            highlightActiveLink();
        })
        .catch(err => {
            console.error('Header load failed:', err);
            headerContainer.innerHTML = '<nav class="navbar"><div class="logo">ITI Study Centre</div></nav>';
        });

    function highlightActiveLink() {
        const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === currentPath) {
                link.classList.add('active');
            } else if (link.dataset.page && currentPath.includes(link.dataset.page)) {
                link.classList.add('active');
            }
        });
    }
})();

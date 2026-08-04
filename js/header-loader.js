// js/header-loader.js
(function () {
    let container = document.getElementById('header-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'header-container';
        document.body.insertBefore(container, document.body.firstChild);
    }

    fetch('/header.html')
        .then(function (res) {
            if (!res.ok) throw new Error('Header not found');
            return res.text();
        })
        .then(function (html) {
            container.innerHTML = html;
            highlightActiveLink();
        })
        .catch(function (err) {
            console.warn('Header load failed:', err);
            container.innerHTML = '<header class="main-header"><div class="container"><div class="logo"><a href="/index.html">ITI Study Centre</a></div></div></header>';
        });

    function highlightActiveLink() {
        var path = window.location.pathname;
        if (path.length > 1) {
            path = path.replace(/\/$/, '');
        }

        var links = container.querySelectorAll('nav a');
        links.forEach(function (link) {
            link.classList.remove('active');
            var raw = link.dataset.match || link.getAttribute('href');
            var candidates = raw.split(',');
            var isActive = candidates.some(function (m) {
                if (m === '/') return path === '' || path === '/';
                return path === m || path.startsWith(m);
            });
            if (isActive) link.classList.add('active');
        });
    }
})();

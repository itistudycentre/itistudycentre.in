// js/header-loader.js

(function () {

    let container =
        document.getElementById('header-container');


    /* ---------------------------------------------------------
       HEADER CONTAINER
    --------------------------------------------------------- */

    if (!container) {

        container =
            document.createElement('div');

        container.id =
            'header-container';

        document.body.insertBefore(
            container,
            document.body.firstChild
        );

    }


    /* ---------------------------------------------------------
       LOAD HEADER
    --------------------------------------------------------- */

    fetch('/header.html')

        .then(function (res) {

            if (!res.ok) {
                throw new Error(
                    'Header not found'
                );
            }

            return res.text();

        })

        .then(function (html) {

            container.innerHTML =
                html;

            highlightActiveLink();

        })

        .catch(function (err) {

            console.warn(
                'Header load failed:',
                err
            );

            container.innerHTML =
                '<header class="main-header">' +
                '<div class="container">' +
                '<div class="logo">' +
                '<a href="/index.html">' +
                'ITI Study Centre' +
                '</a>' +
                '</div>' +
                '</div>' +
                '</header>';

        });


    /* ---------------------------------------------------------
       HIGHLIGHT ACTIVE LINK
    --------------------------------------------------------- */

    function highlightActiveLink() {

        var path =
            window.location.pathname;


        if (path.length > 1) {

            path =
                path.replace(
                    /\/$/,
                    ''
                );

        }


        var links =
            container.querySelectorAll(
                'nav a'
            );


        links.forEach(
            function (link) {

                link.classList.remove(
                    'active'
                );


                var raw =
                    link.dataset.match ||
                    link.getAttribute(
                        'href'
                    );


                if (!raw) {
                    return;
                }


                var candidates =
                    raw.split(',');


                var isActive =
                    candidates.some(
                        function (m) {

                            if (m === '/') {

                                return (
                                    path === '' ||
                                    path === '/'
                                );

                            }


                            return (
                                path === m ||
                                path.startsWith(m)
                            );

                        }
                    );


                if (isActive) {

                    link.classList.add(
                        'active'
                    );

                }

            }
        );

    }


    /* ---------------------------------------------------------
       AUTOMATIC COMMENT SYSTEM
       
       comments.js अब हर page पर अपने-आप load होगा।
       
       Admin page को जानबूझकर exclude किया गया है।
    --------------------------------------------------------- */

    function loadCommentsSystem() {

        var currentPath =
            window.location.pathname;


        /*
          Admin Comments page पर
          public comment box नहीं लगाना है।
        */

        if (
            currentPath ===
            '/admin-comments.html'
        ) {

            return;

        }


        /*
          अगर comments.js पहले से किसी page में
          manually लगा हुआ है, तो दोबारा script
          लगाने की जरूरत नहीं।
        */

        if (
            document.querySelector(
                'script[data-iti-comments]'
            )
        ) {

            return;

        }


        /*
          comments.js dynamically load करें।
        */

        var script =
            document.createElement(
                'script'
            );


        script.type =
            'module';


        script.src =
            '/js/comments.js';


        script.dataset.itiComments =
            'true';


        document.body.appendChild(
            script
        );

    }


    /*
      Header loader defer होने के कारण
      सामान्य pages में DOM उपलब्ध रहेगा।
    */

    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            loadCommentsSystem
        );

    } else {

        loadCommentsSystem();

    }

})();

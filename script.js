document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded');

    const profilePhoto = document.getElementById('profilePhoto');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const topIcons = document.querySelector('.top-icons');
    const bottomNav = document.querySelector('.bottom-nav');
    let lastScrollTop = 0;

    function applyStyles() {
        if (window.innerWidth < 769) {
            // Mobile styles
            sidebar.style.height = '50%';
        } else {
            // Desktop styles
            sidebar.style.height = '100%';
        }
    }

    applyStyles();

    window.addEventListener('resize', applyStyles);

    profilePhoto.addEventListener('click', function() {
        sidebar.style.width = '55%';
        document.body.classList.add('no-scroll'); // Restrict scrolling when sidebar is expanded
    });

    sidebar.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !profilePhoto.contains(event.target)) {
            sidebar.style.width = '0';
            document.body.classList.remove('no-scroll'); // Allow scrolling when sidebar is collapsed
        }
    });

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            topIcons.classList.add('hide');
            bottomNav.classList.add('hide');
        } else {
            // Scroll up
            topIcons.classList.remove('hide');
            bottomNav.classList.remove('hide');
        }
        lastScrollTop = scrollTop;
    });
});

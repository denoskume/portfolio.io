document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded');

    const profilePhoto = document.getElementById('profilePhoto');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const topIcons = document.querySelector('.top-icons');
    const bottomNav = document.querySelector('.bottom-nav');
    let lastScrollTop = 0;

    profilePhoto.addEventListener('click', function() {
        sidebar.style.width = '70%';
    });

    sidebar.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !profilePhoto.contains(event.target)) {
            sidebar.style.width = '0';
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

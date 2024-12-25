document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio page loaded');

    const profilePhoto = document.getElementById('profilePhoto');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');

    profilePhoto.addEventListener('click', function() {
        sidebar.style.width = '70%';
        main.style.marginLeft = '70%';
    });

    window.closeNav = function() {
        sidebar.style.width = '0';
        main.style.marginLeft = '0';
    };
});

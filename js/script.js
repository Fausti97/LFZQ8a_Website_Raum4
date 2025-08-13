document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    // Highlight active navigation link
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('current');
        }
    });
});
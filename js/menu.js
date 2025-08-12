document.addEventListener('DOMContentLoaded', () => {
    const menuNav = document.querySelector('#menu-nav');
    const navButtons = document.querySelectorAll('.menu-nav-button');
    const menuCategories = document.querySelectorAll('.menu-category');

    // Smooth scrolling for navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 150, // Adjust for header and nav height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active navigation button on scroll
    window.addEventListener('scroll', () => {
        let currentCategory = '';
        menuCategories.forEach(category => {
            const categoryTop = category.offsetTop;
            if (pageYOffset >= categoryTop - 160) { // Adjust for header and nav height
                currentCategory = category.getAttribute('id');
            }
        });

        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('href').substring(1) === currentCategory) {
                button.classList.add('active');
            }
        });
    });
});
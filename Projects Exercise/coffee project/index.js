   const hamburger = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-links');
const header = document.querySelector('.coffee-header');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active'); // Add/remove 'active' class to show/hide nav
     header.classList.toggle('expanded');
    });
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__mobile-wrapper'),
    menuItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.header__hamburger-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger-menu-active');
        menu.classList.toggle('header__mobile-wrapper-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger-menu-active');
            menu.classList.toggle('header__mobile-wrapper-active');
        });
    });
});

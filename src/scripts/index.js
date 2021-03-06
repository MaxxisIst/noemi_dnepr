import burgerMenu from "./modules/burgerMenu.js";
import slider from "./modules/slider.js";

burgerMenu({
    selectorBtn: '.header__hamburger-menu',
    selectorMenu: '.header__mobile-wrapper',
    classActiveBurger: 'header__hamburger-menu-active',
    classActiveMenu: 'header__mobile-wrapper-active',
    selectorClose: '.navigation__item, .header__hamburger-menu, .header__social-item, .header__contacts-item',
});

slider({
    selectorSlider: '.discount__slider, .partners__slider',
    selectorNext: '.discount__next, .partners__next',
    selectorPrev: '.discount__prev, .partners__prev',
    selectorPagination: '.discount__pagination, .partners__pagination',
});

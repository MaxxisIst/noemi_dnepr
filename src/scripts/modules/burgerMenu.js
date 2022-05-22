const burgerMenu = ({ selectorBtn, selectorMenu, classActiveBurger, classActiveMenu, selectorClose }) => {
    const btn = document.querySelector(selectorBtn);
    const menu = document.querySelector(selectorMenu);

    btn.addEventListener('click', () => {
        menu.classList.toggle(classActiveMenu);
        btn.classList.toggle(classActiveBurger);
    });

    menu.addEventListener('click', event => {
        if (event.target.closest(selectorClose)) {
        menu.classList.remove(classActiveMenu);
        btn.classList.remove(classActiveBurger);
        }
    });
};
export default burgerMenu;


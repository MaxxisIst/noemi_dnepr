import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({selectorSlider, selectorNext, selectorPrev, selectorPagination}) => {
    new Swiper(selectorSlider, {
        autoplay: true,
        navigation: {
            nextEl: selectorNext,
            prevEl: selectorPrev,
        },
        pagination: {
            el: selectorPagination,
            type: "progressbar",
        },
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
                });
                this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
                });
            }
        }
    });
};
export default slider;

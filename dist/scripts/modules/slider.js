import Swiper from"./swiper-bundle.esm.browser.min.js";const slider=({selectorSlider:e,selectorNext:t,selectorPrev:r,selectorPagination:s})=>{new Swiper(e,{autoplay:!0,navigation:{nextEl:t,prevEl:r},pagination:{el:s,type:"progressbar"},on:{init(){this.el.addEventListener("mouseenter",(()=>{this.autoplay.stop()})),this.el.addEventListener("mouseleave",(()=>{this.autoplay.start()}))}}})};export default slider;
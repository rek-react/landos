import {initBurgerHeader} from './burger.js'
import {addSwiper} from "./swiper.js";
import {Navigation} from "swiper";
import {initAccordions} from "./accordion.js";
import {initPlayVideo} from "./playVideo.js";

initBurgerHeader('.header__burger', '.header__menu')
addSwiper('.work__items', {
    spaceBetween: 15,
    modules: [Navigation],

    navigation: {
        nextEl: ".swiper-button-next"
    },
    slidesPerView: "auto",
    breakpoints:{
        320:{
            spaceBetween: 16,
        },
        525: {
            spaceBetween: 30,
        },
        768: {
            spaceBetween: 50,
        },
        992:{
            spaceBetween: 80,
        }
    }
})
initAccordions()
initPlayVideo(".content-intro__button", ".video-intro__video iframe")
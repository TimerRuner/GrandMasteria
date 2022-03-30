import "./lib/fslightbox.js"
import "./basic/ibg.js"
import "./basic/webp.js"
// import './basic/dynamic_adaptive';
import header from "./modules/sections/header.js"
import spoiler from "./modules/spoiler.js"
import navigation from "./modules/sections/short_nav.js"
import conection from "./modules/conections.js"
import checkNumInput from "./modules/checkNumInputs.js"
import checkTextInputs from "./modules/checkTextInputs.js"
import mask from "./modules/mask.js"
import tab from "./modules/tab.js"
import showMore from "./modules/showMore.js"
import ibg from "./basic/ibg.js"
import modal from "./modules/modal.js"
import tabSlider from "./modules/slider.js"
import setpage from "./modules/setPage.js"
import "./modules/up.js"
import checkerMobile from "./modules/checkMobile.js"

window.addEventListener("DOMContentLoaded", () => {
    "use strict"

    checkerMobile()
    ibg()
    header(".header__burger", ".header__menu", ".header__item a")
    conection(".header__contacts a")
    conection(".footer__phone_tel a")
    spoiler(".about__body", ".about__body .about__text", 500)
    spoiler(".answears__body", ".answears__body .answears__text", 767)
    navigation(".short-nav__column")
    navigation(".info__text a")
    setpage(".header__item a")
    setpage(".short-nav__btn a")
    checkNumInput("._no-symbol")
    checkTextInputs("._no-num")
    mask('[name="phone"]')
    tab(
        ".tab",
        ".tab__item",
        ".accessories__slide",
        "[data-tab]",
        "active",
        "block",
        "flex"
    )
    tab(".tab", ".tab__item", ".galary__slide", null, "active", "block")
    tabSlider(
        ".tab__wrapper",
        ".tab__item",
        ".tab__arrow_left",
        ".tab__arrow_right"
    )
    modal(
        ".galary__slide-wrapper",
        ".modal__wrapper",
        ".overlay",
        ".modal__close img",
        ".modal__more",
        ".modal__info",
        ".galary__btn"
    )
    showMore(
        ".galary__slide",
        "[data-section]",
        ".galary__slide-wrapper",
        ".galary__item",
        9,
        "Завантажити більше"
    )
    showMore(
        ".accessories__slide",
        "[data-section]",
        ".accessories__slide-wrapper",
        ".accessories__slide-wrapper a",
        9,
        "Завантажити більше"
    )
    ibg()
})

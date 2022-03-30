import isMobile from "../basic/checkMobile.js"

const checkerMobile = () => {
    if (isMobile.any()) {
        document.body.classList.add("_mobile")
    } else {
        document.body.classList.remove("_mobile")
    }
}

export default checkerMobile

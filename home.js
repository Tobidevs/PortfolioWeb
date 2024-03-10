let mainTitle = document.querySelector(".home h1");
let stars = document.querySelector(".stars")

window.addEventListener("scroll", () => {
    mainTitle.style.marginTop = window.scrollY * 1.3 + "px"
    stars.style.marginTop = window.scrollY * .8 + "px";
})
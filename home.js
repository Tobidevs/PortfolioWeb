let mainTitle = document.querySelector(".home h1");
let stars = document.querySelector(".stars")
let moon = document.querySelector(".moon")
let saturn = document.querySelector(".saturn")

window.addEventListener("scroll", () => {
    mainTitle.style.marginTop = window.scrollY * 1.3 + "px"
    stars.style.marginTop = window.scrollY * .8 + "px";
    moon.style.marginTop = window.scrollY * .7 + "px"
    saturn.style.marginTop = window.scrollY * .5 + "px"
})
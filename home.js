// Home Page 
let mainTitle = document.querySelector(".home h1");
let stars = document.querySelector(".stars")
let moon = document.querySelector(".moon")
let saturn = document.querySelector(".saturn")
let planet1 = document.querySelector(".planet1")
// let galaxyComet = document.querySelector(".galaxycomet")
// let alienblackhole = document.querySelector(".alienblackhole")


// Paralax animation for home page
window.addEventListener("scroll", () => { 
    mainTitle.style.marginTop = window.scrollY * 1.3 + "px"
    stars.style.marginTop = window.scrollY * .9 + "px";
    moon.style.marginTop = window.scrollY * .1 + "px"
    saturn.style.marginTop = window.scrollY * .25 + "px"
    planet1.style.marginTop = window.scrollY * .17 + "px"
    // galaxyComet.style.marginTop = window.scrollY * .6 + "px"
    // alienblackhole.style.marginTop = window.scrollY * .7 + "px"
})
planet1.style.marginTop = window.scrollY * .17 + "px"

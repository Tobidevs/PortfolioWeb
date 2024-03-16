let mainTitle = document.querySelector(".home h1");
let stars = document.querySelector(".stars")
let moon = document.querySelector(".moon")
let saturn = document.querySelector(".saturn")
let planet1 = document.querySelector(".planet1")
let galaxyComet = document.querySelector(".galaxycomet")
let hiddenElements = document.querySelectorAll('.hidden')

// Parallax Effect Function
window.addEventListener("scroll", () => {
    mainTitle.style.marginTop = window.scrollY * 1.3 + "px"
    stars.style.marginTop = window.scrollY * .8 + "px";
    moon.style.marginTop = window.scrollY * .7 + "px"
    saturn.style.marginTop = window.scrollY * .5 + "px"
    planet1.style.marginTop = window.scrollY * .3 + "px"
    galaxyComet.style.marginTop = window.scrollY * .6 + "px"
})

// Scroll Animation Function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // else {
        // entry.target.classList.remove('show')
        // }
    })
})
hiddenElements.forEach((el) => observer.observe(el))
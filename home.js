let mainTitle = document.querySelector(".home h1");
let stars = document.querySelector(".stars")
let moon = document.querySelector(".moon")
let hiddenElements = document.querySelectorAll('.hidden')
let rain = document.querySelector(".bottomclouds")
let header = document.querySelector(".header")


// Parallax Effect Function
window.addEventListener("scroll", () => {
    mainTitle.style.marginTop = window.scrollY * 1.3 + "px"
    stars.style.marginTop = window.scrollY * .8 + "px";
    moon.style.marginTop = window.scrollY * .7 + "px"
    rain.style.marginTop = window.scrollY * .14 + "px";
    header.style.marginTop = window.scrollY * .0 + "px"
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

// Header bar Appear Animation
const scrollThreshold = 1600; 
function handleScroll() {
    if (window.scrollY > scrollThreshold) {
        header.style.opacity = '1'; // Show the header
    } else {
        header.style.opacity = '0'; // Hide the header
    }
}
window.addEventListener('scroll', handleScroll);
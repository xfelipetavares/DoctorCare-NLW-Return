window.addEventListener(`scroll`, scrollActive)
scrollActive()

function scrollActive() {
    navBarScrollActive()
    topButtonScrollActive()
}
function navBarScrollActive() {
    if (scrollY > 0) {
        navbar.classList.add(`scroll-active`)
    } else {
        navbar.classList.remove(`scroll-active`)
    }
}
function topButtonScrollActive() {
    if (scrollY > 550) {
        backToTopButton.classList.add(`scroll-active`)
    } else {
        backToTopButton.classList.remove(`scroll-active`)
    }
}

function sidebarActivate() {
    body.classList.add(`sidebar-active`)
}
function sidebarDisable() {
    body.classList.remove(`sidebar-active`)
}

// ScrollReveal({
//     origin: `top`,
//     distance: `30px`,
//     duration: 700,
// }).reveal(`
//     #header
// `);
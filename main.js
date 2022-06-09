function scrollActive() {
    if (scrollY > 0) {
        navbar.classList.add(`scroll-active`)
    } else {
        navbar.classList.remove(`scroll-active`)
    }
}

function sidebarActivate() {
    body.classList.add(`sidebar-active`)
}
function sidebarDesable() {
    body.classList.remove(`sidebar-active`)
}
toggleColorScheme()
mdTypography(".at-title", "title-l")
mdTypography(".at-headline", "headline-s")
mdTypography(".at-label", "label-l")

// top app bar
function scrollTopbar() {
    if (window.scrollY == 0) {
        document.querySelector(".at-topbar").classList.add("at-topbar-top")
    } else {
        document.querySelector(".at-topbar").classList.remove("at-topbar-top")
    }
}

scrollTopbar()
window.addEventListener("scroll", scrollTopbar);
mdElevate(".at-topbar")
mdTypography(".at-topbar__title", "headline-m")
mdTypography(".at-searchbar", "body-m")

// home categories
mdElevate(".at-cat")
mdTypography(".at-cat__title", "title-l")
mdTypography(".at-cat__description", "body-m")

// navbar
mdElevate(".at-navbar")

// history
mdElevate(".at-li")

// results
mdElevate(".at-card, .at-tile")

// more
mdTypography(".at-tile__label", "title-m")
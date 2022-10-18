toggleColorScheme()

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

// home categories
mdElevate(".at-cat")
mdTypography(".at-cat__title", "title-l")
mdTypography(".at-cat__description", "body-m")

// search bar

mdElevate(".at-search-rec,  .at-search-res, .at-profile__section")
mdTypography(".at-search-rec-title, .at-search-res-title", "title-l")
mdTypography(".at-searchbar", "body-m")
mdTypography(".at-search-res__name, .at-profile__name", "headline-s")
mdTypography(".at-search-res__price, .at-profile__location", "title-l")
mdTypography(".at-search-res__stars, .at-profile__stars", "label-l")
mdTypography(".at-profile__section__label", "title-m")

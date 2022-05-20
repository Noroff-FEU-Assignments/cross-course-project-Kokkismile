const hamburgerIcon = document.querySelector("#hamburger-icon");
const mobileNavigation = document.querySelector("nav");

hamburgerIcon.onclick = function toogleHamburgerMenu() {

    mobileNavigation.style.display === "block" ? mobileNavigation.style.display = "none" : mobileNavigation.style.display = "block";
    
};
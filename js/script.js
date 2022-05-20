//import { toogleHamburgerMenu } from "./hamburger-menu-function";

const hamburgerIcon = document.querySelector("#hamburger-icon");
const mobileNavigation = document.querySelector("nav");

hamburgerIcon.onclick = function toogleHamburgerMenu(event) {
    console.log(event)
    if (mobileNavigation.style.display === "block") {
        mobileNavigation.style.display = "none";
    } else {
        mobileNavigation.style.display = "block";
    }
};
//import { toogleHamburgerMenu } from "./hamburger-menu-function";

const hamburgerIcon = document.querySelector("#hamburger-icon");
const mobileNavigation = document.querySelector("nav");

hamburgerIcon.onclick = function toogleHamburgerMenu() {

    if (mobileNavigation.style.display === "block") {
        mobileNavigation.style.display = "none";
    } else {
        mobileNavigation.style.display = "block";
    }
};

//Checkout success
let checkoutSubmit = document.querySelector(".checkout-submit");
let targetCheckoutForm = document.querySelector(".checkout-form");
let success = document.querySelector(".form-success2");

checkoutSubmit.onclick = function() {

    success.style.display = "block";
}
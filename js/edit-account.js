const detailsForm = document.querySelector(".account-details-form");
const editButton = document.querySelector(".edit-details");

editButton.onclick = function() {
    detailsForm.style.display = "block";
}

const editButton2 = document.querySelector(".edit-payment");
const paymentForm = document.querySelector(".account-payment-form");

editButton2.onclick = function() {
    paymentForm.style.display = "block";
}
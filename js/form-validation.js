// FORM VARIABLES 
const formSuccess = document.querySelector(".form-success");

const submitButton = document.querySelector(".contact-form");

const userName = document.querySelector(".name");
const nameError = document.querySelector("#error-name");

const subject = document.querySelector(".subject");
const subjectError = document.querySelector("#error-subject");

const email = document.querySelector(".email");
const emailError = document.querySelector("#error-email");

const address = document.querySelector(".address");
const addressError = document.querySelector("#error-address");

//VALIDATE LENGTH OF INPUT VALUE
function inputLengthValidation(inputLength, numberRequirement, selectedElement) {
    
    return inputLength.value.trim().length > numberRequirement ? selectedElement.style.display = "none" : selectedElement.style.display = "block";
};

//VALIDATE E-MAIL
function emailValidation(email) {

    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

// FORM VALIDATION
function formValidation(event) {

    event.preventDefault();

    inputLengthValidation(userName, 0, nameError);
    inputLengthValidation(subject, 19, subjectError);
    inputLengthValidation(address, 9, addressError);

    //subject.value.trim().length === 0 ? subjectError.style.display = "none" : subjectError;
    //address.value.trim().length === 0 ? addressError.style.display = "none" : addressError;

    if (emailValidation(email.value) === true) {

        emailError.style.display = "none";
    }

    if (subject.value.length > 500) {
        subjectError.style.display = "block";
    }

    else {

        email.value.trim().length === 0 ? emailError.style.display = "none" : emailError.style.display = "block";
    } 
    
    if (nameError.style.display === "none" && subjectError.style.display === "none" && emailError.style.display === "none" && addressError.style.display === "none") {
        
        formSuccess.style.display = "block";
    }

};

submitButton.addEventListener("submit", formValidation);

// Question 1: RICR Student Registration Error Messages

function validateName() {
    let name = document.getElementById("fullName");
    let error = document.getElementById("nameError");

    if (name.value.trim() === "") {
        error.textContent = "Please enter your name.";
    } else {
        error.textContent = "";
    }
}

let username = document.getElementById("username");
let usernameError = document.getElementById("usernameError");

username.addEventListener("input", function() {
    if (username.value.trim() === "") {
        usernameError.textContent = "Username cannot be empty.";
    } else {
        usernameError.textContent = "";
    }
});

let studentEmail = document.getElementById("studentEmail");
let studentEmailError = document.getElementById("studentEmailError");

studentEmail.addEventListener("input", function() {
    if (studentEmail.validity.typeMismatch) {
        studentEmailError.textContent = "Please enter a valid email address.";
    } else {
        studentEmailError.textContent = "";
    }
});


// Question 2: RICR Course Registration Validation Message Manager

let email = document.getElementById("courseEmail");
let checkCourseEmail = document.getElementById("checkCourseEmail");

checkCourseEmail.addEventListener("click", function() {

    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an email in the correct format.");
    } else {
        email.setCustomValidity("");
    }

    
    let result = email.checkValidity();

    email.reportValidity();
    if (result) {
        console.log("Valid Email Address");
    } else {
        console.log("Invalid Email Address");
        console.log("Validation Message:", email.validationMessage);
    }
});

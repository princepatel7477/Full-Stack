
// Question 1: RICR Student Registration Form Validator

let email = document.getElementById("email");
let password = document.getElementById("password");

let checkEmail = document.getElementById("checkEmail");

checkEmail.addEventListener("click", function() {
    if (email.checkValidity()) {
        console.log("Valid Email Address");
    } else {
        console.log("Invalid Email Address");
    }
});

let checkPassword = document.getElementById("checkPassword");

checkPassword.addEventListener("click", function() {
    let pass = password.value;

    if (pass.length >= 8 && pass.length <= 20) {
        console.log("Valid Password");
    } else {
        console.log("Invalid Password: Password must be 8 to 20 characters");
    }
});


// Question 2: RICR Course Account Registration System

let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        console.log("Registration Form is Invalid");
    } else {
        event.preventDefault();
        console.log("Registration Successful");
    }
});


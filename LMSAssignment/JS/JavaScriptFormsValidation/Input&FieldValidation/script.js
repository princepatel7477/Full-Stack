
// Question 1: RICR Student Age and Username Checker

let ageInput = document.getElementById("age");
let checkAge = document.getElementById("checkAge");

checkAge.addEventListener("click", function() {
    let age = Number(ageInput.value);

    if (age >= 16 && age <= 60) {
        console.log("Valid Student Age");
    } else {
        console.log("Invalid Student Age");
    }
});

let quantity = document.getElementById("quantity");

quantity.addEventListener("input", function() {
    if (quantity.checkValidity()) {
        console.log("Valid Quantity:", quantity.value);
    } else {
        console.log("Invalid Quantity");
        quantity.reportValidity();
    }
});

let username = document.getElementById("username");

username.addEventListener("input", function() {
    if (username.value.length >= 3 && username.value.length <= 12) {
        console.log("Valid Username:", username.value);
    } else {
        console.log("Username must contain 3 to 12 characters");
    }
});


// Question 2: RICR Student Score and Registration Code Validator

let scoreForm = document.getElementById("scoreForm");
let checkForm = document.getElementById("checkForm");

checkForm.addEventListener("click", function() {
    let result = scoreForm.checkValidity();

    console.log("Form Validity:", result);

    if (result) {
        console.log("All student details are valid");
    } else {
        console.log("Please enter marks and attendance between 0 and 100");
        scoreForm.reportValidity();
    }
});

let registrationCode = document.getElementById("registrationCode");

registrationCode.addEventListener("input", function() {
    if (registrationCode.value.length < 4) {
        registrationCode.setCustomValidity("Registration code must contain at least 4 characters");
    } else {
        registrationCode.setCustomValidity("");
    }

    console.log("Registration Code:", registrationCode.value);
    console.log("Code Validity:", registrationCode.checkValidity());
});

let checkCode = document.getElementById("checkCode");

checkCode.addEventListener("click", function() {
    if (registrationCode.checkValidity()) {
        console.log("Valid Registration Code");
    } else {
        console.log("Invalid Registration Code");
        registrationCode.reportValidity();
    }
});

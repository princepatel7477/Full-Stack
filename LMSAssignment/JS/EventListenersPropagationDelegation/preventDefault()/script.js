
// Question 1: RICR Course Resource Link Handler

let htmlLink = document.getElementById("htmlLink");

htmlLink.addEventListener("click", function(event) {

    event.preventDefault();

    console.log("HTML course link clicked. Navigation stopped.");

});


// Question 2: RICR Student Registration Form

let registrationForm = document.getElementById("registrationForm");

let nameInput = document.getElementById("nameInput");

let message = document.getElementById("message");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let studentName = nameInput.value.trim();

    if (studentName === "") {
        message.textContent = "Please enter your name.";
    } 
    else {
        message.textContent = "Welcome to RICR, " + studentName + "!";
    }

});

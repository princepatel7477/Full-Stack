// Question 1 - RICR Student Registration Validator


let usernamePattern = /^[A-Za-z0-9]{4,10}$/;

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let phonePattern = /^[0-9]{10}$/;


let username = "Prince123";
let email = "prince@gmail.com";
let phone = "9876543210";

if (usernamePattern.test(username)) {
    console.log("Username is valid");
}
else {
    console.log("Username is invalid");
}
if (emailPattern.test(email)) {
    console.log("Email address is valid");
}
else {
    console.log("Email address is invalid");
}

if (phonePattern.test(phone)) {
    console.log("Phone number is valid");
}
else {
    console.log("Phone number is invalid");
}

let badUsername = "Pri@";
let badEmail = "prince gmail.com";
let badPhone = "98765432";

console.log("Invalid Username:", usernamePattern.test(badUsername));
console.log("Invalid Email:", emailPattern.test(badEmail));
console.log("Invalid Phone:", phonePattern.test(badPhone));


// Question 2 - RICR Course Access Code Checker

let accessPattern = /^[A-Z]{3}$/;


let digitPattern = /^[0-9]+$/;

let coursePattern = /course/i;

let code1 = "RIC";
let code2 = "ABC";
let code3 = "RiC";
let code4 = "RICR";

if (accessPattern.test(code1)) {
    console.log(code1 + " is a valid access code");
}
else {
    console.log(code1 + " is an invalid access code");
}

if (accessPattern.test(code2)) {
    console.log(code2 + " is a valid access code");
}
else {
    console.log(code2 + " is an invalid access code");
}

if (accessPattern.test(code3)) {
    console.log(code3 + " is a valid access code");
}
else {
    console.log(code3 + " is an invalid access code");
}

if (accessPattern.test(code4)) {
    console.log(code4 + " is a valid access code");
}
else {
    console.log(code4 + " is an invalid access code");
}

let number1 = "123456";
let number2 = "12AB56";

if (digitPattern.test(number1)) {
    console.log(number1 + " contains only digits");
}
else {
    console.log(number1 + " does not contain only digits");
}

if (digitPattern.test(number2)) {
    console.log(number2 + " contains only digits");
}
else {
    console.log(number2 + " does not contain only digits");
}

let message1 = "Welcome to JavaScript Course";
let message2 = "Learn HTML and CSS";
let message3 = "COURSE registration is open";

if (coursePattern.test(message1)) {
    console.log("Message 1 contains course word");
}
else {
    console.log("Message 1 does not contain course word");
}

if (coursePattern.test(message2)) {
    console.log("Message 2 contains course word");
}
else {
    console.log("Message 2 does not contain course word");
}

if (coursePattern.test(message3)) {
    console.log("Message 3 contains course word");
}
else {
    console.log("Message 3 does not contain course word");
}


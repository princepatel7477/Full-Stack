// Question 1: Nested Conditions
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("You need a driving license.");
    }
} else {
    console.log("You are not old enough to drive.");
}


let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome, Admin.");
    } else {
        console.log("Welcome, User.");
    }
} else {
    console.log("Please log in.");
}

// Question 2: Switch Statement

let choice = 2;

switch (choice) {
    case 1:
        console.log("Home");
        break;

    case 2:
        console.log("About");
        break;

    case 3:
        console.log("Contact");
        break;

    default:
        console.log("Invalid choice");
}
choice = 5;

switch (choice) {
    case 1:
        console.log("Home");
        break;

    case 2:
        console.log("About");
        break;

    case 3:
        console.log("Contact");
        break;

    default:
        console.log("Invalid choice");
}

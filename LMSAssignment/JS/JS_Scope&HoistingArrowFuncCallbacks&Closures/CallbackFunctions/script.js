// Question 1: Callback with Regular and Arrow Functions

function greet() {
    console.log("Welcome to JavaScript!");
}
function processUser(callback) {
    callback();
}

processUser(greet);

let showMessage = () => {
    console.log("Hello! Welcome to our program.");
};

processUser(showMessage);


// Question 2: Callback with Values and Calculations

function calculate(a, b, callback) {

    let sum = a + b;
    callback(sum);
}

let showResult = (result) => {
    console.log("Addition Result: " + result);
};

calculate(10, 20, showResult);

calculate(50, 30, showResult);

let displayMessage = (result) => {
    console.log("Your calculated answer is: " + result);
};
calculate(100, 50, displayMessage);

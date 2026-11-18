// Question 1: Arrow Functions with Different Parameters
let welcome = () => {
    console.log("Welcome to JavaScript!");
};

welcome();


let greet = (name) => {
    console.log("Hello " + name + "!");
};

greet("Prince");

let add = (a, b) => {
    return a + b;
};

let sum = add(10, 20);

console.log("Addition is: " + sum);

let square = (number) => number * number;

let result = square(5);

console.log("Square is: " + result);


// Question 2: Arrow Functions with Multiple Statements

let calculateTotal = (price, quantity) => {

    let total = price * quantity;

    console.log("Total price inside function: " + total);

    return total;
};

let finalTotal = calculateTotal(100, 3);

console.log("Returned total price: " + finalTotal);

let getMessage = (name) => {

    let message = "Welcome " + name + "! Have a nice day.";

    console.log(message);

    return message;
};

let welcomeMessage = getMessage("Prince");

console.log("Returned message: " + welcomeMessage);

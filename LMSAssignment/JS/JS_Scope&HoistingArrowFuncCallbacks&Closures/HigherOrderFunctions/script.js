// Question 1: Higher Order Function with Different Functions
function performOperation(a, b, operation) {
    return operation(a, b);
}
let add = (a, b) => {
    return a + b;
};
let multiply = (a, b) => {
    return a * b;
};
let sum = performOperation(10, 20, add);

console.log("Addition Result: " + sum);
let product = performOperation(10, 20, multiply);

console.log("Multiplication Result: " + product);


function processNumber(number, operation) {
    return operation(number);
}

let doubleResult = processNumber(5, (num) => num * 2);

console.log("Double of number: " + doubleResult);


// Question 2: Higher Order Function Returning Another Function

function createGreeting() {

    return function() {
        console.log("Welcome to JavaScript Programming!");
    };

}
let greet = createGreeting();

greet();

function createMultiplier() {

    return (number) => {
        return number * 2;
    };

}
let double = createMultiplier();
console.log("Double of 10: " + double(10));

console.log("Double of 25: " + double(25));

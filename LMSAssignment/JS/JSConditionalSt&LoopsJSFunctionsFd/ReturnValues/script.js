// Question 1: Returning Calculated Results


function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function square(number) {
    return number * number;
}

let addition = add(10, 20);
let multiplication = multiply(5, 4);
let resultSquare = square(6);

console.log("Addition is: " + addition);
console.log("Multiplication is: " + multiplication);
console.log("Square is: " + resultSquare);


// Question 2: Using Returned Values

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 20);

console.log("Addition Result: " + result);

let finalResult = result * 2;

console.log("Final Result: " + finalResult);

function showResult(a, b) {
    console.log("Result using console.log: " + (a + b));
}

showResult(15, 25);

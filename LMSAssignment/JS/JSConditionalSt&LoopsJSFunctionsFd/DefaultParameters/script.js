// Question 1: Default Parameters
function greet(name = "Guest") {
    console.log("Hello " + name + "!");
}
greet();
greet("Prince");


function showNumber(number = 10) {
    console.log("Number is: " + number);
}
showNumber();
showNumber(25);

// Question 2: Multiple Default Parameters

function add(a = 10, b = 5) {
    return a + b;
}


let result1 = add();
let result2 = add(20);
let result3 = add(30, 40);

console.log("Addition without arguments: " + result1);
console.log("Addition with one argument: " + result2);
console.log("Addition with two arguments: " + result3);

function calculateTotal(price, quantity = 1) {
    return price * quantity;
}

let total1 = calculateTotal(100);

let total2 = calculateTotal(100, 3);
console.log("Total without quantity: " + total1);
console.log("Total with quantity: " + total2);

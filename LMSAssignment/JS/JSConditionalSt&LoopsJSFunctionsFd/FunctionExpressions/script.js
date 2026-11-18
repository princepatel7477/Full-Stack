// Question 1: Function Expression with Parameters

let greet = function(name) {
    console.log("Hello " + name + "!");
};

greet("Prince");
greet("Rahul");
greet("Aman");

let introduce = function(name, city) {
    console.log("My name is " + name);
    console.log("I live in " + city);
};

introduce("Prince", "Bhopal");


// Question 2: Function Expression with Return Values

let add = function(a, b) {
    return a + b;
};

let sum = add(10, 20);

console.log("Addition is: " + sum);

let calculateTotal = function(price, quantity = 1) {
    return price * quantity;
};

let total1 = calculateTotal(100);

console.log("Total without quantity: " + total1);

let total2 = calculateTotal(100, 3);

console.log("Total with quantity: " + total2);

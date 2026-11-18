// Question 1: Parameters and Arguments

function greet(name) {
    console.log("Welcome " + name + "!");
}

greet("Prince");
greet("Rahul");
greet("Aman");

function showNumber(number) {
    console.log("Your number is: " + number);
}

showNumber(10);
showNumber(25);


// Question 2: Multiple Parameters and Arguments

function add(a, b) {
    let sum = a + b;
    console.log("Sum is: " + sum);
}

add(10, 20);
add(50, 30);
function introduce(name, age, city) {
    console.log("My name is: " + name);
    console.log("My age is: " + age);
    console.log("My city is: " + city);
}

introduce("Prince", 20, "Bhopal");

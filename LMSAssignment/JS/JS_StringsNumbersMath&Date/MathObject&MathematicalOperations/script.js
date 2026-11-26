// Question 1: RICR Student Marks Analyzer

let marks = [85.6, 92.4, 76.8, 89.5, 95.7];

console.log("Student Marks:", marks);

let decimalMark = 85.6;

console.log("Round:", Math.round(decimalMark));

console.log("Floor:", Math.floor(decimalMark));

console.log("Ceil:", Math.ceil(decimalMark));

console.log("Trunc:", Math.trunc(decimalMark));

console.log("Lowest Mark:", Math.min(...marks));

console.log("Highest Mark:", Math.max(...marks));

let difference = 76.8 - 92.4;
console.log("Absolute Difference:", Math.abs(difference));

console.log("Addition:", marks[0] + marks[1]);

console.log("Subtraction:", marks[1] - marks[0]);

console.log("Multiplication:", marks[0] * 2);

console.log("Division:", marks[1] / 2);

console.log("Remainder:", marks[1] % 5);


console.log("Positive Sign:", Math.sign(50));
console.log("Negative Sign:", Math.sign(-50));
console.log("Zero Sign:", Math.sign(0));


// Question 2: RICR Course Measurement Calculator

let radius = 7;
let base = 3;
let height = 4;

console.log("Circle Radius:", radius);

console.log("Value of PI:", Math.PI);

let circumference = 2 * Math.PI * radius;
console.log("Circle Circumference:", circumference);

console.log("Square of Radius:", Math.pow(radius, 2));

console.log("Square Root of 64:", Math.sqrt(64));
console.log("Square Root of -25:", Math.sqrt(-25));
console.log("Cube Root of 125:", Math.cbrt(125));
console.log("Triangle Hypotenuse:", Math.hypot(base, height));
console.log("Power of 2:", 2 ** 3);

console.log("Positive Value Sign:", Math.sign(100));
console.log("Negative Value Sign:", Math.sign(-100));
console.log("Zero Value Sign:", Math.sign(0));

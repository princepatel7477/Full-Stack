// Question 1: Type Conversion
let myString = "50";

let myNumber = Number(myString);

console.log("Original String:", myString);
console.log("Converted Number:", myNumber);
console.log("Type:", typeof myNumber);



let numberValue = 100;

let stringValue = String(numberValue);

console.log("Original Number:", numberValue);
console.log("Converted String:", stringValue);
console.log("Type:", typeof stringValue);


console.log("Boolean of 1:", Boolean(1));
console.log("Boolean of 0:", Boolean(0));
console.log("Empty String:", Boolean(""));
console.log("Non-Empty String:", Boolean("Hello"));


// Question 2: Type Conversion and Type Coercion

let value = "20";

let convertedValue = Number(value);

let result1 = convertedValue + 5;

console.log("Converted Value:", convertedValue);
console.log("Type:", typeof convertedValue);
console.log("After Addition:", result1);


let result2 = value + 5;

console.log("Original String:", value);
console.log("After Addition:", result2);
console.log("Type:", typeof result2);

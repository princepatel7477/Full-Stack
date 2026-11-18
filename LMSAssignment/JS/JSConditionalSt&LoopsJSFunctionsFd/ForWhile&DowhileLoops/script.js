// Question 1: Using for and while Loops
console.log("Numbers from 1 to 10 using for loop:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Numbers from 1 to 5 using while loop:");

let num = 1;

while (num <= 5) {
    console.log(num);
    num++;
}

// Question 2: Using do...while Loop
let number = 10;

console.log("Using while loop:");

while (number < 5) {
    console.log("While loop is running");
}

console.log("Using do...while loop:");

do {
    console.log("Do while loop runs at least once");
} while (number < 5);

console.log("For loop runs three times:");

for (let i = 1; i <= 3; i++) {
    console.log("Hello JavaScript");
}

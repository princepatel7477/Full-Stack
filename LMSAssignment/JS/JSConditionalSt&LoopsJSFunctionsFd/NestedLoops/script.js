// Question 1: Nested For Loops
console.log("Question 1: Nested For Loops");

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log("Outer loop: " + i + " Inner loop: " + j);

    }

}

// Question 2: Creating a Pattern with Nested Loops
console.log("Question 2: Star Pattern");

for (let i = 1; i <= 3; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern = pattern + "*";

    }

    console.log(pattern);

}

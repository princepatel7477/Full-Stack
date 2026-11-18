// Question 1: Understanding Hoisting
console.log("Value before assignment: " + myName);

var myName = "Prince";

console.log("Value after assignment: " + myName);

welcome();

function welcome() {
    console.log("Welcome to JavaScript!");
}


// Question 2: Hoisting with var, let and const

function checkHoisting() {
    console.log("Var value: " + myAge);

    var myAge = 20;

    console.log("Var after assignment: " + myAge);
    try {
        console.log(myCity);
    } catch (error) {
        console.log("Let Error: " + error.name);
    }

    let myCity = "Bhopal";

    console.log("Let value after declaration: " + myCity);

    try {
        console.log(myCountry);
    } catch (error) {
        console.log("Const Error: " + error.name);
    }

    const myCountry = "India";

    console.log("Const value after declaration: " + myCountry);
    {
        try {
            console.log(student);
        } catch (error) {
            console.log("TDZ Error: " + error.name);
        }

        let student = "Prince";

        console.log("Student name: " + student);
    }

}

checkHoisting();

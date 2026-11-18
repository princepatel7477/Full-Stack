// Question 1: Understanding Lexical Scope
let institute = "Raj Institute of Coding";

function outer() {
    let course = "Full Stack Development";

    function inner() {

        let topic = "JavaScript";

        console.log("Institute: " + institute);
        console.log("Course: " + course);
        console.log("Topic: " + topic);
    }
    inner();
}
outer();
console.log("Outside Institute: " + institute);

// Question 2: Nested Functions and Variable Shadowing
let message = "Outside";

function outer() {
    let message = "Inside";

    function inner() {
        console.log("Message: " + message);
    }
    inner();
}
outer();

function studentDetails() {

    let name = "Prince";
    let course = "BCA";

    function showDetails() {
        console.log("Student Name: " + name);
        console.log("Course: " + course);
    }
    showDetails();
}

studentDetails();

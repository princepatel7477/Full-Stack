// Question 1: Global, Function and Block Scope

let course = "JavaScript";

console.log("Course outside function: " + course);

function showCourse() {
    let student = "Prince";

    console.log("Course inside function: " + course);
    console.log("Student name: " + student);
}

showCourse();


if (true) {
    let city = "Bhopal";

    console.log("City inside block: " + city);
}



// Question 2: Understanding var, let and const Scope

function checkScope() {

    if (true) {
        var a = 100;
        let b = 200;
        const c = 300;

        console.log("Inside block - var: " + a);
        console.log("Inside block - let: " + b);
        console.log("Inside block - const: " + c);
    }
    console.log("Outside block - var: " + a);
}

checkScope();

// Question 1: Understanding the Scope Chain

let course = "JavaScript";

function showCourse() {

    let student = "Prince";

    console.log("Student Name: " + student);
    console.log("Course Name: " + course);

}

showCourse();


// Question 2: Scope Chain with Nested Functions
let country = "India";

function outer() {

    let city = "Bhopal";

    function inner() {
        let name = "Prince";

        console.log("Student Name: " + name);
        console.log("City Name: " + city);
        console.log("Country Name: " + country);

    }

    inner();
}

outer();

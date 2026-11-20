
// Q1: Using querySelector()


const heading = document.querySelector("h1");

console.log("Q1 - Heading:", heading.textContent);

const announcement = document.querySelector(".announcement");

console.log("First Announcement:", announcement.textContent);

const courseInfo = document.querySelector("#courseInfo");

console.log("Course Information:", courseInfo.textContent);


const missing = document.querySelector(".missing");

if (missing !== null) {
    console.log("Missing Element:", missing.textContent);
} else {
    console.log("Element with class missing not found.");
}


// Q2: Using querySelectorAll()

const courses = document.querySelectorAll(".course");

console.log("Q2 - Total Courses:", courses.length);
courses.forEach(function(course) {
    console.log(course.textContent);
});


const unavailable = document.querySelectorAll(".unavailable");

console.log("Unavailable Elements:", unavailable.length);


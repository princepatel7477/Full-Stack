//
const heading = document.querySelector("h1");

console.log("Heading:", heading.textContent);
const courses = document.querySelectorAll("li");

console.log("Total Courses:", courses.length);

courses.forEach(function(course) {
    console.log(course.textContent);
});

const paragraph = document.querySelector("p");

console.log("Paragraph:", paragraph.textContent);

const button = document.querySelector("button");

console.log("Button:", button.textContent);



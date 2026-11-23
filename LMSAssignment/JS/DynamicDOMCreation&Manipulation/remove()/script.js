// Question 1 - Student Profile Element Creator

let heading = document.createElement("h2");
let paragraph = document.createElement("p");
let button = document.createElement("button");

console.log(heading);
console.log(paragraph);
console.log(button);
console.log("Heading Tag:", heading.tagName);
console.log("Paragraph Tag:", paragraph.tagName);
console.log("Button Tag:", button.tagName);
console.log(heading instanceof HTMLElement);
console.log(paragraph instanceof HTMLElement);
console.log(button instanceof HTMLElement);


let para1 = document.createElement("p");
let para2 = document.createElement("p");

console.log("Both elements are same:", para1 === para2);



// Question 2 - Course Element Creation Function

function createCourseHeading() {

    let heading = document.createElement("h3");

    heading.textContent = "JavaScript Training Course";

    return heading;
}

function createCourseDescription() {

    let paragraph = document.createElement("p");

    paragraph.textContent = "Learn JavaScript from basic to advanced level.";

    return paragraph;
}

let container = document.getElementById("courseContainer");

console.log("Before Creation:", container.children.length);

let courseHeading = createCourseHeading();
let courseDescription = createCourseDescription();

console.log(courseHeading);
console.log(courseDescription);

console.log("After Creation:", container.children.length);


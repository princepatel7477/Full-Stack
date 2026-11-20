// Q1: DOM Traversal
const heading = document.querySelector("#courseCard h2");

console.log("Heading:", heading.textContent);

const parent = heading.parentElement;

console.log("Parent Element:", parent);
console.log("Total Child Elements:", parent.children.length);
console.log("First Child:", parent.firstElementChild);
console.log("Last Child:", parent.lastElementChild);

const paragraph = heading.nextElementSibling;

paragraph.textContent = "Course status: Enrollment Open";

console.log("Updated Paragraph:", paragraph.textContent);

const button = paragraph.nextElementSibling;

console.log("Button Text:", button.textContent);


// Q2: Sibling Traversal
const status = document.querySelector("#learningCard p");

console.log("Original Status:", status.textContent);

const headin = status.previousElementSibling;

console.log("Course Heading:", headin.textContent);

const progress = status.nextElementSibling;

progress.textContent = "Progress: 25%";

console.log("Updated Progress:", progress.textContent);

const paren = status.parentElement;

console.log("Parent Element:", paren);

console.log("Total Child Elements:", paren.children.length);

status.textContent = "Status: In Progress";

console.log("Updated Status:", status.textContent);



// Q1. Select elements using getElementById()
const heading = document.getElementById("welcomeTitle");
const paragraph = document.getElementById("courseDetails");

console.log("Original Heading:", heading.textContent);
console.log("Original Paragraph:", paragraph.textContent);

heading.textContent = "Welcome to RICR!";

paragraph.textContent = "Your classes are ready to begin.";

console.log("Updated Heading:", heading.textContent);
console.log("Updated Paragraph:", paragraph.textContent);


// Q2. Select elements using getElementById() with non-existing IDs
const title = document.getElementById("courseTitle");

const duration = document.getElementById("courseDuration");

console.log("Course Title:", title.textContent);
console.log("Course Duration:", duration.textContent);

const fee = document.getElementById("courseFee");

if (fee !== null) {
    console.log("Course Fee:", fee.textContent);
} else {
    console.log("Course fee information not found.");
}

const wrongTitle = document.getElementById("coursetitle");

if (wrongTitle !== null) {
    console.log("Course Title:", wrongTitle.textContent);
} else {
    console.log("Element with ID coursetitle not found.");
}



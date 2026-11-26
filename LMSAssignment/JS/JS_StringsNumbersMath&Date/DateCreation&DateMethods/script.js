// Question 1: RICR Student Admission Date Manager

let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

let admissionDate = new Date(2026, 7, 15);
console.log("Admission Date:", admissionDate);

let examDate = new Date("2026-12-20T10:30:00");
console.log("Exam Date:", examDate);
console.log("Exam Day:", examDate.getDate());
console.log("Exam Hour:", examDate.getHours());

let timestampDate = new Date(0);
console.log("Timestamp Date:", timestampDate.toISOString());

console.log("Current Timestamp:", Date.now());

let copiedDate = new Date(admissionDate);
copiedDate.setDate(copiedDate.getDate() + 5);

console.log("Original Admission Date:", admissionDate);
console.log("Copied Modified Date:", copiedDate);

console.log("Admission Year:", admissionDate.getFullYear());
console.log("Admission Month:", admissionDate.getMonth() + 1);
console.log("Admission Day of Month:", admissionDate.getDate());
console.log("Admission Weekday:", admissionDate.getDay());
console.log("Admission Hours:", admissionDate.getHours());
console.log("Admission Timestamp:", admissionDate.getTime());

console.log("UTC Year:", admissionDate.getUTCFullYear());
console.log("UTC Hours:", admissionDate.getUTCHours());


// Question 2: RICR Assignment Deadline Manager

let dueDate = new Date(2026, 11, 10, 10, 30, 0);

console.log("Original Due Date:", dueDate);

dueDate.setDate(dueDate.getDate() + 7);
console.log("After 7 Days:", dueDate);

dueDate.setMonth(5);
dueDate.setFullYear(2027);

dueDate.setHours(14);
dueDate.setMinutes(45);
dueDate.setSeconds(30);

console.log("Updated Due Date:", dueDate);
console.log("Date String:", dueDate.toDateString());
console.log("ISO Date:", dueDate.toISOString());
console.log("Indian Date:", dueDate.toLocaleDateString("en-IN"));

let previousDate = new Date(2026, 11, 20);
previousDate.setDate(previousDate.getDate() - 7);

console.log("Previous Date:", previousDate);
console.log("Previous Date String:", previousDate.toDateString());
console.log("Previous Date ISO:", previousDate.toISOString());

let parsedDate = Date.parse("2026-12-25T10:00:00");
console.log("Parsed Timestamp:", parsedDate);

let validDate = new Date("2026-12-15");
let invalidDate = new Date("hello");

console.log("Valid Date:", validDate);
console.log("Invalid Date:", invalidDate);

console.log("Valid Date Check:", Number.isNaN(validDate.getTime()));
console.log("Invalid Date Check:", Number.isNaN(invalidDate.getTime()));

function isValidDate(value) {
    return value instanceof Date && !Number.isNaN(value.getTime());
}

console.log("Is Valid Date:", isValidDate(validDate));
console.log("Is Invalid Date:", isValidDate(invalidDate));
console.log("Is String Valid Date:", isValidDate("2026-12-15"));

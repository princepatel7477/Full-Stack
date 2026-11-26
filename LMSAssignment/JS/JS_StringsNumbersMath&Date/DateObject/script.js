// Question 1: RICR Student Registration Date Viewer

let currentDate = new Date();
let birthday = new Date("2005-08-15");
let eventDate = new Date(2026, 11, 15);
let timestampDate = new Date(0);

console.log("Current Date and Time:", currentDate);
console.log("Student Birthday:", birthday);
console.log("Institute Event Date:", eventDate);
console.log("Timestamp Date:", timestampDate.toISOString());

console.log("Birth Year:", birthday.getFullYear());
console.log("Birth Month:", birthday.getMonth() + 1);
console.log("Birth Date:", birthday.getDate());
console.log("Birth Day:", birthday.getDay());

console.log("Readable Date:", birthday.toDateString());
console.log("Indian Date Format:", birthday.toLocaleDateString("en-IN"));


// Question 2: RICR Assignment Deadline Manager

let deadline = new Date(2026, 11, 10, 10, 30, 45);

console.log("Original Deadline:", deadline);

console.log("Year:", deadline.getFullYear());
console.log("Month:", deadline.getMonth() + 1);
console.log("Date:", deadline.getDate());
console.log("Day:", deadline.getDay());
console.log("Hours:", deadline.getHours());
console.log("Minutes:", deadline.getMinutes());
console.log("Seconds:", deadline.getSeconds());

deadline.setDate(deadline.getDate() + 7);
console.log("After 7 Days:", deadline);

deadline.setFullYear(2027);
console.log("Updated Year:", deadline);

deadline.setMonth(5);
console.log("Updated Month:", deadline);

deadline.setHours(14);
deadline.setMinutes(45);

console.log("Updated Deadline:", deadline);
console.log("Date String:", deadline.toDateString());
console.log("Locale Date:", deadline.toLocaleDateString("en-IN"));
console.log("UTC Date:", deadline.toISOString());

let previousDate = new Date(2026, 11, 1);
previousDate.setDate(previousDate.getDate() - 1);

console.log("Previous Date:", previousDate);
console.log("Previous Date String:", previousDate.toDateString());
console.log("Previous Date UTC:", previousDate.toISOString());

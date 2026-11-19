
// Q1: Check Student Eligibility for Training Program

// Create an array of student marks
let marks = [65, 78, 42, 89, 55, 92];

console.log("========== QUESTION 1 ==========");
console.log("Student Marks:", marks);

// Check if at least one student scored below 40
// some() returns true if at least one condition matches
let below40 = marks.some((mark) => {
    return mark < 40;
});

console.log("Any Student Scored Below 40:", below40);

// Check if all students scored at least 40
// every() returns true only if all elements match
let allPassed = marks.every((mark) => {
    return mark >= 40;
});

console.log("All Students Scored At Least 40:", allPassed);

// Check if at least one student scored above 90
let above90 = marks.some((mark) => {
    return mark > 90;
});

console.log("Any Student Scored Above 90:", above90);

// Check if all students scored below 100
let below100 = marks.every((mark) => {
    return mark < 100;
});

console.log("All Students Scored Below 100:", below100);


// Q2: Validate Course Requirements

// Create an array of completed courses
let courses = ["HTML", "CSS", "JavaScript", "Bootstrap"];

console.log("\n========== QUESTION 2 ==========");
console.log("Completed Courses:", courses);

// Check if JavaScript course is completed
// some() checks whether at least one course matches
let hasJavaScript = courses.some((course) => {
    return course === "JavaScript";
});

console.log("JavaScript Completed:", hasJavaScript);

// Check if all course names have at least 3 characters
// every() checks all course names
let allHaveThreeCharacters = courses.every((course) => {
    return course.length >= 3;
});

console.log("All Courses Have At Least 3 Characters:", allHaveThreeCharacters);

// Check if React course is completed
let hasReact = courses.some((course) => {
    return course === "React";
});

console.log("React Completed:", hasReact);

// Check if every course starts with H
let allStartWithH = courses.every((course) => {
    return course.startsWith("H");
});

console.log("All Courses Start With H:", allStartWithH);

// Display original courses array
console.log("Original Courses Array:", courses);

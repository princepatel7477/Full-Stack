// Q1: Manage Course List Using slice()
let courses = ["Java", "Python", "HTML", "CSS", "JavaScript", "React"];

console.log("Original Courses:", courses);

// Extract courses from index 1 to 3
let selectedCourses = courses.slice(1, 4);
console.log("Slice(1, 4):", selectedCourses);

// Extract courses from index 2 to end
let coursesFromIndex2 = courses.slice(2);
console.log("Slice(2):", coursesFromIndex2);

// Extract last two courses
let lastTwoCourses = courses.slice(-2);
console.log("Last Two Courses:", lastTwoCourses);

// Original array remains unchanged
console.log("Original Array:", courses);


// Q2: Manage Course List Using splice()

let courseList = ["Java", "Python", "HTML", "CSS", "JavaScript"];

console.log("Original Course List:", courseList);

// Remove two courses from index 1
let removedCourses = courseList.splice(1, 2);

console.log("Removed Courses:", removedCourses);
console.log("After Removing:", courseList);

// Insert two courses at index 1
courseList.splice(1, 0, "React", "Node.js");

console.log("After Inserting:", courseList);

// Replace one course at index 2
let replacedCourse = courseList.splice(2, 1, "MongoDB");

console.log("Replaced Course:", replacedCourse);
console.log("Final Course List:", courseList);

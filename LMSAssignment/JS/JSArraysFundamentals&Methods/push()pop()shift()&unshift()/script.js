// Question 1: Using Array Methods (push, pop, shift, unshift)
let courses = ["Java", "Python", "HTML"];
console.log("Original Courses:", courses);

let newLength = courses.push("JavaScript", "React");

console.log("After push:", courses);
console.log("New Length:", newLength);

let removedCourse = courses.pop();

console.log("After pop:", courses);
console.log("Removed Course:", removedCourse);

let updatedLength = courses.unshift("C++");

console.log("After unshift:", courses);
console.log("New Length:", updatedLength);

let firstCourse = courses.shift();

console.log("Removed First Course:", firstCourse);
console.log("Final Courses:", courses);


// Question 2: Managing Student Names Using Array Methods
let students = ["Rahul", "Aman", "Priya", "Neha"];

console.log("Original Students:", students);

let firstStudent = students.shift();

console.log("Removed Student:", firstStudent);
console.log("After shift:", students);

let pushResult = students.push("Rohit", "Anjali");

console.log("After push:", students);
console.log("Push Return Value:", pushResult);

let unshiftResult = students.unshift("Prince");

console.log("After unshift:", students);
console.log("Unshift Return Value:", unshiftResult);

let lastStudent = students.pop();

console.log("Removed Last Student:", lastStudent);
console.log("After pop:", students);
console.log("Final Student List:", students);
console.log("Total Students:", students.length);


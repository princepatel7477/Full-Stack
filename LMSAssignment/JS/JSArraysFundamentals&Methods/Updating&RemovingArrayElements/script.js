// Question 1: Updating Student Marks and Course Names
const marks = [75, 80, 65, 90, 85];
const courses = ["Java", "Python", "JavaScript"];
console.log("Before Updating:");
console.log("Student Marks:", marks);
console.log("Courses:", courses);
console.log("Marks Length:", marks.length);
console.log("Courses Length:", courses.length);

marks[1] = 88;
marks[3] = 95;

courses[0] = "React";
courses[2] = "Node.js";
console.log("After Updating:");
console.log("Student Marks:", marks);
console.log("Courses:", courses);
console.log("Marks Length:", marks.length);
console.log("Courses Length:", courses.length);


// Question 2: Updating Existing and New Array Indexes

let products = ["Laptop", "Mobile", "Keyboard", "Mouse"];

console.log("Original Products:", products);

products[1] = "Tablet";

console.log("After Replacing:", products);
console.log("Array Length:", products.length);

products[5] = "Monitor";
console.log("After Adding New Product:", products);
console.log("Updated Array Length:", products.length);
console.log("Product at Index 4:", products[4]);
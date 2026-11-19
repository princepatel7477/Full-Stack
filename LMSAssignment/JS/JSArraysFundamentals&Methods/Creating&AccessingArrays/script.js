// Question 1: Managing Course Information Using Arrays
let courses = ["Java", "JavaScript", "Python", "React", "Node.js"];
let studentDetails = ["Prince", 20, true];

console.log("Courses Array:", courses);
console.log("Student Details:", studentDetails);
console.log("First Course:", courses[0]);
console.log("Third Course:", courses[2]);
console.log("Last Course:", courses[4]);
let secondCourse = courses[1];

console.log("Second Course:", secondCourse);
console.log("Total Courses:", courses.length);


// Question 2: Managing Product Information Using Arrays

let products = ["Laptop", "Mobile", "Keyboard", "Mouse"];

let prices = [45000, 15000, 800, 500];
console.log("First Product:", products[0]);
console.log("First Product Price:", prices[0]);
let lastIndex = products.length - 1;

console.log("Last Product:", products[lastIndex]);
console.log("Last Product Price:", prices[lastIndex]);
console.log("Total Products:", products.length);
console.log("Product at index 5:", products[5]);

let newProducts = [];

console.log("New Products Array:", newProducts);
console.log("New Products Length:", newProducts.length);

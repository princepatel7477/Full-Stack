// Q1: Check Course Availability

let courses = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];

console.log("========== QUESTION 1 ==========");
console.log("Available Courses:", courses);
console.log("React Available:", courses.includes("React"));
console.log("Python Available:", courses.includes("Python"));
console.log("Java Available:", courses.includes("Java"));
console.log("CSS Available From Index 2:", courses.includes("CSS", 2));
console.log("Node.js Available From Index -2:", courses.includes("Node.js", -2));
console.log("Original Courses:", courses);


// Q2: Check Product Availability in Store
let products = ["Keyboard", "Mouse", "Monitor", "Headphones", "Mouse"];

console.log("\n========== QUESTION 2 ==========");
console.log("Store Inventory:", products);
console.log("Monitor Available:", products.includes("Monitor"));
console.log("Laptop Available:", products.includes("Laptop"));
console.log("Mouse From Index 2:", products.includes("Mouse", 2));
console.log("Mouse From Index 4:", products.includes("Mouse", 4));
console.log("Keyboard From Index -4:", products.includes("Keyboard", -4));
console.log("Original Inventory:", products);

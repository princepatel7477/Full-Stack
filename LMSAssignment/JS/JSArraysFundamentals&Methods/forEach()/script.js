// Q1: Student Course Report

let courses = ["Java", "Python", "HTML", "CSS", "JavaScript"];

console.log("Student Course Report");

courses.forEach((course, index) => {
    
    console.log((index + 1) + ". " + course);
});

let marks = [80, 75, 90, 85];

let totalMarks = 0;

marks.forEach((mark) => {
    totalMarks = totalMarks + mark;
});

console.log("Total Marks:", totalMarks);


// Q2: Product Price Report

let products = ["Laptop", "Mobile", "Keyboard", "Mouse"];
let prices = [50000, 20000, 1500, 500];

console.log("Product Price Report");
products.forEach((product, index, array) => {
    console.log(
        "Product:", product,
        "| Index:", index,
        "| Price: Rs.", prices[index],
        "| Total Products:", array.length
    );
});

let totalPrice = 0;

prices.forEach((price) => {
    totalPrice = totalPrice + price;
});

console.log("Total Price: Rs.", totalPrice);
console.log("Original Products:", products);
console.log("Original Prices:", prices);

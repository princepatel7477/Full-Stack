// Q1: Student Marks Report
let marks = [75, 80, 65, 90, 85];
console.log("Original Marks:", marks);
let squareMarks = marks.map((mark) => {
    return mark * mark;
});

console.log("Square of Marks:", squareMarks);
let subjectMarks = marks.map((mark, index) => {
    return "Subject " + (index + 1) + ": " + mark;
});

console.log("Subject Wise Marks:", subjectMarks);
console.log("Original Marks After map():", marks);


// Q2: Product Price Report

let products = ["Laptop", "Mobile", "Keyboard", "Mouse"];
let prices = [50000, 20000, 1500, 500];

console.log("Original Products:", products);
console.log("Original Prices:", prices);

// Calculate price after adding 18% tax
let pricesWithTax = prices.map((price) => {
    return price + (price * 18 / 100);
});

console.log("Prices After 18% Tax:", pricesWithTax);
let productDetails = products.map((product, index) => {
    return product + " - Rs. " + prices[index];
});

console.log("Formatted Product Details:", productDetails);
console.log("Original Products After map():", products);
console.log("Original Prices After map():", prices);

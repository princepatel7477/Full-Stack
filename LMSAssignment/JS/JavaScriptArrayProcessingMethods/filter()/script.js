// Q1: Student Eligibility Report
let students = ["Rahul", "Aman", "Priya", "Neha", "Rohit", "Pooja"];
let marks = [75, 45, 85, 55, 90, 60];

console.log("All Students:", students);
console.log("All Marks:", marks);
let eligibleMarks = marks.filter((mark) => {
    return mark >= 60;
});

console.log("Eligible Marks:", eligibleMarks);
let selectedStudents = students.filter((student, index) => {
    return index >= 3;
});

console.log("Students From Index 3:", selectedStudents);
console.log("Original Students:", students);
console.log("Original Marks:", marks);


// Q2: Product Selection List
let products = ["Laptop", "Mouse", "Keyboard", "Headphones", "USB Cable", "Monitor"];
let prices = [50000, 500, 1500, 1800, 300, 8000];

console.log("All Products:", products);
console.log("All Prices:", prices);
let below1000 = products.filter((product, index) => {
    return prices[index] < 1000;
});

console.log("Products Below Rs. 1000:", below1000);
let selectedProducts = products.filter((product, index) => {
    return prices[index] >= 500 && prices[index] <= 2000;
});

console.log("Products Between Rs. 500 and Rs. 2000:", selectedProducts);
let selectedPrices = prices.filter((price) => {
    return price >= 500 && price <= 2000;
});

console.log("Selected Product Prices:", selectedPrices);
let noProducts = products.filter((product, index) => {
    return prices[index] > 100000;
});

console.log("No Matching Products:", noProducts);
console.log("Original Products:", products);
console.log("Original Prices:", prices);

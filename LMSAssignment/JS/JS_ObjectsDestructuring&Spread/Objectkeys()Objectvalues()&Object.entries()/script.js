
// Question 1: RICR Student Record Inspector

let student = {
    name: "Prince Patel",
    age: 20,
    city: "Bhopal",
    course: "BCA"
};

let keys = Object.keys(student);

console.log("Student Details:", student);
console.log("Property Names:", keys);
console.log("First Key:", keys[0]);
console.log("Second Key:", keys[1]);
console.log("Total Keys:", keys.length);

let values = Object.values(student);

console.log("Student Values:", values);
console.log("First Value:", values[0]);
console.log("Total Values:", values.length);

let entries = Object.entries(student);

console.log("Key Value Pairs:", entries);

for (let [property, value] of entries) {
    console.log(property + ": " + value);
}

let student2 = {
    name: "Rahul Sharma",
    age: 21,
    city: "Indore",
    course: "MCA"
};

let keys2 = Object.keys(student2);
let values2 = Object.values(student2);
let entries2 = Object.entries(student2);

console.log("Second Student Details:", student2);
console.log("Second Student Keys:", keys2);
console.log("Second Student Values:", values2);
console.log("Second Student Entries:", entries2);

for (let [property, value] of entries2) {
    console.log(property + ": " + value);
}


// Question 2: RICR Course Fee Analyzer

let courseFees = {
    Java: 15000,
    Python: 12000,
    WebDevelopment: 18000,
    DataScience: 25000
};

let courseNames = Object.keys(courseFees);

console.log("Course Names:", courseNames);

let fees = Object.values(courseFees);

console.log("All Course Fees:", fees);
console.log("First Fee:", fees[0]);
console.log("Total Fee Values:", fees.length);

let totalFee = fees.reduce(function(total, fee) {
    return total + fee;
}, 0);

console.log("Total Course Fee:", totalFee);

let courseEntries = Object.entries(courseFees);

for (let [course, fee] of courseEntries) {
    console.log(course + ": ₹" + fee);
}

let averageFee = totalFee / courseNames.length;

console.log("Average Course Fee:", averageFee);

console.log("Final Course Fee Summary:");
console.log("Course Names:", courseNames);
console.log("Individual Fees:", fees);
console.log("Total Fees: ₹" + totalFee);
console.log("Average Fee: ₹" + averageFee);

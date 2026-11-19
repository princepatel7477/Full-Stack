// Q1: Calculate Total Fees Using reduce()
let fees = [5000, 7500, 6000, 8500, 4000];

console.log("========== QUESTION 1 ==========");
console.log("Course Fees:", fees);
let totalFees = fees.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Total Fees Collected:", totalFees);
let feesWithExtraAmount = fees.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 1000);

console.log("Total Fees With Extra 1000:", feesWithExtraAmount);
let numbers = [2, 3, 4];

let product = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log("Product of Numbers:", product);


// Q2: Summarize Students' Examination Results

let marks = [35, 72, 48, 90, 28, 65, 82];

console.log("\n========== QUESTION 2 ==========");
console.log("Student Marks:", marks);
let totalMarks = marks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Total Marks:", totalMarks);
let passedStudents = marks.reduce((count, mark) => {
    if (mark >= 40) {
        return count + 1;
    } else {
        return count;
    }
}, 0);

console.log("Number of Passed Students:", passedStudents);
let highScorers = marks.reduce((count, mark) => {
    if (mark >= 75) {
        return count + 1;
    } else {
        return count;
    }
}, 0);

console.log("Students Scoring At Least 75:", highScorers);
let totalWithoutInitial = marks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log("Total Without Initial Value:", totalWithoutInitial);
console.log("Original Marks Array:", marks);

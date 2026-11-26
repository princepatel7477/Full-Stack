
// Question 1: RICR Student Score & Fee Formatter

let studentScore = 87;
let courseFee = 125000;
let attendance = 89.567;
let totalMarks = 9876543.21;

console.log("Student Score:", studentScore);

let scoreString = studentScore.toString();
console.log("Score as String:", scoreString);
console.log("Data Type:", typeof scoreString);

console.log("Course Fee:", courseFee.toLocaleString("en-IN"));

console.log("Fee in INR:", courseFee.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
}));

console.log("Attendance:", attendance.toFixed(2));

console.log("Precision Value:", totalMarks.toPrecision(6));

console.log("Exponential Value:", totalMarks.toExponential(2));

console.log("Original Score:", studentScore);
console.log("Original Course Fee:", courseFee);
console.log("Original Attendance:", attendance);
console.log("Original Total Marks:", totalMarks);


// Question 2: RICR Student Data Validation & Numeric Text Processing

let integerScore = 85;
let decimalScore = 85.75;
let numericString = "85";
let notANumber = NaN;
let infiniteValue = Infinity;

console.log("Integer Score:", integerScore);
console.log("Decimal Score:", decimalScore);

console.log("Is Integer:", Number.isInteger(integerScore));
console.log("Is Decimal Integer:", Number.isInteger(decimalScore));

console.log("Is NaN:", Number.isNaN(notANumber));
console.log("Is Finite:", Number.isFinite(infiniteValue));
console.log("Is Score Finite:", Number.isFinite(integerScore));

console.log("Is Safe Integer:", Number.isSafeInteger(integerScore));
console.log("Maximum Safe Integer:", Number.MAX_SAFE_INTEGER);

console.log("Is Maximum Safe Integer Safe:", Number.isSafeInteger(Number.MAX_SAFE_INTEGER));

let text1 = "85.75";
let text2 = "120px";
let text3 = "hello";

console.log("Parse Int 85.75:", Number.parseInt(text1));
console.log("Parse Int 120px:", Number.parseInt(text2));
console.log("Parse Int hello:", Number.parseInt(text3));

console.log("Parse Float 85.75:", Number.parseFloat(text1));
console.log("Parse Float 120px:", Number.parseFloat(text2));
console.log("Parse Float hello:", Number.parseFloat(text3));

console.log("Is Numeric String Integer:", Number.isInteger(numericString));

console.log("Is 85.75 NaN:", Number.isNaN(Number.parseFloat(text1)));
console.log("Is hello NaN:", Number.isNaN(Number.parseFloat(text3)));

console.log("Original Integer:", integerScore);
console.log("Original Decimal:", decimalScore);
console.log("Original String:", numericString);
console.log("NaN Value:", notANumber);
console.log("Infinity Value:", infiniteValue);

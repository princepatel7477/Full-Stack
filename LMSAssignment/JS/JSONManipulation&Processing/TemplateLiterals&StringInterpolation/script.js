
// Question 1: RICR Student Welcome Message Generator

let studentName = "Prince Patel";
let courseName = "Full Stack Development";
let instructorName = "Rahul Sharma";
let completedClasses = 15;
let totalClasses = 40;
let studentCity = "Bhopal";

let welcomeMessage = `Welcome ${studentName}! You are enrolled in ${courseName}.`;

console.log(welcomeMessage);

let message = "Hello " + studentName + ", your instructor is " + instructorName;
console.log(message);

let newMessage = `Hello ${studentName}, your instructor is ${instructorName}`;
console.log(newMessage);

console.log(`Student Name: ${studentName}, Course: ${courseName}, Instructor: ${instructorName}`);

console.log(`Remaining Classes: ${totalClasses - completedClasses}`);

console.log(`Student City: ${studentCity.toUpperCase()}`);

let studentSummary = `
Student Summary
Name: ${studentName}
Course: ${courseName}
Instructor: ${instructorName}
Completed Classes: ${completedClasses}
Total Classes: ${totalClasses}
Remaining Classes: ${totalClasses - completedClasses}
City: ${studentCity}
`;

console.log(studentSummary);


// Question 2: RICR Course Fee Receipt Generator

let course = "Java Full Stack Development";
let feePerStudent = 15000;
let enrolledStudents = 20;
let discountPerStudent = 2000;

console.log(`Course Name: ${course}`);
console.log(`Fee Per Student: ₹${feePerStudent}`);

let totalFee = feePerStudent * enrolledStudents;
let totalDiscount = discountPerStudent * enrolledStudents;
let finalAmount = totalFee - totalDiscount;

console.log(`Total Fee Before Discount: ₹${totalFee}`);
console.log(`Total Discount: ₹${totalDiscount}`);
console.log(`Final Payable Amount: ₹${finalAmount}`);

let courseInformation = `
Course: ${course}
Fee: ₹${feePerStudent}
Students: ${enrolledStudents}
`;

console.log(courseInformation);

let receipt = `
********** COURSE FEE RECEIPT **********

Course Name: ${course}
Fee Per Student: ₹${feePerStudent}
Enrolled Students: ${enrolledStudents}

Total Fee: ₹${totalFee}
Discount Per Student: ₹${discountPerStudent}
Total Discount: ₹${totalDiscount}

Final Payable Amount: ₹${finalAmount}

****************************
`;

console.log(receipt);

let additionalMessage = "Thank You!\nYour course fee receipt has been generated.\nWelcome to RICR Institute.";

console.log(additionalMessage);

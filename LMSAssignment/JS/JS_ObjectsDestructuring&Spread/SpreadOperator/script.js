
// Question 1: RICR Course Collection Manager

let frontend = ["HTML", "CSS"];
let programming = ["JavaScript", "React"];

let subjects = [...frontend, ...programming];

console.log("Frontend Subjects:", frontend);
console.log("Programming Subjects:", programming);
console.log("All Subjects:", subjects);

let moreSubjects = ["Bootstrap", ...subjects, "Node.js"];

console.log("More Subjects:", moreSubjects);

let copiedSubjects = [...subjects];

copiedSubjects.push("MongoDB");

console.log("Original Subjects:", subjects);
console.log("Copied Subjects:", copiedSubjects);

let students = [
    { name: "Prince", score: 85 },
    { name: "Rahul", score: 90 },
    { name: "Amit", score: 78 }
];

let copiedStudents = [...students];

copiedStudents[0].score = 95;

console.log("Original Students:", students);
console.log("Copied Students:", copiedStudents);


// Question 2: RICR Student Records and Marks Analyzer

let student = {
    name: "Prince Patel",
    city: "Bhopal"
};

let course = {
    courseName: "Full Stack Development",
    duration: "6 Months"
};

let studentDetails = {
    ...student,
    ...course
};

console.log("Student Details:", studentDetails);

let updatedStudent = {
    ...student,
    city: "Indore"
};

console.log("Original Student:", student);
console.log("Updated Student:", updatedStudent);

let firstObject = {
    name: "Rahul",
    city: "Bhopal"
};

let secondObject = {
    city: "Indore",
    course: "BCA"
};

let combinedObject = {
    ...firstObject,
    ...secondObject
};

console.log("Combined Object:", combinedObject);

function calculateTotal(a, b, c) {
    return a + b + c;
}

let marks = [85, 90, 95];

let totalMarks = calculateTotal(...marks);

console.log("Student Marks:", marks);
console.log("Total Marks:", totalMarks);

let studentMarks = [85, 92, 76, 98, 88];

console.log("All Marks:", studentMarks);
console.log("Highest Marks:", Math.max(...studentMarks));
console.log("Lowest Marks:", Math.min(...studentMarks));

function introduce(greeting, name) {
    return greeting + " " + name;
}

let studentName = ["Prince"];

let message = introduce("Hello", ...studentName);

console.log("Introduction Message:", message);

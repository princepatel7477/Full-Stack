// Q1: Organize Students According to Marks
let marks = [67, 92, 45, 78, 56, 100, 34];

console.log("========== QUESTION 1 ==========");
console.log("Original Marks:", marks);
let defaultSort = [...marks].sort();

console.log("Default Sort:", defaultSort);
let ascendingMarks = [...marks].sort((a, b) => {
    return a - b;
});

console.log("Ascending Order:", ascendingMarks);
let descendingMarks = [...marks].sort((a, b) => {
    return b - a;
});

console.log("Descending Order:", descendingMarks);
let students = [
    { name: "Rahul", marks: 67 },
    { name: "Aman", marks: 92 },
    { name: "Priya", marks: 45 },
    { name: "Neha", marks: 78 },
    { name: "Rohit", marks: 100 }
];
let sortedStudents = [...students].sort((a, b) => {
    return b.marks - a.marks;
});

console.log("Students Sorted by Highest Marks:", sortedStudents);


// Q2: Organize Training Institute Course Directory

let courses = ["javascript", "HTML", "python", "CSS", "React", "bootstrap"];

console.log("\n========== QUESTION 2 ==========");
console.log("Original Courses:", courses);
let defaultCourses = [...courses].sort();

console.log("Default Sorted Courses:", defaultCourses);
let caseInsensitiveCourses = [...courses].sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

console.log("Case-Insensitive Sorted Courses:", caseInsensitiveCourses);
let courseDetails = [
    { course: "Java", fee: 8000 },
    { course: "Python", fee: 6000 },
    { course: "JavaScript", fee: 7500 },
    { course: "React", fee: 10000 },
    { course: "HTML", fee: 4000 }
];
let lowToHigh = [...courseDetails].sort((a, b) => {
    return a.fee - b.fee;
});

console.log("Courses by Lowest Fee:", lowToHigh);
let highToLow = [...courseDetails].sort((a, b) => {
    return b.fee - a.fee;
});

console.log("Courses by Highest Fee:", highToLow);
console.log("Original Courses After Sorting:", courses);

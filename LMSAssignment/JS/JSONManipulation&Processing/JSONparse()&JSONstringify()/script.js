// Question 1: RICR Student Data Conversion System

let studentJSON = `{
    "name": "Prince Patel",
    "age": 20,
    "course": "BCA",
    "marks": [85, 90, 88]
}`;

let student = JSON.parse(studentJSON);

console.log("Parsed Student Object:", student);
console.log("Student Name:", student.name);
console.log("Student Course:", student.course);
console.log("Student Marks:", student.marks);

let coursesJSON = `["Java", "Python", "JavaScript", "React"]`;

let courses = JSON.parse(coursesJSON);

console.log("Courses:", courses);
console.log("First Course:", courses[0]);
console.log("Last Course:", courses[courses.length - 1]);

let numberJSON = "100";

let number = JSON.parse(numberJSON);

console.log("Parsed Number:", number);
console.log("Number Type:", typeof number);

student.marks = [95, 92, 90];

let updatedJSON = JSON.stringify(student);

console.log("Updated JSON String:", updatedJSON);
console.log("JSON String Type:", typeof updatedJSON);

let formattedJSON = JSON.stringify(student, null, 2);

console.log("Formatted Student JSON:");
console.log(formattedJSON);


// Question 2: RICR Course Record Editor and JSON Error Checker

let courseJSON = `{
    "title": "Full Stack Development",
    "duration": "6 Months",
    "fee": 25000,
    "topics": ["HTML", "CSS", "JavaScript", "React"]
}`;

let originalJSON = courseJSON;

let course = JSON.parse(courseJSON);

console.log("Course Details:", course);
console.log("Course Title:", course.title);
console.log("Course Fee:", course.fee);

console.log("Course Topics:");

for (let topic of course.topics) {
    console.log(topic);
}

course.fee = 30000;
course.topics.push("Node.js");

let compactJSON = JSON.stringify(course);

console.log("Compact JSON:", compactJSON);

let formattedCourseJSON = JSON.stringify(course, null, 2);

console.log("Formatted JSON:");
console.log(formattedCourseJSON);

console.log("Original JSON:", originalJSON);
console.log("Updated Course Object:", course);

let invalidJSON = `{
    "title": "Java",
    "fee": 15000,
}`;

try {
    let invalidData = JSON.parse(invalidJSON);
    console.log("Parsed Data:", invalidData);
} catch (error) {
    console.log("Invalid JSON Error:", error.message);
}

try {
    let validData = JSON.parse(originalJSON);
    console.log("Valid JSON:", validData);
} catch (error) {
    console.log("Error:", error.message);
}

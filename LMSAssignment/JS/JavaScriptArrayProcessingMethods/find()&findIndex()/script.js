// Q1: Search for Students Based on Their Marks
let marks = [32, 45, 68, 39, 85, 55];

console.log(" -----> QUESTION 1 <-----");
console.log("Student Marks:", marks);
let firstPassMark = marks.find((mark) => {
    return mark >= 60;
});

console.log("First Mark >= 60:", firstPassMark);
let lowMarkIndex = marks.findIndex((mark) => {
    return mark < 40;
});

console.log("Index of First Mark < 40:", lowMarkIndex);

let highMark = marks.find((mark) => {
    return mark > 90;
});

console.log("Mark Greater Than 90:", highMark);
let perfectMarkIndex = marks.findIndex((mark) => {
    return mark === 100;
});

console.log("Index of Mark 100:", perfectMarkIndex);
console.log("Original Marks Array:", marks);


// Q2: Search for Courses in a Training Institute

let courses = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];
console.log(" -----> QUESTION 2 <-----");
console.log("All Courses:", courses);
let longCourse = courses.find((course) => {
    return course.length > 5;
});

console.log("Course With More Than 5 Characters:", longCourse);

let reactIndex = courses.findIndex((course) => {
    return course === "React";
});

console.log("Index of React:", reactIndex);

let javaCourse = courses.find((course) => {
    return course === "Java";
});

console.log("Java Course:", javaCourse);
let javaIndex = courses.findIndex((course) => {
    return course === "Java";
});

console.log("Java Course Index:", javaIndex);
console.log("Original Courses Array:", courses);

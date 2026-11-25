// Question 1: RICR Student Profile Viewer

let student = {
    name: "Prince Patel",
    age: 20,
    course: "BCA",
    isEnrolled: true,
    "student name": "Prince Patel"
};
console.log("Student Name:", student.name);
console.log("Student Course:", student.course);

console.log("Student Age:", student["age"]);
console.log("Enrollment Status:", student["isEnrolled"]);

let selectedProperty = "name";

console.log("Selected Property:", student[selectedProperty]);
console.log("Student Full Name:", student["student name"]);


// Question 2: RICR Course Information Methods

let course = {
    courseName: "Full Stack Development",
    duration: "6 Months",

    displayCourse() {
        console.log("Course Name:", this.courseName);
        console.log("Course Duration:", this.duration);
    }
};

let studentInfo = {
    name: "Prince Patel",

    introduce: function() {
        console.log("Hello, my name is " + this.name);
        console.log("I am a BCA student.");
    }
};

console.log("Course Details:");
course.displayCourse();
course.displayCourse();

console.log("Student Introduction:");
studentInfo.introduce();
studentInfo.introduce();

console.log("Method Reference:", course.displayCourse);
console.log("Calling Course Method:");
course.displayCourse();

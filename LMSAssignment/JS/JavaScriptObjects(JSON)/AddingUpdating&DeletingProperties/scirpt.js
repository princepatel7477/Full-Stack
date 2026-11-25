
// Question 1: RICR Student Record Management

let student = {
    name: "Prince Patel",
    age: 20
};

student.course = "BCA";

student["city"] = "Bhopal";

let newProperty = "college";
student[newProperty] = "SAM Global University";

student["age"] = 21;

student.course = "MCA";

console.log("Student Record:");
console.log(student);


// Question 2: RICR Course Information Management

let course = {
    courseName: "Full Stack Development",
    duration: "6 Months",
    fees: 25000,
    mode: "Online"
};

console.log("Before Changes:");
console.log(course);

course.fees = 30000;

course.instructor = "Rahul Sharma";

let newCourseProperty = "language";
course[newCourseProperty] = "JavaScript";

delete course.mode;

delete course.duration;

console.log("After Changes:");
console.log(course);

console.log("Deleted Mode:", course.mode);
console.log("Deleted Duration:", course["duration"]);

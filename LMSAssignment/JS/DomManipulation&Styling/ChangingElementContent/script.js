// Question 1 - Training Institute
document.body.innerHTML = `
    <h1 id="instituteTitle">Welcome to Our Institute</h1>

    <p id="notice">Admissions are currently closed.</p>

    <button id="admissionBtn">Check Admission Status</button>

    <hr>

    <h2>Question 2 - Student Information</h2>

    <h2 id="studentName">Student Name</h2>

    <p id="courseName"></p>

    <p id="learningStatus">Status not available</p>
`;

let title = document.getElementById("instituteTitle");
let notice = document.getElementById("notice");
let button = document.getElementById("admissionBtn");

title.innerHTML = "Welcome to RICR!";
notice.innerHTML = "Admissions are now open!";
button.innerHTML = "Apply Now";


// Question 2 - Student Information

let name = "Prince Patel";
let course = "Full Stack Web Development";
let status = "Currently Learning JavaScript";

let student = document.getElementById("studentName");
let courseInfo = document.getElementById("courseName");
let learning = document.getElementById("learningStatus");

student.innerHTML = name;
courseInfo.innerHTML = "Course Name: " + course;
learning.innerHTML = "Learning Status: " + status;


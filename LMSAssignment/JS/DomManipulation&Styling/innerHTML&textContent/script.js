// Question 1 - Student Profile

document.body.innerHTML = `
    <div id="studentProfile">
        <h2>Student Profile</h2>
        <p>Profile information is pending.</p>
    </div>

    <p id="studentMessage"></p>

    <hr>

    <h2>Question 2 - Course Information</h2>

    <div id="courseCard"></div>

    <p id="courseDescription"></p>

    <div id="markupDemo"></div>
`;

let message = document.getElementById("studentMessage");

message.textContent = "Welcome to RICR Student Portal!";

message.textContent = "<strong>Profile Verified</strong>";
let profile = document.getElementById("studentProfile");

profile.innerHTML = `
    <h2>Course Details</h2>
    <p>Course: JavaScript</p>
`;


// Question 2 - Course Information
let courseName = "JavaScript Full Stack";
let duration = "6 Months";
let description = "Learn JavaScript from basic to advanced level.";

let courseCard = document.getElementById("courseCard");

courseCard.innerHTML = `
    <h2>${courseName}</h2>
    <p>Duration: ${duration}</p>
`;

let courseDescription = document.getElementById("courseDescription");

courseDescription.textContent = description;

let markupDemo = document.getElementById("markupDemo");

markupDemo.textContent = "<strong>JavaScript Training</strong>";
markupDemo.innerHTML = "<strong>JavaScript Training</strong>";


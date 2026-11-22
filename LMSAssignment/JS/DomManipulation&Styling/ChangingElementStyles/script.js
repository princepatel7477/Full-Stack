// Question 1 - Student Dashboard

document.body.innerHTML = `
    <h1 id="dashboardTitle">Student Dashboard</h1>

    <p id="welcomeMessage">
        Welcome to your learning dashboard!
    </p>

    <div id="courseCard">
        JavaScript Fundamentals
    </div>

    <hr>

    <h2 id="noticeTitle">Assignment Deadline</h2>

    <p id="noticeMessage">
        Submit your assignment before Friday.
    </p>

    <p id="submissionStatus">
        Submission is pending.
    </p>
`;

let title = document.getElementById("dashboardTitle");
let welcome = document.getElementById("welcomeMessage");
let card = document.getElementById("courseCard");

title.style.color = "blue";
title.style.fontSize = "32px";

welcome.style.color = "white";
welcome.style.backgroundColor = "darkgreen";

card.style.border = "2px solid blue";
card.style.borderRadius = "12px";
card.style.padding = "16px";



// Question 2 - Assignment Announcement

let noticeTitle = document.getElementById("noticeTitle");
let noticeMessage = document.getElementById("noticeMessage");
let status = document.getE
noticeTitle.style.color = "darkred";
noticeTitle.style.fontSize = "28px";
noticeTitle.style.fontWeight = "bold";

noticeMessage.style.backgroundColor = "lightyellow";
noticeMessage.style.color = "darkred";
noticeMessage.style.padding = "12px";
noticeMessage.style.border = "1px solid orange";
noticeMessage.style.borderRadius = "8px";

status.style.color = "green";
status.style.fontSize = "18px";

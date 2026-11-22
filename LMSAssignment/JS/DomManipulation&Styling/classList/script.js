// Question 1 - Student Dashboard Theme
document.body.innerHTML = `
    <h2 id="dashboardTitle">Student Dashboard</h2>

    <p id="welcomeMessage">
        Welcome to your learning dashboard!
    </p>

    <hr>

    <h2>Question 2 - Assignment Notice</h2>

    <p id="assignmentNotice">
        Submit your assignment before Friday.
    </p>

    <button id="toggleButton">Toggle Highlight</button>

    <button id="checkButton">Check Highlight Status</button>

    <p id="result"></p>
`;

let message = document.getElementById("welcomeMessage");

message.classList.add("highlight");
message.classList.add("important");

console.log("Highlight Class:", message.classList.contains("highlight"));
console.log("Important Class:", message.classList.contains("important"));
message.classList.remove("highlight");


// Question 2 - Interactive Assignment


let notice = document.getElementById("assignmentNotice");
let toggleBtn = document.getElementById("toggleButton");
let checkBtn = document.getElementById("checkButton");
let result = document.getElementById("result");

toggleBtn.addEventListener("click", function() {

    notice.classList.toggle("highlight");

});

checkBtn.addEventListener("click", function() {

    let isHighlighted = notice.classList.contains("highlight");

    if (isHighlighted) {
        result.textContent = "Notice is highlighted";
    }
    else {
        result.textContent = "Notice is not highlighted";
    }

});


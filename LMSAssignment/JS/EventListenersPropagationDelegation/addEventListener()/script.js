
// Question 1: RICR Student Activity Dashboard

let viewProfile = document.getElementById("viewProfile");
let viewCourse = document.getElementById("viewCourse");
let checkAttendance = document.getElementById("checkAttendance");

let dashboardMessage = document.getElementById("dashboardMessage");

function showProfile() {
    dashboardMessage.textContent = "Student Profile: Prince Patel, BCA Student.";
}

viewProfile.addEventListener("click", showProfile);

viewCourse.addEventListener("click", () => {
    dashboardMessage.textContent = "Your course is Full Stack Development.";
});

checkAttendance.addEventListener("click", function() {
    dashboardMessage.textContent = "Your attendance is 85%.";
});


// Question 2: One-Time Course Offer and Multiple Actions

let claimOffer = document.getElementById("claimOffer");

let completeTasks = document.getElementById("completeTasks");

let offerMessage = document.getElementById("offerMessage");

let taskMessage = document.getElementById("taskMessage");

let progressMessage = document.getElementById("progressMessage");

claimOffer.addEventListener("click", function() {
    offerMessage.textContent = "Offer claimed successfully!";
}, { once: true });

completeTasks.addEventListener("click", function() {
    taskMessage.textContent = "Course task completed.";
});

completeTasks.addEventListener("click", function() {
    progressMessage.textContent = "Progress updated successfully.";
});

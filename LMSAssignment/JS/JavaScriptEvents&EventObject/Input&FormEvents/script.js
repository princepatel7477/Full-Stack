// Question 1: Live Student Information Preview

let studentName = document.getElementById("studentName");
let courseName = document.getElementById("courseName");

let namePreview = document.getElementById("namePreview");
let coursePreview = document.getElementById("coursePreview");

studentName.addEventListener("input", function() {
    namePreview.textContent = studentName.value || "Your name will appear here.";
});

courseName.addEventListener("input", function() {
    coursePreview.textContent = courseName.value || "Your course will appear here.";
});


// Question 2: Course Enrollment Registration Form

let enrollmentForm = document.getElementById("enrollmentForm");
let message = document.getElementById("message");

enrollmentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent = "Enrollment form submitted!";
});

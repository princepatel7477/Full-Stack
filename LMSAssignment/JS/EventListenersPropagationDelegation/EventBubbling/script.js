
// Question 1: RICR Nested Course Panel

let grandparent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

grandparent.addEventListener("click", function() {
    console.log("Grandparent Clicked");
});

parent.addEventListener("click", function() {
    console.log("Parent Clicked");
});

child.addEventListener("click", function() {
    console.log("Child Clicked");
});


// Question 2: Controlling Event Bubbling

let dashboard = document.getElementById("dashboard");
let courseSection = document.getElementById("courseSection");
let courseButton = document.getElementById("courseButton");

dashboard.addEventListener("click", function() {
    console.log("Student Dashboard Clicked");
});

courseSection.addEventListener("click", function() {
    console.log("Course Section Clicked");
});

courseButton.addEventListener("click", function(event) {
    console.log("View Course Details Button Clicked");
    event.stopPropagation();
});


// Question 1: Student Keyboard Activity Panel

let studentInput = document.getElementById("studentInput");

let keyPressed = document.getElementById("keyPressed");

let keyReleased = document.getElementById("keyReleased");

studentInput.onkeydown = function() {
    keyPressed.textContent = "A key was pressed!";
};

studentInput.onkeyup = function() {
    keyReleased.textContent = "The key was released!";
};


// Question 2: Course Portal Keyboard Response Demo

let courseInput = document.getElementById("courseInput");

let pressStatus = document.getElementById("pressStatus");

let releaseStatus = document.getElementById("releaseStatus");

courseInput.onkeydown = function() {
    pressStatus.textContent = "A key is pressed in the course portal!";
};

courseInput.onkeyup = function() {
    releaseStatus.textContent = "The key is released in the course portal!";
};

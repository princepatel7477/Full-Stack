
// Question 1: RICR Student Selection List

let studentList = document.getElementById("studentList");
let studentMessage = document.getElementById("studentMessage");

studentList.addEventListener("click", function(event) {

    if (event.target.matches("li")) {
        studentMessage.textContent = "You selected " + event.target.textContent + ".";
    }

});


// Question 2: Dynamic Course Task Manager

let taskList = document.getElementById("taskList");
let addTask = document.getElementById("addTask");
let taskMessage = document.getElementById("taskMessage");

taskList.addEventListener("click", function(event) {

    if (event.target.matches("li")) {
        taskMessage.textContent = "Selected Task: " + event.target.textContent;
    }

});

addTask.addEventListener("click", function() {

    let newTask = document.createElement("li");

    newTask.textContent = "Practice JavaScript Events";

    taskList.append(newTask);

});

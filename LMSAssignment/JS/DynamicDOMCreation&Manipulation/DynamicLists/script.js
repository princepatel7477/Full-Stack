// Question 1 - Student Attendance List

document.body.innerHTML = `
    <h2>Student Attendance</h2>

    <ul id="studentList"></ul>

    <hr>

    <h2>Today's Learning Tasks</h2>

    <ol id="taskList"></ol>
`;

let students = [
    "Aarav",
    "Sneha",
    "Kabir",
    "Ananya",
    "Rohan",
    "Meera"
];

let studentList = document.getElementById("studentList");
students.forEach(function(name) {

    let li = document.createElement("li");
    li.textContent = name;
    studentList.append(li);

});

// Question 2 - Training Institute Daily Task List


let tasks = [
    "Attend the programming lecture",
    "Complete the coding practice",
    "Revise the class notes",
    "Submit the assignment",
    "Prepare for the knowledge check"
];

let taskList = document.getElementById("taskList");
tasks.forEach(function(task) {

    let li = document.createElement("li");
    li.textContent = task;
    taskList.append(li);

});

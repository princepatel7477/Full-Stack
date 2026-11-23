// Question 1 - Dynamic Course Information

let container = document.getElementById("courseContainer");
let heading = document.createElement("h2");
heading.textContent = "Full Stack Web Development";
let description = document.createElement("p");

description.textContent = "Learn frontend and backend development step by step.";
let duration = document.createElement("p");

duration.textContent = "Duration: 6 Months";

container.append(heading, description, duration);


// Question 2 - Dynamic Student Resource Panel

let resource = document.getElementById("resourceContainer");

let resourceHeading = document.createElement("h3");

resourceHeading.textContent = "Student Learning Resources";

let link = document.createElement("a");

link.textContent = "Open Course Materials";

link.setAttribute("href", "materials.html");
let button = document.createElement("button");

button.textContent = "Start Learning";
resource.append(resourceHeading, link, button);

// Question 1 - Student Profile Image

document.body.innerHTML = `
    <h2>Question 1 - Student Profile</h2>

    <img id="profileImage"
         src="student.jpg"
         alt="Student Profile">

    <div id="imageDetails"></div>

    <hr>

    <h2>Question 2 - Course Registration</h2>

    <a id="courseLink" href="html-course.html">View Course</a>

    <br><br>

    <input type="text" id="studentName" disabled>

    <div id="courseDetails"></div>
`;

let image = document.getElementById("profileImage");

let oldSrc = image.getAttribute("src");
let oldAlt = image.getAttribute("alt");

console.log("Old Image Source:", oldSrc);
console.log("Old Alt Text:", oldAlt);

image.setAttribute("src", "student-profile.jpg");
image.setAttribute("alt", "RICR Student Profile");

image.setAttribute("title", "Student profile photo");

let newSrc = image.getAttribute("src");
let newAlt = image.getAttribute("alt");
let newTitle = image.getAttribute("title");

let hasTitle = image.hasAttribute("title");
let hasWidth = image.hasAttribute("width");

document.getElementById("imageDetails").innerHTML = `
    <p>Old Source: ${oldSrc}</p>
    <p>Old Alt: ${oldAlt}</p>
    <p>Updated Source: ${newSrc}</p>
    <p>Updated Alt: ${newAlt}</p>
    <p>Title: ${newTitle}</p>
    <p>Has Title: ${hasTitle}</p>
    <p>Has Width: ${hasWidth}</p>
`;


// Question 2 - Course Registration Form

let link = document.getElementById("courseLink");
let oldLink = link.getAttribute("href");

console.log("Old Link:", oldLink);

link.setAttribute("href", "javascript-course.html");

let newLink = link.getAttribute("href");

let studentInput = document.getElementById("studentName");
let beforeRemove = studentInput.hasAttribute("disabled");

studentInput.removeAttribute("disabled");
let afterRemove = studentInput.hasAttribute("disabled");

document.getElementById("courseDetails").innerHTML = `
    <p>Old Link: ${oldLink}</p>
    <p>Updated Link: ${newLink}</p>
    <p>Disabled Before: ${beforeRemove}</p>
    <p>Disabled After: ${afterRemove}</p>
    <p>Student input is now enabled.</p>
`;



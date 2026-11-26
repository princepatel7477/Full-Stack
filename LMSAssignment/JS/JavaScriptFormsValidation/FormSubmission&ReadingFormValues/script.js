// Question 1: RICR Student Registration Form

let studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("courseName").value;

    console.log("Student Registration Details");
    console.log("Student Name:", name);
    console.log("Student Email:", email);
    console.log("Selected Course:", course);
});


// Question 2: RICR Course Enquiry Form Using FormData

let courseEnquiryForm = document.getElementById("courseEnquiryForm");

courseEnquiryForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(courseEnquiryForm);

    let name = formData.get("visitorName");
    let email = formData.get("visitorEmail");
    let phone = formData.get("phone");
    let course = formData.get("interestedCourse");

    console.log("Course Enquiry Details");
    console.log("Visitor Name:", name);
    console.log("Email Address:", email);
    console.log("Phone Number:", phone);
    console.log("Interested Course:", course);

    console.log("All Form Data:");

    for (let [key, value] of formData.entries()) {
        console.log(key + ": " + value);
    }
});

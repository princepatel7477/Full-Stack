
// Question 1: RICR Course Cards

let courseContainer = document.getElementById("courseContainer");

let courses = [
    {
        title: "HTML Fundamentals",
        description: "Learn the basics of HTML.",
        duration: "2 Months"
    },
    {
        title: "JavaScript Essentials",
        description: "Learn JavaScript programming.",
        duration: "3 Months"
    },
    {
        title: "React Development",
        description: "Learn to build React applications.",
        duration: "2 Months"
    }
];

courses.forEach(function(course) {
    let card = document.createElement("div");
    let heading = document.createElement("h2");
    let description = document.createElement("p");
    let duration = document.createElement("p");

    card.classList.add("course-card");

    heading.textContent = course.title;
    description.textContent = course.description;
    duration.textContent = "Duration: " + course.duration;

    card.append(heading, description, duration);
    courseContainer.append(card);
});


// Question 2: Student Profile Cards

let studentContainer = document.getElementById("studentContainer");

let students = [
    {
        name: "Prince Patel",
        course: "BCA",
        status: "Learning JavaScript"
    },
    {
        name: "Rahul Sharma",
        course: "MCA",
        status: "Learning React"
    },
    {
        name: "Amit Verma",
        course: "B.Tech",
        status: "Learning HTML and CSS"
    }
];

students.forEach(function(student) {
    let card = document.createElement("div");
    let heading = document.createElement("h3");
    let course = document.createElement("p");
    let status = document.createElement("p");

    card.classList.add("student-card");

    heading.textContent = student.name;
    course.textContent = "Course: " + student.course;
    status.textContent = "Status: " + student.status;

    card.append(heading, course, status);
    studentContainer.append(card);
});

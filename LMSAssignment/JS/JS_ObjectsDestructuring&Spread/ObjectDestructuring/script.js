
// Question 1: RICR Student Profile Formatter

let student = {
    name: "Prince Patel",
    age: 20,
    city: "Bhopal",
    Course1: "BCA",
    email: undefined,
    phone: null,
    address: {
        city: "Bhopal",
        state: "Madhya Pradesh"
    }
};

let { name, age, city,  Course1 } = student;

console.log("Student Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Course:", course);

let { name: studentName, course: studentCourse } = student;

console.log("Student Name:", studentName);
console.log("Student Course:", studentCourse);

let { email = "Not Provided", city: studentCity = "Bhopal" } = student;

console.log("Email:", email);
console.log("City:", studentCity);

let { phone = "Not Available" } = student;

console.log("Phone:", phone);

let {
    address: {
        city: addressCity,
        state: addressState
    }
} = student;

console.log("Address City:", addressCity);
console.log("Address State:", addressState);

console.log("Student Profile Summary:");
console.log("Name:", studentName);
console.log("Age:", age);
console.log("City:", city);
console.log("Course:", studentCourse);
console.log("Email:", email);
console.log("Phone:", phone);
console.log("Address:", addressCity + ", " + addressState);


// Question 2: RICR Course Information Display System

let course = {
    title: "Java Full Stack Development",
    duration: "6 months",
    fee: 25000,
    instructor: {
        name: "Rahul Sharma",
        experience: "5 Years"
    }
};

function displayCourse({ title, fee, duration = "3 months" }) {
    console.log("Course Title:", title);
    console.log("Course Duration:", duration);
    console.log("Course Fee: ₹" + fee);
}

function displayInstructor({ instructor: { name, experience } }) {
    console.log("Instructor Name:", name);
    console.log("Instructor Experience:", experience);
}

let { title: courseName } = course;

console.log("Course Name:", courseName);

displayCourse(course);
displayInstructor(course);

function showCourse({ title = "Untitled Course", duration = "3 months", fee = 0 } = {}) {
    console.log("Course Title:", title);
    console.log("Duration:", duration);
    console.log("Fee: ₹" + fee);
}

let course2 = {
    title: "Web Development",
    fee: 18000,
    instructor: {
        name: "Amit Verma",
        experience: "3 Years"
    }
};

console.log("Second Course Details:");
showCourse(course2);

console.log("Course with Default Values:");
showCourse();

console.log("Course without Duration:");
displayCourse(course2);
displayInstructor(course2);

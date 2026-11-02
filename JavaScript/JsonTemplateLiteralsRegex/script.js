const studentData = {
    institute: "RICR",
    students: [
        {
            name: "Aarav",
            middleName: null,
            age: 20,
            isEnrolled: true,
            courses: ["JavaScript", "HTML"],
            marks: [85, 92, 88],
            details: {
                city: "Bhopal",
                age: 20
            }
        },
        {
            name: "Priya",
            middleName: "Sharma",
            age: 21,
            isEnrolled: false,
            courses: ["Python", "JavaScript"],
            marks: [90, 86, 95],
            details: {
                city: "Indore",
                age: 21
            }
        }
    ]
};
console.log(studentData);

// JSON.parse() & JSON.stringify()

 
// 1. Store student information as JSON string
let studentJSON = `{
    "name": "Prince Patel",
    "age": 20,
    "course": "BCA",
    "marks": 85
}`;

// 2. Convert JSON string into JavaScript object
let student = JSON.parse(studentJSON);

console.log("Student Information:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Marks:", student.marks);

// 3. Parse JSON array of course names
let coursesJSON = '["Java", "JavaScript", "React", "Python"]';

let courses = JSON.parse(coursesJSON);

console.log("First Course:", courses[0]);

// 4. Update student's marks
student.marks = 95;

console.log("Updated Marks:", student.marks);

// 5. Convert updated object into JSON string
let updatedJSON = JSON.stringify(student, null, 2);

console.log("Updated JSON:");
console.log(updatedJSON);

// 6. Handle invalid JSON using try...catch
let invalidJSON = '{"name": "Prince", age: 20}';

try {
    let data = JSON.parse(invalidJSON);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON! Please enter valid JSON data.");
}

// Objects, Arrays & JSON

// 1. Create a Student Object
console.log("----- Student Object -----");
let student = {
    name: "Prince Patel",
    age: 20,
    course: "BCA",
    subjects: ["Java", "JavaScript", "Python", "DBMS"]
};
// Display properties using dot notation
console.log("Name:", student.name);
console.log("Age:", student.age);

// Display properties using bracket notation
console.log("Course:", student["course"]);
console.log("Subjects:", student["subjects"]);

// 2. First Subject and Total Subjects
console.log("--Subject Details--");
console.log("First Subject:", student.subjects[0]);
console.log("Total Subjects:", student.subjects.length);
// 3. Create Product Objects
console.log("--Product Details--");

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 1500 }
];

// Display selected product details
console.log("Product 1:", products[0].name);
console.log("Price:", products[0].price);
console.log("Product 2:", products[1].name);
console.log("Price:", products[1].price);
console.log("Product 3:", products[2].name);
console.log("Price:", products[2].price);

// 4. Employee Object with Nested Object
console.log("----- Employee Details -----");
let employee = {
    name: "Prince",
    department: {
        departmentName: "IT Department",
        location: "Bhopal"
    },
    skills: ["JavaScript", "React", "Node.js"]
};
console.log("Department:", employee.department.departmentName);
console.log("First Skill:", employee.skills[0]);

// 5. Multiple Student Records as JSON Text
console.log("----- JSON Student Records -----");

let jsonData = `[
    {
        "name": "Prince",
        "course": "BCA"
    },
    {
        "name": "Rahul",
        "course": "B.Tech"
    },
    {
        "name": "Aman",
        "course": "MCA"
    }
]`;

console.log(jsonData);
// 6. Convert JSON Text into JavaScript Array
console.log("----- Parsed Student Records -----");
let students = JSON.parse(jsonData);

// Display each student's name and course
students.forEach(function(student) {
    console.log("Name:", student.name);
    console.log("Course:", student.course);
});


//Required, Email & Password Validation
const form = document.getElementById("registrationForm");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        document.getElementById("checkEmail").addEventListener("click", function () {
            if (emailInput.checkValidity()) {
                document.getElementById("emailResult").textContent =
                    "Email field is valid.";
            } else {
                document.getElementById("emailResult").textContent =
                    "Please enter a valid email address.";
                emailInput.reportValidity();
            }
        });
        document.getElementById("checkPassword").addEventListener("click", function () {
            const password = passwordInput.value;

            if (password.length >= 8 && password.length <= 20) {
                document.getElementById("passwordResult").textContent =
                    "Password length is valid.";
            } else {
                document.getElementById("passwordResult").textContent =
                    "Password must contain between 8 and 20 characters.";
            }
        });
        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                document.getElementById("formResult").textContent =
                    "Please complete all fields correctly.";
            } else {
                event.preventDefault();
                document.getElementById("formResult").textContent =
                    "Registration successful! All fields passed validation.";
            }
        });
// Template Literals & String Interpolation

// backticks
const message = `Welcome to JavaScript!`;
console.log(message);

// String& Backticks
const first = "Hello";
const second = 'Hello';
const third = `Hello`;
console.log(first);
console.log(second);
console.log(third);

const name = "Aarav";
const message2 = `Hello, ${name}!`;
console.log(message2);

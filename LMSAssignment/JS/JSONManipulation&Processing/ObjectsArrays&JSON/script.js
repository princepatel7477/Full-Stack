
// Question 1: RICR Student and Subject Management System

let student = {
    name: "Prince Patel",
    age: 20,
    course: "BCA",
    subjects: ["Java", "Python", "HTML", "JavaScript"]
};

console.log("Student Information:");
console.log("Student Name:", student.name);
console.log("Student Age:", student["age"]);
console.log("Student Course:", student.course);

console.log("Subject Information:");
console.log("First Subject:", student.subjects[0]);
console.log("Second Subject:", student.subjects[1]);
console.log("Last Subject:", student.subjects[student.subjects.length - 1]);

let students = [
    {
        name: "Prince Patel",
        age: 20,
        course: "BCA"
    },
    {
        name: "Rahul Sharma",
        age: 21,
        course: "MCA"
    },
    {
        name: "Amit Verma",
        age: 22,
        course: "B.Tech"
    }
];

console.log("First Student Name:", students[0].name);
console.log("Second Student Course:", students[1].course);
console.log("Third Student Age:", students[2].age);

let employee = {
    name: "Rahul Kumar",
    department: {
        name: "Information Technology",
        floor: 2
    },
    skills: ["Java", "JavaScript", "React"]
};

console.log("Employee Information:");
console.log("Employee Name:", employee.name);
console.log("Department Name:", employee.department.name);
console.log("Department Floor:", employee.department.floor);
console.log("First Skill:", employee.skills[0]);


// Question 2: RICR Course Records in JavaScript and JSON

let courses = [
    {
        title: "Java Programming",
        duration: "4 Months",
        fee: 15000,
        isAvailable: true,
        students: ["Prince", "Rahul"],
        instructor: {
            name: "Amit Sharma",
            department: "Computer Science"
        }
    },
    {
        title: "Web Development",
        duration: "6 Months",
        fee: 20000,
        isAvailable: true,
        students: ["Rohit", "Vikas"],
        instructor: {
            name: "Neha Verma",
            department: "IT"
        }
    },
    {
        title: "Python Programming",
        duration: "3 Months",
        fee: 12000,
        isAvailable: false,
        students: ["Aman", "Karan"],
        instructor: {
            name: "Priya Singh",
            department: "Computer Science"
        }
    }
];

console.log("All Course Records:", courses);

console.log("Selected Course:", courses[0].title);
console.log("Instructor Name:", courses[0].instructor.name);
console.log("Enrolled Student:", courses[0].students[0]);

// JavaScript objects can contain values like undefined and functions, but JSON supports only standard JSON data types.

let coursesJSON = `[
    {
        "title": "Java Programming",
        "duration": "4 Months",
        "fee": 15000,
        "isAvailable": true,
        "students": ["Prince", "Rahul"],
        "instructor": {
            "name": "Amit Sharma",
            "department": "Computer Science"
        },
        "certificate": null
    },
    {
        "title": "Web Development",
        "duration": "6 Months",
        "fee": 20000,
        "isAvailable": true,
        "students": ["Rohit", "Vikas"],
        "instructor": {
            "name": "Neha Verma",
            "department": "IT"
        },
        "certificate": null
    },
    {
        "title": "Python Programming",
        "duration": "3 Months",
        "fee": 12000,
        "isAvailable": false,
        "students": ["Aman", "Karan"],
        "instructor": {
            "name": "Priya Singh",
            "department": "Computer Science"
        },
        "certificate": null
    }
]`;

let jsonCourses = JSON.parse(coursesJSON);

console.log("Course Records in JSON:");
console.log(jsonCourses);

console.log("JSON Course Title:", jsonCourses[0].title);
console.log("JSON Course Fee:", jsonCourses[0].fee);
console.log("JSON Instructor:", jsonCourses[0].instructor.name);
console.log("JSON Students:", jsonCourses[0].students);

console.log("Formatted JSON:");
console.log(JSON.stringify(jsonCourses, null, 2));

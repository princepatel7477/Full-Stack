
// Question 1: RICR Student Profile JSON Designer

let studentJSON = `{
    "name": "Prince Patel",
    "age": 20,
    "course": "BCA",
    "city": "Bhopal",
    "hasPaidFees": true,
    "middleName": null,
    "address": {
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "pincode": 462001
    },
    "marks": [85, 90, 78.5, 95],
    "languages": ["Java", "JavaScript", "Python"]
}`;

let student = JSON.parse(studentJSON);

console.log("Student Profile:", student);
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Course:", student.course);
console.log("Student City:", student.city);
console.log("Fees Paid:", student.hasPaidFees);
console.log("Middle Name:", student.middleName);
console.log("Address:", student.address);
console.log("Marks:", student.marks);
console.log("Languages:", student.languages);


// Question 2: RICR Course and Student Records JSON Dataset

let instituteJSON = `{
    "institute": "SAM Global University",
    "courses": [
        {
            "title": "Full Stack Development",
            "duration": "6 Months",
            "fee": 25000,
            "students": [
                {
                    "name": "Prince Patel",
                    "age": 20,
                    "marks": [85, 90, 95],
                    "details": {
                        "city": "Bhopal",
                        "state": "Madhya Pradesh"
                    },
                    "isEnrolled": true,
                    "certificate": null
                },
                {
                    "name": "Rahul Sharma",
                    "age": 21,
                    "marks": [78, 82, 88],
                    "details": {
                        "city": "Indore",
                        "state": "Madhya Pradesh"
                    },
                    "isEnrolled": true,
                    "certificate": null
                }
            ]
        },
        {
            "title": "Java Programming",
            "duration": "4 Months",
            "fee": 18000,
            "students": [
                {
                    "name": "Amit Verma",
                    "age": 22,
                    "marks": [80, 85, 90],
                    "details": {
                        "city": "Jabalpur",
                        "state": "Madhya Pradesh"
                    },
                    "isEnrolled": true,
                    "certificate": null
                },
                {
                    "name": "Rohit Singh",
                    "age": 20,
                    "marks": [75, 88, 92],
                    "details": {
                        "city": "Satna",
                        "state": "Madhya Pradesh"
                    },
                    "isEnrolled": false,
                    "certificate": null
                }
            ]
        }
    ]
}`;

let institute = JSON.parse(instituteJSON);

console.log("Institute Information:", institute);

console.log("Institute Name:", institute.institute);

console.log("First Course:", institute.courses[0].title);
console.log("First Course Fee:", institute.courses[0].fee);

console.log("First Student:", institute.courses[0].students[0].name);
console.log("Student Marks:", institute.courses[0].students[0].marks);

console.log("Second Course:", institute.courses[1].title);
console.log("Second Course Fee:", institute.courses[1].fee);

console.log("Second Course Students:", institute.courses[1].students);

console.log("Student City:", institute.courses[0].students[0].details.city);
console.log("Enrollment Status:", institute.courses[0].students[0].isEnrolled);

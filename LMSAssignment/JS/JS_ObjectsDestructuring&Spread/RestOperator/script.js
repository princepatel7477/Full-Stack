
// Question 1: RICR Student Subjects and Fee Calculator

function displayStudent(name, ...subjects) {
    console.log("Student Name:", name);
    console.log("Subjects:", subjects);
}

displayStudent("Prince", "Java", "HTML", "CSS");
displayStudent("Rahul", "Python", "JavaScript");
displayStudent("Amit", "React", "Node.js", "MongoDB", "Express");

function calculateTotal(...fees) {
    let total = 0;

    for (let fee of fees) {
        total = total + fee;
    }

    return total;
}

console.log("Total Fees (2 Courses):", calculateTotal(5000, 7000));
console.log("Total Fees (4 Courses):", calculateTotal(5000, 7000, 8000, 10000));
console.log("Total Fees (No Arguments):", calculateTotal());

function formatMarks(name, ...marks) {
    let newMarks = marks.map(function(mark) {
        return mark + 5;
    });

    console.log("Student Name:", name);
    console.log("Original Marks:", marks);
    console.log("Updated Marks:", newMarks);
}

formatMarks("Prince", 70, 80, 85);
formatMarks("Rahul", 65, 75, 90);


// Question 2: RICR Student Record Organizer

let scores = [85, 90, 78, 95, 88];

let [firstScore, ...remainingScores] = scores;

console.log("First Score:", firstScore);
console.log("Remaining Scores:", remainingScores);

let studentList = ["Prince", "Rahul", "Amit", "Rohit", "Vikas"];

let [firstStudent, secondStudent, ...otherStudents] = studentList;

console.log("First Student:", firstStudent);
console.log("Second Student:", secondStudent);
console.log("Other Students:", otherStudents);

let singleStudent = ["Prince"];

let [onlyStudent, ...remainingStudents] = singleStudent;

console.log("Only Student:", onlyStudent);
console.log("Remaining Students:", remainingStudents);

let student = {
    name: "Prince Patel",
    email: "prince@gmail.com",
    course: "BCA",
    city: "Bhopal",
    age: 20
};

let { name, ...otherDetails } = student;

console.log("Student Name:", name);
console.log("Other Student Details:", otherDetails);
console.log("Original Student Object:", student);

let product = {
    name: "Laptop",
    price: 55000,
    brand: "HP",
    inStock: true
};

let { name: productName, price, ...otherInfo } = product;

console.log("Product Name:", productName);
console.log("Product Price:", price);
console.log("Other Product Information:", otherInfo);
console.log("Original Product Object:", product);

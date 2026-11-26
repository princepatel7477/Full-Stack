// Question 1: RICR Student Marks and Course Organizer

let courses = ["Java", "Python", "Web Development", "Data Science"];

let [course1, course2, course3] = courses;

console.log("First Course:", course1);
console.log("Second Course:", course2);
console.log("Third Course:", course3);

let marks = [85, 90, 78, 95];

let [firstMark, secondMark, thirdMark] = marks;

console.log("First Mark:", firstMark);
console.log("Second Mark:", secondMark);
console.log("Third Mark:", thirdMark);

let studentDetails = ["Prince Patel", 20, "Bhopal", "BCA"];

let [name, age] = studentDetails;

console.log("Student Name:", name);
console.log("Student Age:", age);

let colors = ["Red", "Green", "Blue"];

let [color1, , color3] = colors;

console.log("First Color:", color1);
console.log("Third Color:", color3);

let studentInfo = ["Rahul", 21];

let [studentName, studentAge, city = "Bhopal"] = studentInfo;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Default City:", city);

let studentMarks = [80, 90];

let [mark1, mark2, mark3 = 75] = studentMarks;

console.log("Mark 1:", mark1);
console.log("Mark 2:", mark2);
console.log("Default Mark 3:", mark3);

let [value1 = "Default Value"] = [undefined];
let [value2 = "Default Value"] = [null];

console.log("Undefined Default:", value1);
console.log("Null Value:", value2);


// Question 2: RICR Class Representative and Student List Manager

let students = ["Prince", "Rahul", "Amit", "Rohit", "Vikas"];

let [classRepresentative, ...otherStudents] = students;

console.log("Class Representative:", classRepresentative);
console.log("Other Students:", otherStudents);

let scores = [85, 90, 78, 95, 88];

let [score1, score2, ...remainingScores] = scores;

console.log("First Score:", score1);
console.log("Second Score:", score2);
console.log("Remaining Scores:", remainingScores);

let student1Score = 85;
let student2Score = 95;

console.log("Before Swapping:");
console.log("Student 1 Score:", student1Score);
console.log("Student 2 Score:", student2Score);

[student1Score, student2Score] = [student2Score, student1Score];

console.log("After Swapping:");
console.log("Student 1 Score:", student1Score);
console.log("Student 2 Score:", student2Score);

let studentMarks2 = [70, 80];

let [firstScore, secondScore, thirdScore = 60] = studentMarks2;

console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);
console.log("Default Third Score:", thirdScore);

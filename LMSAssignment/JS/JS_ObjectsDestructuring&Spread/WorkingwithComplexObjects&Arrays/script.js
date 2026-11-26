// Question 1: RICR Student Records Management System
let students = [
    {
        name: "Prince Patel",
        course: "BCA",
        address: {
            city: "Bhopal",
            state: "Madhya Pradesh"
        },
        marks: [85, 90, 88]
    },
    {
        name: "Rahul Sharma",
        course: "MCA",
        address: {
            city: "Indore",
            state: "Madhya Pradesh"
        },
        marks: [78, 82, 86]
    },
    {
        name: "Amit Verma",
        course: "B.Tech",
        address: {
            city: "Jabalpur",
            state: "Madhya Pradesh"
        },
        marks: [80, 87, 92]
    }
];

console.log("Student Name:", students[0].name);
console.log("Student Course:", students[0].course);
console.log("Student City:", students[0].address.city);
console.log("Student State:", students[0].address.state);

console.log("Second Student First Mark:", students[1].marks[0]);

students[0].address.city = "Indore";
students[0].address.pincode = 452001;

students[0].marks[1] = 95;

students[1].marks.push(89);

console.log("Updated First Student:", students[0]);
console.log("Updated Second Student:", students[1]);
console.log("All Student Records:", students);


// Question 2: RICR Course and Student Enrollment Manager

let institute = {
    name: "SAM Global University",

    courses: [
        {
            title: "Full Stack Development",
            students: ["Prince", "Rahul", "Amit"]
        },
        {
            title: "Java Programming",
            students: ["Rohit", "Vikas", "Karan"]
        }
    ]
};

console.log("Institute Name:", institute.name);

console.log("First Course:", institute.courses[0].title);
console.log("Second Course:", institute.courses[1].title);

console.log("Selected Student:", institute.courses[0].students[0]);

institute.courses[0].students.push("Sahil");

console.log("Updated First Course Students:", institute.courses[0].students);
console.log("Updated Second Course Students:", institute.courses[1].students);

let products = [
    {
        name: "Laptop",
        details: {
            price: 55000,
            stock: 10
        }
    },
    {
        name: "Mobile",
        details: {
            price: 20000,
            stock: 15
        }
    }
];

console.log("Laptop Price:", products[0].details.price);

products[1].details.stock = 25;

console.log("Updated Mobile Stock:", products[1].details.stock);

let product = {
    name: "Headphones",
    specifications: {
        colors: ["Black", "White", "Blue"]
    }
};

console.log("Original Colors:", product.specifications.colors);

product.specifications.colors[1] = "Red";

console.log("Updated Colors:", product.specifications.colors);

console.log("Updated Institute Information:", institute);
console.log("Updated Products:", products);
console.log("Updated Product:", product);

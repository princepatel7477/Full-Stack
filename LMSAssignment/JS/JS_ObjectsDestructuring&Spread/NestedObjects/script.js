// Question 1: RICR Student Profile and Address Manager

let student = {
    name: "Prince Patel",
    age: 20,

    address: {
        city: "Bhopal",
        state: "Madhya Pradesh",
        pincode: 462001
    },

    course: {
        title: "BCA",
        duration: "3 Years"
    }
};

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student City:", student.address.city);
console.log("Student State:", student.address.state);
console.log("Course Title:", student.course.title);

console.log("Pincode:", student["address"]["pincode"]);
console.log("Course Duration:", student["course"]["duration"]);

let propertyName = "city";
console.log("Dynamic City:", student.address[propertyName]);

student.address.city = "Indore";
student.address.state = "Madhya Pradesh";

student.address.landmark = "Rajwada Palace";

console.log("Updated City:", student.address.city);
console.log("Updated State:", student.address.state);
console.log("Updated Address:", student.address);


// Question 2: RICR Institute Campus Information Manager

let institute = {
    name: "SAM Global University",

    campus: {
        location: {
            city: "Bhopal",
            state: "Madhya Pradesh"
        }
    }
};

console.log("Institute Name:", institute.name);
console.log("Campus City:", institute.campus.location.city);
console.log("Campus State:", institute.campus.location.state);

console.log("City using Bracket Notation:", institute["campus"]["location"]["city"]);
console.log("State using Bracket Notation:", institute["campus"]["location"]["state"]);

let locationProperty = "city";
console.log("Dynamic Location:", institute.campus.location[locationProperty]);

institute.campus.location.city = "Indore";
institute.campus.location.pincode = 462022;

console.log("Updated Campus City:", institute.campus.location.city);
console.log("Updated Pincode:", institute.campus.location.pincode);

console.log("Campus Address:", institute.campus.location);

console.log("Optional Property:", institute.campus.location.landmark?.name);
console.log("Missing Campus Property:", institute.branch?.location?.city);

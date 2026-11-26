
// Q1. 
let studentName = "  rAHUL shARMA  ";
console.log("Original Name:", studentName);

let trimName = studentName.trim();
console.log("After trim():", trimName);
console.log("Uppercase:", trimName.toUpperCase());
console.log("Lowercase:", trimName.toLowerCase());

// let formatName = trimName
//     .toLowerCase()
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");

// console.log("Formatted Name:", formatName);

let courseDescription =
  "JavaScript is a powerful programming language for web development.";
console.log("Using charAt():", courseDescription.charAt(0));
console.log("Using at():", courseDescription.at(9));
console.log("Using at():", courseDescription.at(-1));

console.log("Using slice():", courseDescription.slice(0, 10));
console.log("Using substring():", courseDescription.substring(11, 29));
console.log("Using indexOf():", courseDescription.indexOf("JavaScript"));
console.log("Using lastIndexOf():", courseDescription.lastIndexOf("a"));
console.log("Using includes():", courseDescription.includes("JavaScript"));

console.log("Using startsWith():",courseDescription.startsWith("JavaScript is"));
console.log("Using endsWith():", courseDescription.endsWith("development"));

// Q2.
let courseMessage = "HTML is easy to learn. HTML is used to create webpages.";
console.log("Original Message:", courseMessage);
let firstOccur = courseMessage.replace("HTML", "JavaScript");
console.log("After replace():", firstOccur);

let allOccur = courseMessage.replaceAll("HTML", "JavaScript");
console.log("After replaceAll():", allOccur);

console.log("Using Uppercase:", courseMessage.toUpperCase());
console.log("Using Lowercase:", courseMessage.toLowerCase());

let greeting = "Welcome to RICR";
let studentGroup = "CSE Students";
let combineMess = greeting.concat(" ", studentGroup)
console.log("Combined Message:", combineMess);

let separator = "*".repeat(5);
console.log("Using repeat():", separator);

let courseNames = "Java, Python, JavaScript, HTML";
let courseArray = courseNames.split(",");
console.log("Using split():", courseArray);

let sentence = "JavaScript makes web development interesting";
let sentenceArray = sentence.split(" ");
console.log("Using split():", sentenceArray);

let startText = "     Welcome to JavaScript";
console.log("Using trimStart():", startText.trimStart());

let endText = "Welcome to JavaScript     ";
console.log("Using trimEnd():", endText.trimEnd());


console.log("Original Course Message:", courseMessage);
console.log("Original Greeting:", greeting);
console.log("Original Student Group:", studentGroup);
console.log("Original Course Names:", courseNames);
console.log("Original Sentence:", sentence);
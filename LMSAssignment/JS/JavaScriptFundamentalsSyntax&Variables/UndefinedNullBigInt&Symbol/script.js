// Question 1: Undefined and Null

let username;

console.log("Username:", username);
console.log("Type of username:", typeof username);

let selectedUser = null;

console.log("Selected User:", selectedUser);

selectedUser = "Prince Patel";

console.log("Updated Selected User:", selectedUser);


// Question 2: BigInt and Symbol

let bigNumber = 123456789012345678901234567890n;

console.log("BigInt Value:", bigNumber);
console.log("Type of BigInt:", typeof bigNumber);

let firstId = Symbol("id");
let secondId = Symbol("id");

console.log("Are both Symbols equal?", firstId === secondId);
console.log("Type of Symbol:", typeof firstId);

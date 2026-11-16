console.log("Logical operator");

let age = 21;
let hasId = true;
let isStudent = true;
let hasPass = false;
console.log("AND && : ",age>18 && hasId);
console.log("OR || : ", age<18 || isStudent);
console.log("NOT ! : ",! hasPass);
console.log("NOT ! : ",! isStudent);

console.log("Increment And Decrement operator");
let num = 10;
console.log("original number : " , num);
num++;
console.log("first increment : ",num);
num++;
console.log("second increment : ",num);
num++;
console.log("third increment : ",num);
console.log("pre increment : ",++num);
console.log("post increment : ",num++);
console.log("after post increment : ",num);

let number = 10;
console.log("original number : " , number);
number--;
console.log("first decrement : ",number);
number--;
console.log("second dencrement : ",number);
number--;
console.log("third decrement : ",number);
console.log("pre decrement : ",--number);
console.log("post decrement : ",number--);
console.log("after post decrement : ",number);
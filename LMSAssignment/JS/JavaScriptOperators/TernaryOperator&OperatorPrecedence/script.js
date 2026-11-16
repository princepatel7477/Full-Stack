console.log("1.ternary operator");
let age = 20;
let result = age >= 18 ? "adult" : "minor";
console.log("actual age : ",age);
console.log("person is ",result);

 
let number = 33;
let checkNum = number % 2 == 0 ? "even" :"odd"
console.log("actual number : ",number);
console.log("number is ",checkNum);

console.log("2.operator precedence and parentheses ");
let a = 10+2*5;
console.log("addition and multiplication : ",a);
let b = 10-2/5;
console.log("subtraction and division : ",b);
let c = (10+2)*5;
console.log("addition and multiplication using () : ",c);

let price = 200;
let quantity = 4;
let discount = 50;
let total = (price*quantity)-discount;
console.log("price is : ",price);
console.log("quantity is : ",quantity);
console.log("discount is : ",discount);
console.log("total amount is : ",total);
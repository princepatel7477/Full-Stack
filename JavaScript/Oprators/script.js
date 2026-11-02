let a = 10;
let b = 20;
let c = "10";
let d = "20";

console.log(a == b); //false
console.log(a == c); //true
console.log(a === c); // false
console.log(a != b); //true
console.log(a !== c); //true

let x = 5;
let y = 2;

console.log(x % y); //1

let p = 10;
let q = 3;

console.log(p / q); //3.33

// AND &&
// OR ||
// NOT !

let m = true;
let n = false;
let o = true;

console.log(m && n); // false
console.log(m && o); // true
console.log(n && o); // false
console.log(m || n); // true
console.log(m || o); // true
console.log(n || o); // true

console.log(!m && o); // false
console.log(!n && o); // true
console.log(!m || n); // false
console.log(!m || o); // true

console.log(a++); // 11
console.log(a--); // 10
console.log(a); //10

console.log(b--); //20
console.log(b); // 19
console.log(--b); //18

console.log(a > b ? "Hello" : "Bye");

if (a < b) {
  console.log("Hello");
} else {
  console.log("bye");
}

//loop

for (var i = 0; i < 5; i++) {
  console.log("We are learning JavaScript", i + 1);
}

var i = 0;
while (i <= 5) {
  console.log("We are learning JavaScript while loop", i + 1);
  i++;
}

var i = 0;
do {
  console.log("We are learning JavaScript do-while loop", i + 1);
  i++;
} while (i <= 5);

console.log("1. Check Balance");
console.log("2. Withdraw Money");
console.log("3. Mini Statement");
console.log("4. Pin change");
console.log("5. Deposit Cash");
console.log("6. exit");

let Choice = 4;

switch (Choice) {
  case 1: {
    console.log("Checking Your Balance");
    break;
  }
  case 2: {
    console.log("Please Collect your Cash");
    break;
  }
  case 3: {
    console.log("Please find your transaction below");
    break;
  }
  case 4: {
    console.log("Enter your new Pin");
    break;
  }
  case 5: {
    console.log("Put your Cash Into Machine");
    break;
  }
  case 6: {
    console.log("Thank you for");
    break;
  }
  default: {
    console.log("Wrong Choice");
  }
}

Choice = 3;
if (Choice === 1) {
  console.log("Checking Your Balance");
} else if (Choice === 2) {
  console.log("Please Collect your Cash");
} else if (Choice === 3) {
  console.log("Please find your transaction below");
} else if (Choice === 4) {
  console.log("Enter your new Pin");
} else if (Choice === 5) {
  console.log("Put your Cash Into Machine");
} else if (Choice === 6) {
  console.log("Thank you for");
} else {
  console.log("Wrong Choice");
}
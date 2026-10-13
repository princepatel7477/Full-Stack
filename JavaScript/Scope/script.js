// let a = 10;

// b = 20;

// let b;

// console.log(a + b);

var p = 20;

q = 10;
var q;

console.log(p + q);

console.log(p + r);

console.log(r);

var r = 30;

s = 5;

console.log(s);

console.log(p + s);

var s;

let m;

console.log(m);

console.log(p + m);

m = 3;

function abc() {
  console.log("I am Function ABC");
}

abc();

def();

let x = 10,
  y = 20;

console.log(x + y);

function def() {
  console.log("I am Function DEF");
}

let i = 20;
{
  let i = 18;
  {
    let i = 16;
    {
      let i = 14;
      console.log(i);
    }
    console.log(i);
  }
  console.log(i);
}
console.log(i);

let prince = "Patel";

function empire() {
  console.log("The Prince of this Empire is", prince);
  let princess = "unknown";
  console.log("But the Princess is", princess);
}

empire();
console.log("Princess of prince", prince);
console.log("is", princess);
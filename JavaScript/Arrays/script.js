const ar1 = [1, 2, 3, 4, 5];
let ar2 = [1, 2, 3, 4, 5];

console.log(ar1);
console.log(ar2);

ar1[0] = 20;
ar2 = [1, 2, 3, 4, 5, 6, 7];

console.log(ar1);
console.log(ar2);

ar1[3] = 30;
ar2 = 10;

console.log(ar1);
console.log(ar2);

const ch1 = ["abcd", "defg", "hijk"];
console.log(ch1);

const arr = ["Apple", "2kg", "Himichal", 20, 99.1, true];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr[2]); // Himichal
console.log(arr.at(-4)); // Himichal

arr.push("Delhi");
console.log(arr);

arr.pop();
console.log(arr);

arr.pop();
console.log(arr);

let abc = arr.filter((item) => item != "Himichal");
console.log(abc);

const arr2 = ["Apple", "2kg", "Himichal", 20, 99.1, true];

console.log("arr2 =", arr2);

let a = arr2.slice(0, 2);
console.log(a);

arr2.splice(2, 2);
console.log(arr2);

const Name = "Lucky Kumar Singh Rajput";

console.log(Name);

let x = Name.split(" ");

console.log(x);

let y = Name.split("u");

console.log(y);

arr2.shift();

console.log(arr2);

arr2.unshift("Mango");

console.log(arr2);

const arr3 = ["Orange", "2kg", "Nagpur", 20, 99.1, true];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

arr3.forEach((element) => {
  console.log(element);
});
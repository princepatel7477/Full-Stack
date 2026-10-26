const str = "Prince Patel"

console.log(str.charAt(3));// charAt()

console.log(str.at(-3));//at()

console.log(str.slice(0,5));// slice()
console.log(str.slice(6,12));

console.log(str.substring(0,12));// substring()
console.log(str.substring(0,2));

console.log(str.trim());// trim()
console.log(str.trimEnd());
console.log(str.trimStart());


console.log(str.toLowerCase());// toLowerCase()
console.log(str.toUpperCase());// toUpperCase()

console.log(str.endsWith("Patel"));// endsWith()
console.log(str.startsWith("Prince"));// startsWith()

console.log(str.includes("Patel"));// includes()

console.log(str.indexOf("Prince"));// indexOf()
console.log(str.lastIndexOf("Patel"));// lastIndexOf()

console.log(str.replaceAll("prince", "Sharma"));// replaceAll()
console.log(str.replace("Patel", "Sharma"));// replace()

const a = Math.random() * (50 - 20) + 20; // min = 20 max= 50
console.log(a);// random()











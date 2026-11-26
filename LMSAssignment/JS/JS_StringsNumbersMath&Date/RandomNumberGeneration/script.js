
// Question 1: RICR Random Number Generator

let generateBtn = document.getElementById("generateBtn");
let randomResult = document.getElementById("randomResult");

generateBtn.addEventListener("click", function() {

    let randomDecimal = Math.random();
    let randomHundred = Math.random() * 100;
    let randomDigit = Math.floor(Math.random() * 10);
    let randomTen = Math.floor(Math.random() * 10) + 1;

    randomResult.innerHTML =
        "Random Decimal (0 to 1): " + randomDecimal + "<br>" +
        "Random Decimal (0 to 100): " + randomHundred + "<br>" +
        "Random Integer (0 to 9): " + randomDigit + "<br>" +
        "Random Integer (1 to 10): " + randomTen;
});


// Question 2: RICR Random Course Activity Selector

let activityBtn = document.getElementById("activityBtn");
let activityResult = document.getElementById("activityResult");

activityBtn.addEventListener("click", function() {

    let inclusiveRandom = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

    let exclusiveRandom = Math.floor(Math.random() * (15 - 5)) + 5;

    let randomDecimal = Math.random() * (20 - 10) + 10;

    activityResult.innerHTML =
        "Random Integer (5 to 15 inclusive): " + inclusiveRandom + "<br>" +
        "Random Integer (5 inclusive to 15 exclusive): " + exclusiveRandom + "<br>" +
        "Random Decimal (10 to 20): " + randomDecimal;
});

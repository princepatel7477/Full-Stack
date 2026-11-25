
// Question 1: RICR Nested Element Capturing Demo

let grandparent = document.getElementById("grandparent");
let parent = document.getElementById("parent");
let child = document.getElementById("child");

grandparent.addEventListener("click", function() {
    console.log("Grandparent Clicked");
}, true);

parent.addEventListener("click", function() {
    console.log("Parent Clicked");
}, true);

child.addEventListener("click", function() {
    console.log("Child Clicked");
});


// Question 2: RICR Capturing and Bubbling Comparison

let captureGrandparent = document.getElementById("captureGrandparent");
let captureParent = document.getElementById("captureParent");
let captureChild = document.getElementById("captureChild");

captureGrandparent.addEventListener("click", function() {
    console.log("Capturing: Grandparent");
}, { capture: true });

captureParent.addEventListener("click", function() {
    console.log("Capturing: Parent");
}, { capture: true });

captureChild.addEventListener("click", function() {
    console.log("Capturing: Child");
});



let bubbleGrandparent = document.getElementById("bubbleGrandparent");
let bubbleParent = document.getElementById("bubbleParent");
let bubbleChild = document.getElementById("bubbleChild");

bubbleGrandparent.addEventListener("click", function() {
    console.log("Bubbling: Grandparent");
});

bubbleParent.addEventListener("click", function() {
    console.log("Bubbling: Parent");
});

bubbleChild.addEventListener("click", function() {
    console.log("Bubbling: Child");
});

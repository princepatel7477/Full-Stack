// Question 1: Closure with Outer Variables
function createGreeting(name) {

    return function() {
        console.log("Hello " + name + "! Welcome to JavaScript.");
    };

}
let greetRaj = createGreeting("Raj");
let greetPriya = createGreeting("Priya");
greetRaj();
greetPriya();


// Question 2: Multiple Functions Using Closure
function createMessage() {

    let message = "Hello! This is the original message.";
    return {
        show: function() {
            console.log(message);
        },
        update: function() {
            message = "Updated Message";
        }

    };

}

let myMessage = createMessage();
myMessage.show();
myMessage.update();
myMessage.show();

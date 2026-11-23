// Question 1 - RICR Course Announcement Board

document.body.innerHTML = `
    <div id="announcementBoard">
        Latest Announcements:
    </div>

    <hr>

    <h2>Question 2 - Student Messages</h2>

    <div id="pendingMessages"></div>

    <div id="processedMessages"></div>
`;

let board = document.getElementById("announcementBoard");

let heading = document.createElement("h3");
heading.textContent = "New JavaScript Batch";

let paragraph = document.createElement("p");
paragraph.textContent = "Classes begin on Monday.";

let appendResult = board.append(heading, paragraph);

board.append("Registration is now open!");

console.log("Append Result:", appendResult);

let contact = document.createElement("p");
contact.textContent = "Contact the institute for details.";

let appendChildResult = board.appendChild(contact);

console.log("AppendChild Result:", appendChildResult);
console.log("Same Paragraph:", appendChildResult === contact);


// Question 2 - Student Messages

let pending = document.getElementById("pendingMessages");
let processed = document.getElementById("processedMessages");

let studentMessage = document.createElement("p");
studentMessage.id = "studentMessage";
studentMessage.textContent = "Your assignment has been received.";

pending.appendChild(studentMessage);
let reviewMessage = document.createElement("p");
reviewMessage.textContent = "Your assignment is under review.";

pending.appendChild(reviewMessage);

console.log("Before Moving:");
console.log("Pending Messages:", pending.children.length);
console.log("Processed Messages:", processed.children.length);

processed.append("Please check your dashboard for updates.");

processed.appendChild(studentMessage);

console.log("After Moving:");
console.log("Pending Messages:", pending.children.length);
console.log("Processed Messages:", processed.children.length);
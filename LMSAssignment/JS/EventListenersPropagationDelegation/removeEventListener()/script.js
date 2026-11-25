
// Question 1: RICR Notification Control Panel

let showNotificationBtn = document.getElementById("showNotification");
let stopNotificationsBtn = document.getElementById("stopNotifications");
let notificationMessage = document.getElementById("notificationMessage");

function showNotification() {
    notificationMessage.textContent = "New notification: Welcome to RICR!";
}

showNotificationBtn.addEventListener("click", showNotification);

stopNotificationsBtn.addEventListener("click", function() {
    showNotificationBtn.removeEventListener("click", showNotification);
    notificationMessage.textContent = "Notifications stopped successfully!";
});


// Question 2: RICR Course Action Listener Manager

let showCourseBtn = document.getElementById("showCourse");
let disableCourseBtn = document.getElementById("disableCourse");
let courseMessage = document.getElementById("courseMessage");

function showCourseMessage() {
    courseMessage.textContent = "Welcome to the RICR course portal!";
}

showCourseBtn.addEventListener("click", showCourseMessage);

disableCourseBtn.addEventListener("click", function() {
    showCourseBtn.removeEventListener("click", showCourseMessage);
    courseMessage.textContent = "Course message disabled successfully!";
});

// Question 1 - RICR Student Preference Cookie Manager


document.body.innerHTML = `
    <h2>Student Preference Cookie Manager</h2>

    <label>Preferred Language:</label>
    <input type="text" id="language" placeholder="Enter language">

    <br><br>

    <label>Preferred Theme:</label>
    <input type="text" id="theme" placeholder="Enter theme">

    <br><br>

    <button id="savePreference">Save Preferences</button>
    <button id="viewPreference">View Preferences</button>
    <button id="updateTheme">Update Theme</button>
    <button id="deleteTheme">Delete Theme</button>

    <p id="preferenceResult"></p>

    <hr>

    <h2>Question 2 - Course Session Cookie Manager</h2>

    <button id="createCourse">Create Course Cookie</button>
    <button id="createActivity">Create Activity Cookie</button>
    <button id="viewCookies">View Cookies</button>
    <button id="updateCourse">Update Course Cookie</button>
    <button id="deleteCourse">Delete Course Cookie</button>

    <p id="courseResult"></p>

    <h3>Cookie Attributes</h3>
    <div id="cookieInfo"></div>

    <h3>Storage Comparison</h3>
    <div id="storageInfo"></div>
`;

function getCookie(name) {

    let cookies = document.cookie.split(";");

    for (let cookie of cookies) {

        let parts = cookie.trim().split("=");

        if (parts[0] === name) {
            return decodeURIComponent(parts.slice(1).join("="));
        }
    }

    return null;
}

// Question 1 - Student Preference Cookies


let language = document.getElementById("language");
let theme = document.getElementById("theme");
let preferenceResult = document.getElementById("preferenceResult");

document.getElementById("savePreference").addEventListener("click", function() {

    document.cookie = "ricr_language=" +
        encodeURIComponent(language.value) + "; path=/";

    document.cookie = "ricr_theme=" +
        encodeURIComponent(theme.value) + "; path=/";

    preferenceResult.textContent = "Preferences saved successfully!";

});
document.getElementById("viewPreference").addEventListener("click", function() {

    let savedLanguage = getCookie("ricr_language");
    let savedTheme = getCookie("ricr_theme");

    preferenceResult.textContent =
        "Language: " + (savedLanguage ?? "Not found") +
        " | Theme: " + (savedTheme ?? "Not found");

});

document.getElementById("updateTheme").addEventListener("click", function() {

    document.cookie = "ricr_theme=Dark; path=/";

    preferenceResult.textContent = "Theme updated to Dark!";

});

document.getElementById("deleteTheme").addEventListener("click", function() {

    document.cookie =
        "ricr_theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    preferenceResult.textContent = "Theme cookie deleted!";

});



// Question 2 - Course Session Cookie Manager


let courseResult = document.getElementById("courseResult");

document.getElementById("createCourse").addEventListener("click", function() {

    document.cookie = "ricr_course=JavaScript; path=/";

    courseResult.textContent = "Course cookie created successfully!";

});
document.getElementById("createActivity").addEventListener("click", function() {

    document.cookie = "ricr_activity=Lesson1; max-age=3600; path=/";

    courseResult.textContent = "Activity cookie saved for 3600 seconds!";

});

document.getElementById("viewCookies").addEventListener("click", function() {

    courseResult.textContent =
        document.cookie || "No accessible cookies found.";

});

document.getElementById("updateCourse").addEventListener("click", function() {

    document.cookie = "ricr_course=FullStack; path=/";

    courseResult.textContent = "Course cookie updated to FullStack!";

});

document.getElementById("deleteCourse").addEventListener("click", function() {

    document.cookie =
        "ricr_course=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    courseResult.textContent = "Course cookie deleted!";
});

document.getElementById("cookieInfo").innerHTML = `
    <p><b>expires:</b> Sets the date when a cookie expires.</p>

    <p><b>max-age:</b> Sets cookie lifetime in seconds.</p>

    <p><b>path:</b> Defines which website paths can access the cookie.</p>

    <p><b>Secure:</b> Sends the cookie only over secure HTTPS connections.</p>

    <p><b>HttpOnly:</b> Prevents JavaScript from accessing the cookie.</p>

    <p><b>SameSite:</b> Controls when cookies are sent with cross-site requests.</p>
`;



document.getElementById("storageInfo").innerHTML = `
    <p><b>Cookies:</b> Small data storage. Cookies can be
    automatically sent with matching HTTP requests.</p>

    <p><b>localStorage:</b> Stores data until manually removed.
    It is not automatically sent with HTTP requests.</p>

    <p><b>sessionStorage:</b> Stores data for the current tab session.
    It is not automatically sent with HTTP requests.</p>
`;


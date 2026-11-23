// Question 1 - RICR Student Preference Manager

// Create HTML elements
document.body.innerHTML = `
    <h2>Student Preference Manager</h2>

    <label>Preferred Language:</label>
    <input type="text" id="language" placeholder="Enter language">

    <br><br>

    <label>Preferred Theme:</label>
    <select id="theme">
        <option value="">Select Theme</option>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
    </select>

    <br><br>

    <button id="saveBtn">Save Preferences</button>
    <button id="loadBtn">Load Preferences</button>
    <button id="removeThemeBtn">Remove Theme</button>
    <button id="clearBtn">Clear Preferences</button>

    <p id="preferenceResult"></p>

    <hr>

    <h2>Question 2 - Course Activity Tracker</h2>

    <label>Current Lesson:</label>
    <input type="text" id="lesson" placeholder="Enter lesson">

    <br><br>

    <label>Activity Step:</label>
    <input type="number" id="step" placeholder="Enter step">

    <br><br>

    <button id="saveProgressBtn">Save Progress</button>
    <button id="restoreBtn">Restore Progress</button>
    <button id="removeProgressBtn">Remove Progress</button>
    <button id="clearSessionBtn">Clear Session Data</button>

    <p id="progressResult"></p>
`;

// Question 1 - Local Storage

let language = document.getElementById("language");
let theme = document.getElementById("theme");
let preferenceResult = document.getElementById("preferenceResult");

document.getElementById("saveBtn").addEventListener("click", function() {

    localStorage.setItem("ricr_language", language.value);
    localStorage.setItem("ricr_theme", theme.value);

    preferenceResult.textContent = "Preferences saved successfully!";

});
document.getElementById("loadBtn").addEventListener("click", function() {

    let savedLanguage = localStorage.getItem("ricr_language");
    let savedTheme = localStorage.getItem("ricr_theme");

    if (savedLanguage === null) {
        savedLanguage = "Language preference not found";
    }

    if (savedTheme === null || savedTheme === "") {
        savedTheme = "Theme preference not found";
    }

    preferenceResult.textContent =
        "Language: " + savedLanguage +
        " | Theme: " + savedTheme;

});

document.getElementById("removeThemeBtn").addEventListener("click", function() {

    localStorage.removeItem("ricr_theme");

    preferenceResult.textContent = "Theme preference removed!";

});

document.getElementById("clearBtn").addEventListener("click", function() {

    localStorage.clear();

    preferenceResult.textContent = "All local storage data cleared!";

});


// Question 2 - Session Storage

let lesson = document.getElementById("lesson");
let step = document.getElementById("step");
let progressResult = document.getElementById("progressResult");

document.getElementById("saveProgressBtn").addEventListener("click", function() {
    sessionStorage.setItem("ricr_lesson", lesson.value);
    sessionStorage.setItem("ricr_step", Number(step.value));
    progressResult.textContent = "Progress saved successfully!";

});

document.getElementById("restoreBtn").addEventListener("click", function() {

    let savedLesson = sessionStorage.getItem("ricr_lesson");
    let savedStep = sessionStorage.getItem("ricr_step");

    if (savedLesson === null || savedStep === null) {

        progressResult.textContent = "No saved progress found.";

    }
    else {

        lesson.value = savedLesson;
        step.value = savedStep;

        progressResult.textContent =
            "Lesson: " + savedLesson +
            " | Activity Step: " + savedStep;

        console.log("Saved Step:", savedStep);
        console.log("Step Data Type:", typeof savedStep);

    }

});
document.getElementById("removeProgressBtn").addEventListener("click", function() {

    sessionStorage.removeItem("ricr_step");

    progressResult.textContent = "Activity step removed!";

});

document.getElementById("clearSessionBtn").addEventListener("click", function() {
    sessionStorage.clear();

    progressResult.textContent = "Session data cleared!";

});


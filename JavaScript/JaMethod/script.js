 
    
// String Methods & Manipulation
 const name = "   rAHUL shARma   ";
        const email = "rahul@example.com";

        // Clean and format the student's name
        const cleanName = name.trim();
        const formattedName = cleanName.toUpperCase();

        document.getElementById("studentName").textContent =
            "Formatted Name: " + formattedName;

        // Extract the first name
        const firstName = cleanName.slice(0, cleanName.indexOf(" "));

        document.getElementById("firstName").textContent =
            "First Name: " + firstName;

        // Get the last character of the name
        document.getElementById("lastCharacter").textContent =
            "Last Character: " + cleanName.at(-1);

        // Check the email
        const emailStatus = email.includes("@") && email.endsWith(".com");

        document.getElementById("emailStatus").textContent =
            "Email Valid: " + emailStatus;

        // Replace all occurrences of HTML
        const message = "HTML is useful. HTML is popular.";
        const updatedMessage = message.replaceAll("HTML", "JavaScript");

        document.getElementById("updatedMessage").textContent =
            "Updated Message: " + updatedMessage;

        // Combine greeting and student name
        const greeting = "Welcome, ".concat(formattedName, "!");

        document.getElementById("greeting").textContent = greeting;

        // Split the subjects into an array
        const subjectList = "HTML,JavaScript,React";
        const subjectsArray = subjectList.split(",");

        document.getElementById("subjects").textContent =
            "Subjects: " + subjectsArray.join(", ");



       
        // Number Methods

             // Numeric values received as strings
        const marksText = "87";
        const feeText = "12500.75";

        // Parse strings into numbers
        const marks = Number.parseInt(marksText);
        const fee = Number.parseFloat(feeText);

        // Student marks
        document.getElementById("marks").textContent =
            "Student Marks: " + marks;

        document.getElementById("integerCheck").textContent =
            "Are marks an integer? " + Number.isInteger(marks);

        document.getElementById("finiteCheck").textContent =
            "Are marks finite? " + Number.isFinite(marks);

        document.getElementById("safeIntegerCheck").textContent =
            "Are marks a safe integer? " + Number.isSafeInteger(marks);

        // Fee details
        document.getElementById("parsedFee").textContent =
            "Parsed Fee: " + fee;

        document.getElementById("formattedFee").textContent =
            "Fee with two decimal places: " + fee.toFixed(2);

        document.getElementById("localeFee").textContent =
            "Fee in Indian format: " +
            fee.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR"
            });

        // Additional number formatting
        document.getElementById("precision").textContent =
            "Marks with 4 significant digits: " +
            marks.toPrecision(4);

        document.getElementById("exponential").textContent =
            "Marks in exponential notation: " +
            marks.toExponential(2);

        // Convert number into a string
        const marksString = marks.toString();

        document.getElementById("stringValue").textContent =
            "Marks as a string: " + marksString +
            " | Data type: " + typeof marksString;


            // Math Object & Mathematical Operations

            const m = [78, 92, 65, 88, 74]; // Math.max()
            



            

            





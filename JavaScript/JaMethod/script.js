 
    
// String Methods & Manipulation
 const name = "   rAHUL shARma   ";
        const email = "rahul@example.com";

        const cleanName = name.trim();
        const formattedName = cleanName.toUpperCase();

        document.getElementById("studentName").textContent =
            "Formatted Name: " + formattedName;

        const firstName = cleanName.slice(0, cleanName.indexOf(" "));

        document.getElementById("firstName").textContent =
            "First Name: " + firstName;

        document.getElementById("lastCharacter").textContent =
            "Last Character: " + cleanName.at(-1);

     
        const emailStatus = email.includes("@") && email.endsWith(".com");

        document.getElementById("emailStatus").textContent =
            "Email Valid: " + emailStatus;

        const message = "HTML is useful. HTML is popular.";
        const updatedMessage = message.replaceAll("HTML", "JavaScript");

        document.getElementById("updatedMessage").textContent =
            "Updated Message: " + updatedMessage;

        const greeting = "Welcome, ".concat(formattedName, "!");

        document.getElementById("greeting").textContent = greeting;

    
        const subjectList = "HTML,JavaScript,React";
        const subjectsArray = subjectList.split(",");

        document.getElementById("subjects").textContent =
            "Subjects: " + subjectsArray.join(", ");



       
        // Number Methods

        const marksText = "87";
        const feeText = "12500.75";
        const marks = Number.parseInt(marksText);
        const fee = Number.parseFloat(feeText);

        document.getElementById("marks").textContent =
            "Student Marks: " + marks;

        document.getElementById("integerCheck").textContent =
            "Are marks an integer? " + Number.isInteger(marks);

        document.getElementById("finiteCheck").textContent =
            "Are marks finite? " + Number.isFinite(marks);

        document.getElementById("safeIntegerCheck").textContent =
            "Are marks a safe integer? " + Number.isSafeInteger(marks);

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

        document.getElementById("precision").textContent =
            "Marks with 4 significant digits: " +
            marks.toPrecision(4);

        document.getElementById("exponential").textContent =
            "Marks in exponential notation: " +
            marks.toExponential(2);

        const marksString = marks.toString();

        document.getElementById("stringValue").textContent =
            "Marks as a string: " + marksString +
            " | Data type: " + typeof marksString;



  // Math Object & Mathematical Operations

        const mark = [78, 92, 65, 88, 74];

        document.getElementById("highestMarks").textContent =
            "Highest Marks: " + Math.max(...mark);

        document.getElementById("lowestMarks").textContent =
            "Lowest Marks: " + Math.min(...mark);

        
        const value = 7.8;

        document.getElementById("rounding").textContent =
            "Value: " + value +
            " | Round: " + Math.round(value) +
            " | Floor: " + Math.floor(value) +
            " | Ceil: " + Math.ceil(value) +
            " | Trunc: " + Math.trunc(value);

    
        const radius = 5;
        const area = Math.PI * Math.pow(radius, 2);

        document.getElementById("circleArea").textContent =
            "Circle Area (radius 5): " + area.toFixed(2);

        const sideA = 3;
        const sideB = 4;

        document.getElementById("hypotenuse").textContent =
            "Triangle Hypotenuse: " + Math.hypot(sideA, sideB);

        const number = -25;
        document.getElementById("absolute").textContent =
            "Absolute Value of -25: " + Math.abs(number);

        document.getElementById("sign").textContent =
            "Sign of -25: " + Math.sign(number);

        document.getElementById("power").textContent =
            "2 raised to power 3: " + Math.pow(2, 3);

        document.getElementById("squareRoot").textContent =
            "Square Root of 81: " + Math.sqrt(81);

        document.getElementById("cubeRoot").textContent =
            "Cube Root of 64: " + Math.cbrt(64);

  
  console.log(Math.PI);  //pi
  console.log(Math.abs(-15)); // abs
  console.log(Math.ceil(4.9)); // ceil
  console.log(Math.floor(-4.1));
  console.log(Math.round(4.5)); // round
  console.log(Math.max(10, 20, 30)); // max
  console.log(Math.min(10, 20, 30)); // min
  console.log(Math.trunc(4.9));// trunc
  console.log(Math.pow(14, 4)); // power
  console.log(Math.sqrt(32)); // square root
  console.log(Math.cbrt(27)); // cube root 


//   Random Number Generation


 function generateNumbers() {
            const decimal = Math.random();
            const numberOne = Math.floor(Math.random() * 10) + 1;
            const numberTwo = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
            const numberThree = Math.floor(Math.random() * (15 - 5)) + 5;
            const rangeDecimal = Math.random() * (20 - 10) + 10;

            document.getElementById("decimal").textContent = decimal;

            document.getElementById("numberOne").textContent = numberOne;

            document.getElementById("numberTwo").textContent = numberTwo;

            document.getElementById("numberThree").textContent = numberThree;

            document.getElementById("rangeDecimal").textContent =
                rangeDecimal.toFixed(2);
        }

        document.getElementById("generateButton").addEventListener(
            "click",
            generateNumbers
        );
        generateNumbers();

        console.log(Math.random()); // random decimal between 0 and 1
        console.log(Math.floor(Math.random() * 10) + 1); // random integer between 1 and 10
        console.log((Math.random() * (50 - 20+1 )) + 20); // random integer between 20 and 50
       



//   Date Object
         const deadline = new Date(2026, 10, 20, 14, 30, 0);

        document.getElementById("originalDate").textContent =
            "Original Deadline: " + deadline.toDateString();

        document.getElementById("year").textContent =
            "Year: " + deadline.getFullYear();

        document.getElementById("month").textContent =
            "Month Index: " + deadline.getMonth();

        document.getElementById("day").textContent =
            "Day of Month: " + deadline.getDate();

        document.getElementById("weekday").textContent =
            "Weekday Index: " + deadline.getDay();

        document.getElementById("time").textContent =
            "Time: " + deadline.getHours() + ":" +
            deadline.getMinutes() + ":" +
            deadline.getSeconds();

        document.getElementById("indianDate").textContent =
            "Indian Date Format: " +
            deadline.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });

        deadline.setDate(25);
        deadline.setHours(16);

        document.getElementById("updatedDate").textContent =
            "Updated Deadline: " + deadline.toDateString() +
            " at " + deadline.getHours() + ":" +
            deadline.getMinutes();

        const reminder = new Date(deadline);
        reminder.setDate(reminder.getDate() - 7);

        document.getElementById("reminderDate").textContent =
            "Reminder Date: " + reminder.toDateString();

        document.getElementById("isoDate").textContent =
            "ISO Deadline: " + deadline.toISOString();




  
  

   
  

 
  

           

            



            

            





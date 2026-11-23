// Question 1 - RICR Student Marks Validation

function calculateResult(marks) {

    if (marks < 0 || marks > 100) {
        throw new Error("Marks must be between 0 and 100");
    }

    if (marks >= 40) {
        return "Pass";
    }
    else {
        return "Fail";
    }
}

let marksList = [85, 35, 100, -10, 120];

marksList.forEach(function(marks) {

    try {
        console.log("Student Marks:", marks);

        let result = calculateResult(marks);

        console.log("Student Result:", result);

    }
    catch (error) {

        console.log("Error Message:", error.message);

        console.error("Invalid Marks:", error);
    }
    finally {

        console.log("Marks checking completed.");
        console.log("-------------------------");

    }

});


// Question 2 - RICR Course Fee Debugging System

function calculateCourseFee(fee, students) {

    if (fee < 0 || students < 0) {
        throw new Error("Fee and student count cannot be negative");
    }

    let totalFee = fee * students;

    return totalFee;
}

let feePerStudent = 5000;
let enrolledStudents = 20;

try {
    console.log("Fee Per Student:", feePerStudent);
    console.log("Enrolled Students:", enrolledStudents);

    let total = calculateCourseFee(feePerStudent, enrolledStudents);

    console.log("Total Course Fee:", total);

}
catch (error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

    console.error("Course Fee Error:", error);

}

let invalidFee = -5000;
let invalidStudents = 10;

try {

    console.log("Invalid Fee:", invalidFee);
    console.log("Student Count:", invalidStudents);

    let total = calculateCourseFee(invalidFee, invalidStudents);

    console.log("Total Course Fee:", total);

}
catch (error) {

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

    console.error("Course Fee Error:", error);

}

let correctedStudents = 10;

try {

    console.log("Corrected Fee:", correctedFee);
    console.log("Corrected Students:", correctedStudents);

    let total = calculateCourseFee(correctedFee, correctedStudents);

    console.log("Corrected Total Fee:", total);

}
catch (error) {

    console.error("Error:", error.message);

}


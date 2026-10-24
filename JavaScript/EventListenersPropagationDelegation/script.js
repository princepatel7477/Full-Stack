const showAssBtn = document.getElementById("showAssignmentNotification");
const showAttBtn = document.getElementById("showAssignmentNotification");
const stopAssBtn = document.getElementById("showAssignmentNotification")

const asspPara= document.getElementById("AssignmentNotification");
const attpPara= document.getElementById("AssignmentNotification");

function ShowAssingment(){
    asspPara.textContent = "Your assignment deadline is approaching!";
}

showAssBtn.addEventListener("click",ShowAssingment);

showAssBtn.addEventListener("click",()=>{
    attpPara.textContent = "Please check your attendance status";

});

stopAssBtn.addEventListener("click",()=>{
    showAssBtn.removeEventListener("click",ShowAssingment);


    showAssBtn.addEventListener("click",()=>{
    attpPara.textContent = "Please check your attendance status";





});

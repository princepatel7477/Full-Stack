function showAlert(){
    alert("Click me Button clickedd using HTML Events");

}
document.getElementById("ClickButton").addEventListener("click", showAlert2);

function showAlert2(){
    alert("Click me Button clickedd using js Events");

}
document.getElementById("box").addEventListener("click",()=>{
    document.getElementById("box").innerText="The Box Was Clicked";
    


});

document.addEventListener("mouseover",()=>{
    document.getElementById("mouse").innerText="Mouse is Over the Box";


});
document.addEventListener("mouseout",()=>{
    document.getElementById("mouse").innerText="Mouse is Out of the Box";
    
});

document.getElementById("nameSubmit").addEventListener("click",()=>{
    console.log(document.getElementById("fullName").addEventListener("input",()=>{
        console.log(document.getElementById("fullName").value);
    }));

 } );
    




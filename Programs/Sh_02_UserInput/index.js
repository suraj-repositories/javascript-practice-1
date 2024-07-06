// how to accept the user input

// EASY WAY with a window prompt

// let userName = window.prompt("ENTER YOUR NAME : ");
// console.log(userName);

// DIFFICULT WAY HTML textbox

let userName ;

document.getElementById("myButton").onclick = function() {
    
    userName = document.getElementById("myText").value;
    console.log(userName);

    document.getElementById("myLabel").innerHTML = "hello "+userName; 
}
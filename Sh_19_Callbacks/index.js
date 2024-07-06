// callbacks = a function passed as an argument
//             to another function

//   Ensure that a function is not going
//   to run before a task is completed 
//   Helps us develop asynchronous code.
//   (When one function has to wait for another function)
//    that helps us to avoide errors and porential problems 
//    Ex. wait for a file to load



/*

let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

function sum(x, y){
    return x + y;
}
function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}

*/


sum(2, 3, displayDOM);

function sum(x, y, callback){
    let result = x + y;
    callback(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}
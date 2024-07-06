// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with 
//                       write it ,then forget about it

sayHello();
function sayHello(){
        console.log("Hello");
}

/*USING FUNCTION EXPRESSION*/

const greeting = function(){
        console.log("hello");
}
greeting();

//-----------------------------------WORKING WITH HTML------------------------------------------------

/* without using function expression*/

let count = 0;
function increaseCount(){
        count++;
        document.getElementById("myLabel").innerHTML = count;
}
function decreaseCount(){
        count--;
        document.getElementById("myLabel").innerHTML = count;
}

/*  using function expression */
let count2 = 0;
document.getElementById("increaseButton2").onclick = function(){
        count2++;
        document.getElementById("myLabel2").innerHTML = count2;
}
document.getElementById("decreaseButton2").onclick = function(){
        count2--;
        document.getElementById("myLabel2").innerHTML = count2;
}
// setInterval() = invokes a function repeatedly after a milliseconds
//                 asynchronous function (does not pause execution of program)

let count = 0 ;
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp,1000);


function countUp(){
    count++;
    console.log(count);
    if (count >= max){
        clearInterval(myTimer);
    }
}


// YOU CAN ALSO PASS THE ARGUMETNS
/*
let count = 0 ;
let max = window.prompt("Count up to what #?");
max = Number(max);

const myTimer = setInterval(countUp,1000,max);


function countUp(max){
    count++;
    console.log(count/max);
    if (count >= max){
        clearInterval(myTimer);
    }
}
*/
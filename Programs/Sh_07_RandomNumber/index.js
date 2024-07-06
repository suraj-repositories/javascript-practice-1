

// let x1 = Math.random();      // ranodm decimal numeber
// console.log(x1);

// let x2 = Math.random() * 6;     //random number between o to 5
// console.log(x2);

// let x3 = Math.round(Math.random() * 6);     // you can round the value and change in integer
// console.log(x3);

// let x4 = Math.round(Math.random() * 5)+1;     // generate a random number between zero and five
// console.log(x4);


let x ;
let y;
let z;

document.getElementById("rollButton").onclick = function(){

     x = Math.round(Math.random() * 6)+1;
     y = Math.round(Math.random() * 6)+1;
     z = Math.round(Math.random() * 6)+1;

        document.getElementById("xLabel").innerHTML =x;
        document.getElementById("yLabel").innerHTML =y;
        document.getElementById("zLabel").innerHTML =z;

}
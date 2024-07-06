// Type conversion = change the datatype of a value to another
//                    (string , numbers ,booleans) 

// let age = prompt("ETNER YOUR AGE : ");
// console.log(typeof age);

// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log("Now you are ",age," years old");


let x;
let y;
let z;

x = Number("3.14");
console.log(x , typeof x);

y = String(3.14);
console.log(y , typeof y);

z = Boolean();          // if it is empty it returns false
// z = Boolean("shub");     // otherwise it returns true -- it will useful when you need to check user fill the data or not
console.log(z , typeof z);
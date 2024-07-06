// spread operator = allows an iterable such as an
// ...               arrays or string to be expanded
//                   in place where zero or more 
//                   arguments are expected 
//                   (unpacks the elements)

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log(...numbers);
*/

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(numbers);            // error : not a number instead of this we use spread operator
let maximum = Math.max(...numbers);
console.log(maximum);
*/

/*
let userName = "shubham kumar";
console.log(...userName);
*/

let class1 = ["student#1","student#2","student#3"];
let class2 = ["student#4","student#5","student#6"];

// class1.push(class2);             // it will not work because it add the whole array as fourth element
class1.push(...class2);

console.log(class1);
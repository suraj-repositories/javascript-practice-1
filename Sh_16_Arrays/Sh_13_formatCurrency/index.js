// arrays = think of it as a varible
//          that can store multiple values

let fruits = ["Apple","Orange","Banana"];

fruits[2] = "Coconut";

// fruits.push("Lemon");
// fruits.pop();
// fruits.unshift("Mango");// add element in the begining
// fruits.shift();// removes elements from begining

// console.log(fruit);

// let length  = fruits.length;
// console.log(length);

// let index= fruits.indexOf("kiwi");
// console.log(index);

/* TO PRINT THE ARRAY */
// for(let fruit of fruits){
//     console.log(fruit);
// }

/*  TO SORT THE ARRAY IN ALPHA BARICAL ORDER */

fruits = fruits.sort();
fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}
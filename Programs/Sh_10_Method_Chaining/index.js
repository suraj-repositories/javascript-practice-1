
// Method-Chaining : calling one method after another 
//                     in one continuous line of code

let userName = "Shubham";

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// -------------------------------using mehtod chaining
let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);
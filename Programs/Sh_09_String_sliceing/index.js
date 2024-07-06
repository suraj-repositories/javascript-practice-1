// slice() extracts a section of a string
//          and returns it as a new string
//          without modifying the original string

let fullName = "Shubham kumar";
let firstName;
let lastName;

// firstName = fullName.slice(0, 7);            // index 7 is not included
// lastName = fullName.slice(8);
// console.log(firstName);
// console.log(lastName);

/* there is a better way to do this */
firstName = fullName.slice(0,fullName.indexOf(" ") );
lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName);
console.log(lastName);
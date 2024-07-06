// The Date Object is used to work with dates & tim


// let date = new Date();           // create a date object
// // let date = new Date(0);         // time begin in js 
// // let date = new Date(1000000000000);      // given milliseconds passed from begin
// // let date = new Date(2023,0,1,2,3,4,5); // year ||month(start with 0)||day||hours||minutes||seconds||milliseconds
// // let date = new Date("January 1, 2023 00:00:00");

// date = date.toLocaleString();
// console.log(date);

// document.getElementById("myLabel").innerHTML = date;

/*
let date = new Date();    
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeak = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

console.log(year);
console.log(dayOfMonth);
console.log(dayOfWeak);
console.log(month);
console.log(hour);
console.log(minute);
console.log(seconds);
console.log(ms);
*/

/*
let date = new Date(); 

date.setFullYear(2023);
date.setMonth(0);
date.setDate(31);
date.setHours(23);
date.setMinutes(56);
date.setSeconds(56);
date.setMilliseconds(0);

date = date.toLocaleString();
console.log(date);
*/

//YOU CAN CRAETE FUNCTIONS TO FORMAT DATE & TIME etc;
/*
let date = new Date(); 
console.log(formatDate(date));

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
}
*/
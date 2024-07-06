// arrow function = compact alternative to a fraditional function expression
//                      =>


// ********************without using arrow function*****************

// const greeting = function(userName){
//         console.log(`Hello ${userName}`);
// }
// greeting("shubham");

//---------------- using arrow function -----------------------

//  const greeting2 = userName =>   console.log(`Hello ${userName}`);
//  greeting2("shubham");

//  EXAMPLE #2          ---@@@@---

// ********************without using arrow function*****************

//  const percent = function(x,y){
//     return x /y * 100;
//  }
//  console.log(`${percent(75,100)}%`);

//---------------------- using arrow function-----------------------

// const percent = (x,y) => x / y * 100;
// console.log(`${percent(45,50)}%`);

//  EXAMPLE #3          ---@@@@---

// ********************without using arrow function*****************

// let grades =[100, 50, 90, 60, 30, 78];

// grades.sort(desending);
// grades.forEach(print);

// function desending(x,y){
//     return y-x;
// }
// function print (element){
//     console.log(element);
// }

//^^^^^^^^^^^^^^^^^^^^^^^USING FUNCTIONAL EXPRESSION ^^^^^^^^^^^^^^^^^^^^^^^

// let grades =[100, 50, 90, 60, 30, 78];

// grades.sort(function (x,y){
//     return y-x;
// });
// grades.forEach(function (element){
//     console.log(element);
// });

//---------------------- using arrow function-----------------------

let grades =[100, 50, 90, 60, 30, 78];

grades.sort( (x,y) =>  y-x );
grades.forEach((element) => console.log(element));
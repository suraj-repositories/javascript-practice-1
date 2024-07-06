// nested function  =  Functions inside other functions.Functions
//                     Outer functions have access to inner functions.
//                     Inner functions are "hidden" from outside the outer function.
//                     used in closures  (see next topics )

// ------------------NORMAL FUNCTION-----------------------

// let userName = "shubham";
// let userInbox = 0;

// displayUserName();
// displayUserInbox();

// function login(){
//     displayUserName();
//     displayUserInbox();
// }
// function displayUserName(){
//     console.log(`Welcome ${userName}`);
// }
// function displayUserInbox(){
//     console.log(`You have ${userInbox} new message`)
// }

//---------------------NESTED FUNCTION--------------------------

let userName = "shubham";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();
    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new message`)
    }
}

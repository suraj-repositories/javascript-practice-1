// closure = A function with preserved and private data.
//             Give you access to an outer function's scope,
//             from an inner function.



/* IN THE GIVEN EXAMPLE ANYONE CAN CHANGE YOUR CODE */
// document.getElementById("loginButton").onclick = alertUser;

// let userName = "shubham";
// let userInbox = 1;

// userInbox = 420.35;

// function alertUser(){
//     alert(`${userName} you have ${userInbox} new messages!`);
//     userInbox = 0;
// }

// LET'S MAKE IT MORE SECURE

document.getElementById("loginButton").onclick = login();

function login(){
    let userName = "shubham";
    let userInbox = 1;
    function alertUser(){
        alert(`${userName} you have ${userInbox} new messages!`);
        userInbox = 0;
    }

    return alertUser;
}

// error = object with a description of 
//         something went wrong

//          Can't open a file
//          Lose connection 
//          User types incorrect input
//          TypeError 

// throw = executes a user-defined error


// console.lag();      // throw an typeError (misspelled)

/*
try{
    console.lag();
}
catch(error){
    console.log(error);
}
*/

try{
    let x = window.prompt("Enter a = ");
    x = Number(x);

    if(isNaN(x)) throw "that is not an number";
    if(x =="") throw "that was empty!";

    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}

finally{
    console.log("this always executes")
}
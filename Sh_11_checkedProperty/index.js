
document.getElementById("myButton").onclick = function(){

    // if(document.getElementById("myCheckBox").checked){
    //     console.log("You are subscribed");
    // }
    // else{
    //     console.log("You are not subscribed");
    // }

    /*you can also store the values in the variable to make more readable*/

    // const myCheckbox = document.getElementById("myCheckBox");
    // if(myCheckbox.checked){
    //     console.log("You are subscribed");
    // }
    // else{
    //     console.log("You are not subscribed");
    // }

    /* using the radio buttons*/
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");


    if(visaBtn.checked){
        console.log("you are paying with visa");
    }
    else if(mastercardBtn.checked){
        console.log("you are paying with master card");
    }
    else if(paypalBtn.checked){
        console.log("you are paying with paypal")
    }
    else{
        console.log("you must select a payment type");
    }

}

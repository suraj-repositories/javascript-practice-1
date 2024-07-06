// toLocalString() = returns a string with a language
//                  sensetive representation of this number 

// number.toLoacalString(locale,{options});

// `local` = specify that language{undefined = default set in browser}
// `options` = object with formatting Options

let myNum = 123456.789;

// myNum = myNum.toLocaleString("en-US");      // US English
// myNum = myNum.toLocaleString("hi-IN");      // hindi
// myNum = myNum.toLocaleString("de-DE");      // standard german 

// myNum = myNum.toLocaleString("en-US",{style : "currency", currency : "USD"});
// myNum = myNum.toLocaleString("hi-IN",{style : "currency", currency : "INR"});
// myNum = myNum.toLocaleString("de-DE",{style : "currency", currency : "EUR"});

// myNum = myNum.toLocaleString(undefined,{style : "percentage"});

myNum = myNum.toLocaleString(undefined,{style : "unit",unit : "celsius"});



console.log(myNum);

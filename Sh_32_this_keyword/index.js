
// this = reference to a particular object 
//         the object depends on the immediate context 

const car1 = {
    model : "Mustang",
    color : "red",
    year : 2023,

    drive : function(){
        console.log(`You drive the car ${this.model} `);// this is the reference of object currently working it 
    },
    brake : function(){
        console.log(`You step on the brakes ${car1.model} `);   // the object name is works like this keyword
    }
}
const car2 = {
    model : "Corvette",
    color : "black",
    year : 2022,

    drive : function(){
        console.log(`You drive the car ${car2.model} `);        // this is the reference of object currently working it 
    },
    brake : function(){
        console.log(`You step on the brakes ${this.model} `);
    }
}

car1.drive();
car2.drive();
car1.brake();
car2.brake();

//  IF WE USE THIS OUTSIDE OF ANY OBJECT 
console.log(this);              // it refers the window object 
// you can change and access the particular mehod of propert

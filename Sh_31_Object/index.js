// Object = A group of properties and methods
//         properties = what an objects has
//         methods = what an object can do 
//         Use . to access properties / methods

const car = {
    model : "Mustang",
    color : "red",
    year : 2023,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes")
    }
}
const car2 = {
    model : "Corvette",
    color : "black",
    year : 2022,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes")
    }
}


console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();
car.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();
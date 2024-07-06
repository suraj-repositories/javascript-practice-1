// static = belongs to the class , not the objects
//         properties : useful for caches, fixed configuration
//         methods : userful for utility function

class Car{

    static numberOfCars =0;
    constructor(model){
        this.model = model;
        this.numberOfCars +=1;

    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");

// console.log(car1.numberOfCars);
console.log(Car.numberOfCars);          // we can access static mehods and attributes with only the class name 
                                        // we do not need to create the object

// car1.startRace();
Car.startRace();

// get = binds an object property to a function
//       when that property is accessed
// set = binds an object property to a function
//       when that property is assigned a value


class Car{
    constructor(power){
        this._gas =25;
        this._power = power;            // underscore denotes protected property
    }

    get power(){
        return `${this._power}hp`;     // this protected property is readable not writeable
    }
    get gas(){
        return `${this._gas}L`;
    }
    set gas(value){
        if(value>50){
            value =50;
        }
        if(value<0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

// car.gas = -199;
// car.gas =1000000000000000000000;
car.gas = 30 ;

// console.log(car.power+"hp");        // actually we have a better way to do this 
console.log(car.power);

console.log(car.gas);
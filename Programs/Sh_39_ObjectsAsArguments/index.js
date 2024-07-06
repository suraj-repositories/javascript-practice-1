
class Car{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;

    }
}

const car1 = new Car("Mustang" ,2023,"red");
const car2 = new Car("Corvette" ,2021,"blue");
const car3 = new Car("Lambo" ,2022,"yellow");

changeColor(car1,"gold");

displayInfo(car1);
// displayInfo(car2);
// displayInfo(car3);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car,color){
    car.color = color;
}
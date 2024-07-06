// super : Refers to the parent class.
//         commonly used to invoke constructors of a parent class 

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}
class Bird extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit",1,40);
const fish = new Fish("fish",2,20);
const bird = new Bird("bird",2,90);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(bird.name);
console.log(bird.age);
console.log(bird.flySpeed);
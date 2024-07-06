// inheritance = a child class can inhart all the methods and properties from super class

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Bird extends Animal{
    name = "bird";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const bird = new Bird();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(bird.alive);
bird.eat();
bird.sleep();
bird.fly();



// constructors = a special methods of a class, 
//                 accepts arguments and assigns properties


class Student{
    
    constructor(name,age,gpa){
        this.name = name;
        this.age= age;
        this.gpa= gpa;
    }

    study(){
        console.log(`${this.name} is studing`);
    }
}

const student1 = new Student("shubham",30,9.3);
const student2 = new Student("suraj",22,8.3);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`Hello from ${this.name}!`)
    }
}

const person = new Person("Matheus",1)
person.sayHello()
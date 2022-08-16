'use strict'

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.greetings = function(){
    console.log(`Hello.My name is ${this.name}!`)
}

// Testando o prototype
const person1 = new Person("Higor", 26)
person1.greetings()
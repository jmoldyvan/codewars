class Person{
    constructor(name){
        this.name = name
    }

    greet(otherPerson){
        return `Hello ${otherPerson}, my name is ${this.name}`
    }
}
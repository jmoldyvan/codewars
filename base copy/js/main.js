// Animal
// class Animal{
//     constructor(name,type){
//         this.name = name
//         this.type = type
//     }

//     toString(){
//         return `${this.name} is a ${this.type}`
//     }
// }

// why is THIS broken
// should return fn + '' + lm
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }
// ANSWER
// you dont return an object if you want something to print
// function NameMe(first, last, name) {
//     this.firstName = first;
//     this.lastName = last;
//     this.name = this.firstName + ' ' + this.lastName
//     return name;
// }

// class Ship{
//     constructor(draft,crew){
//         this.draft = draft;
//         this.crew = crew;
//     }
//     isWorthIt(){
//         return this.draft-(this.crew*1.5) > 20 ? true : false
//     }
// }


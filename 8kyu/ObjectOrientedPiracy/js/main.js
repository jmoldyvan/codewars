// make a class of ship with 2 constructors
// draft and crew
// create a method of isworthit that returns true if
// the draft is less than 20 withoyt crew*1.5

class Ship{
 constructor(draft, crew){
     this.draft = draft;
     this.crew=crew
 }
 isWorthIt(){
     return this.draft - 1.5 * this.crew >20
 }
}
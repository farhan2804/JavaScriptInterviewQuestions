// let person1 = {
//   firstName: "Virat",
//   lastName: "Kohli",

//   printName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// person1.printName();

// let person2={
//   firstName:"Babar",
//   lastName:"Azam",
// }
// let person3={
//   firstName:"Kane",
//   lastName:"Williomson",
// }
// person2.__proto__=person1;
// person3.__proto__=person1;

// person2.printName();

// person3.printName();
//show the null condition

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(person1)));

//function example

//constructor function
// function person(firstName,lastName){
//   this.firstName=firstName;
//   this.lastName=lastName;
// }
// //add method to prototype

// person.prototype.printName=function(){
//   console.log(this.firstName+" "+this.lastName);
// }

// //creating instance of person

// let person1=new person("virat","kohli");

// let person2=new person("kane","williomson")

// //testing the inheritance chain

// person1.printName();
// person2.printName();

//es6 classes -modern approach

class person {
  //constructor

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printName() {
    console.log(this.firstName + " " + this.lastName);
  }
}

//creating instances of the person

let person1 = new person("virat", "kohli");

let person2 = new person("kane", "williamson");

person1.printName();

person2.printName();


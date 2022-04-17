'use strict';

///////////////////////////////////////////////////
// FUNCTION CONSTRUCTOR
///////////////////////
//
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const marco = new Person('Marco', 1991);
console.log(marco);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

console.log(marco instanceof Person); // true

///////////////////////////////////////////////////
// PROTOTYPES
///////////////////////
//
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
console.log(Person.prototype);

marco.calcAge();
console.log(marco.__proto__);

Person.prototype.species = 'Homo Sapiens';
console.log(marco.species, matilda.species); // Homo Sapiens

console.log(matilda.hasOwnProperty('firstName')); // true
console.log(matilda.hasOwnProperty('species')); // false

///////////////////////////////////////////////////
// PROTOTYPE CHAIN IN BUILD-IN OBJECTS
///////////////////////
//
console.log(marco.__proto__); // {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
console.log(marco.__proto__.__proto__);
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(marco.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor); // function itself --->
// ƒ (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

console.dir(Person.prototype.constructor);
// ƒ Person(firstName, birthYear) --> with access to function prototype point to PERSON

const arr = [3, 6, 4, 5, 6, 9];
console.log(arr.__proto__); // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// contains ALL methods for Arrays
console.log(arr.__proto__ === Array.prototype); // true

///////////////////////////////////////////////////
// CODING CHALLENGE #1
///////////////////////
//

Your tasks:
1. Use a constructor function to implement a'Car'. A car has a'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them

Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h
*/
// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log();
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}km/h`);
};
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

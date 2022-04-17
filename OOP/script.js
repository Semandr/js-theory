'use strict';

///////////////////////////////////////////////////
// FUNCTION CONSTRUCTOR
///////////////////////
//
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

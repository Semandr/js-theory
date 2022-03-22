'use strict';

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
// Behind the scenes we NOT coping object itself, but only memory reference
// Now it is TWO different names for the SAME THING, same object.
marriedJessica.lastName = 'Davis';
console.log(`Before marriage:`, jessica); // last name = Davis
console.log(`After marriage:`, marriedJessica); // last name = Davis

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // new object with same properties
// BUT this copy only for 1 level, not for object inside object
jessicaCopy.age = 30; // change value only for 'jessica3'
jessicaCopy.family.push('Mary'); // change also 'jessica2' array 'family'
console.log(jessica2);
console.log(jessicaCopy);

'use strict';

// FUNCTION RETURN OTHER FUNCTION

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHye = greet('Hey');
greeterHye('Marco');
greeterHye('Maria');

greet('Hello')('Andrea');

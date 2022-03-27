'use strict';

// STRINGS PART 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

// Strings is 0-based like an arrays
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('Boeing'[0]);

console.log(airline.length); // 16-number
console.log('Boeing'.length); // 6

// METHODS OF STRINGS
console.log(airline.indexOf('r')); // 6 - position of 'r' - first occurence
console.log(airline.lastIndexOf('r')); // 10 - last position
console.log(airline.indexOf('Portugal')); // 8 - position of begin

console.log(airline.slice(4)); // - position when extraction will has
console.log(airline.slice(4, 7)); // begin, end of slice = 'Air', position #7 is NOT using in this method

// Extracting first word
console.log(airline.slice(0, airline.indexOf(' '))); // TAP

// Extracting last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Deleting the ' ' and result is 'Portugal'

// Extract last symbols
console.log(airline.slice(-2)); // al (From the end of string)
console.log(airline.slice(1, -1)); // 'AP Air Portuga'

// Practice
function checkMiddleSeat(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got the middle seat 🪑`);
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Marco')); // What JS does behind the scenes. And this obj has many methods.

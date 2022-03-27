'use strict';

// STRINGS PART 3

// Split and Join methods
console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
console.log('Pinco Pallino'.split(' '));

const [firstName, lastName] = 'Pinco Pallino'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Pinco PALLINO

function capitalazeName(name) {
  const names = name.split(' ');
  const namesUp = [];
  for (const n of names) {
    // namesUp.push(n[0].toUpperCase() + n.slice(1));
    namesUp.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUp.join(' '));
}

capitalazeName('jessica ann smith davis');
capitalazeName('mario rossi');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '*').padEnd(35, '+'));

// Pratical padding
function maskCreditCard(num) {
  const str = num + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(25423095834095820));
console.log(maskCreditCard('25423043523452345'));

// Repeat method
const message2 = 'Bad weather... All departures Delayed... ';
console.log(message2.repeat(5));

function planesInLine(n) {
  console.log(`There are ${n} planes in line ${'🛩 '.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

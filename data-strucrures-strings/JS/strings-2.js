'use strict';

// STRINGS PART 2
const airline = 'TAP Air Portugal';

// Changing the case of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'mArCO';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // 'Marco'

function correctFirsName(firstName) {
  const correction = firstName.toLowerCase();
  const correct = correction[0].toUpperCase() + correction.slice(1);
  console.log(correct);
}
correctFirsName('pIncO');

// Comparing email
const email = 'hello@pinco.io';
const loginEmail = '  Hello@Pinco.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replace part of string
const priceGB = '288,97￡';
const priceUS = priceGB.replace('￡', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// ALL strings methods are Case Sensitive

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('333')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the new Airbus family');

// Practice exercise
function checkBaggage(items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed to board`);
  } else {
    console.log(`Welcome a board!`);
  }
}

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`I have socks and camera`);
checkBaggage(`I have some snacks and a gun for protection`);

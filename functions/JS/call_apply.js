'use strict';

// CALL AND APPLY METHDOS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Pinco Pallino');
lufthansa.book(635, 'Mario Rossi');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // not wokr

// CALL method
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 244, 'Mary Cooper');
console.log(lufthansa);
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};
book.call(swiss, 123, 'Peter Storman');

// APPLY method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

// BIND method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Stewen Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Greet');
bookEW23('Pinco di Pallino');

// Winth EventListeners .bind()
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addIVA = addTax.bind(null, 0.23);
// addIVA = value => value + value * 0.23
console.log(addIVA(100)); // 123

// Rewrite addTax function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addIVA2 = addTaxRate(0.23);
console.log(addIVA2(1000));

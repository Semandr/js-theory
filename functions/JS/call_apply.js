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

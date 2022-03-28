'use strict';

// WORKING WITH FUNCTIONS
// ==============================

// DEFAULT PARAMETRS

const bookings = [];

function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 100);

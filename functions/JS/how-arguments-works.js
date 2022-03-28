'use strict';

const flight = 'LH234';
const mario = {
  name: 'Mario Rossi',
  passport: 4325098433,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 4325098433) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
}
// checkIn(flight, mario);
// console.log(flight);
// console.log(mario);

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}
newPassport(mario);
checkIn(flight, mario);

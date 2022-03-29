'use strict';

// CALLBACKS
// Regular functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Accept callback
// Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Another simple examples of callback
const high5 = function () {
  console.log('👋🏻');
};
document.body.addEventListener('click', high5);
//
['Jonas', 'Martina', 'Marco'].forEach(high5);

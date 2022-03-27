'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPizza(mainIngredient, ...othersIngredients) {
    console.log(
      `Here is your pizza with ${mainIngredient} and ${othersIngredients}`
    );
  },
};

// MAPS (iterations)
// --------------------------------

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 👍🏻'],
  [false, 'Try again'],
]);
console.log(question);
// This is similar to
console.log(Object.entries(openingHours));

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); // similar to array of arrays, Map

// Iteration. For...of loop is available for maps
// Quiz app:
// Log to console question itself
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer: '));
if (answer === 3) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
// Or
console.log(question.get(question.get('correct') === answer));

// Convert Map to array
// console.log([...question]) === console.log([...question.entries()]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

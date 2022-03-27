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

// SETS
// --------------------------------
// set is basically just a collection of unique values.
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
// the order of elements in the set is irrelevant.

// Size of Set
console.log(ordersSet.size);

// Check if a certain element is in a set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Pompelmo')); // false

// Add new elements to Set
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Delete element from the Set
ordersSet.delete('Risotto');
console.log(ordersSet);

// In sets there are actually no indexes.
// Set is iterable
for (const i of ordersSet) console.log(i);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // unpack to unique array
console.log(staffUnique); // unique array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // size of Set = 3

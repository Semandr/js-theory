'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// SPREAD OPERATOR
// ===============================

// Use the spread operator to unpack one array into another
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

// Use spread operator when we pass arguments into a function
console.log(...newArr); // log individual elements of the array

// Creating a new array, without manipulation of original array
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

// Copy array, creating a shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables
const str = 'Mario';
const letters = [...str, ' ', 'R.'];
console.log(letters);

// Real-world exapmle
const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];

restaurant.orderPasta(...ingredients);

// Objects ES2020
const newRestaurant = {
  ...restaurant,
  founder: 'Giuseppe Rossi',
  foundedIn: 1998,
};
console.log(newRestaurant);

// Shallow copy of object using Spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant);
console.log(restaurantCopy);

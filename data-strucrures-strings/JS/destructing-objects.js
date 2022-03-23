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
};

// DESTRUCTURING OBJECTS
// **********************************
const { name, categories, openingHours } = restaurant;
console.log(name, openingHours, categories);

// Change names of variables:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Set default values:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables:
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // a = 23, not 111 anymore and b = 7

// Nested objects
// Destucturing nested obj with new names
const {
  fri: { open: apre, close: chiude },
} = openingHours;
console.log(apre, chiude); // 11 and 23

// Pratical examples
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Vento, 25',
  mainIndex: 2,
  starterIndex: 2,
});

// Here will been used defaul function values from object
restaurant.orderDelivery({ address: 'Via del Sole, 5', starterIndex: 1 });

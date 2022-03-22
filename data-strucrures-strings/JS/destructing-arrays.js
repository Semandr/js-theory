'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};

// DESTRUCTURING ARRAY
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories; // It is take only two first elements from original array
// const [first, , third] = restaurant.categories; // It is take only first element and third from original array
let [main, , secondary] = restaurant.categories; // It is take only first element and third from original array
console.log(main, secondary);
[main, secondary] = [secondary, main]; // switch the variables
console.log(main, secondary); // variables are switched

// Destructuring using method 'order'
restaurant.order(2, 0); // here we recive an array with 2 el of mainMenu and 0 (first) element of mainMenu
// Doing destructuring
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter} and ${mainCourse}`); // 'Garlic Bread and Pizza

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // number '2' and array [5, 6]
const [i, , [j, k]] = nested; // destructuring inside of destructuring
console.log(i, j, k); // three separate varibales = 2, 5 and 6

// Default values:
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r = undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // output 8, 9 and 1 ! Because there '1' is a defaul value from unexisting elements
// this is can be useful when we can gat some data from API

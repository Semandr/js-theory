'use strict';

// VARIABLES ====================

console.log(me); // -> undefined
// console.log(job); -> error
// console.log(year); -> error

var me = 'Andriy';
let job = 'student';
const year = 1981;

// FUNCTIONS ====================

console.log(addDecl(2, 3)); // -> normal result 5
// console.log(addExpr(2, 3)); // -> error
console.log(addArrow); // -> undefined

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//
// EXAMPLE ======================

console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

// Conclusion: NEVER use 'var' and use const or let.
// First we need to declare varible and after use it.
// Call and use function after declaration
// Const and led variables do not create properties in global Window object, such as 'var'.
var x = 1;
console.log(x === window.x); // true

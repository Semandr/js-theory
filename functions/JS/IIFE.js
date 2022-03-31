'use strict';

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function () {
  console.log(`This is never run again`);
})();

// Arrow
(() => console.log(`This is never run again, arrow function`))();

'use strict';
const john = {
  firstName: 'John',
  year: 1991,
  calcAge() {
    console.log(2022 - this.year);

    // Solution 1 ===================
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial(); // true

    // Solution 2 ====================
    const isMillenial = () => {
      console.log(this); // points to parent object
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // true
  },
  greet: () => {
    console.log(this); // Windown object
    console.log(`Hey ${this.firstName}`);
  },
};
john.greet(); // -> 'Hey undefined'
john.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // we can see that in 'Arguments' array in console

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); // Uncaught ReferenceError: arguments is not defined
// 'Arguments' keyword exist only for normal functions, NOT for arrow-function.

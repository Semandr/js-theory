'use strict';

console.log(this); // -> Window object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // -> undefined
};
calcAge(1981);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // -> Window object
};
calcAgeArrow(1981);

const mario = {
  year: 1985,
  calcAge() {
    console.log(this); // -> whole object 'mario'
    console.log(2022 - this.year); // -> normal resul = 37
  },
};
mario.calcAge();

const maria = { year: 2000 };
maria.calcAge = mario.calcAge; // copy of method
maria.calcAge(); // -> normal resul = 22, 'this' in that case is method of 'maria' object

const f = mario.calcAge; // copy of method into simple variable
f(); // -> UNDEFINED in regular function call

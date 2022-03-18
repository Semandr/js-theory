'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'mr. Marco';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Andriy';
calcAge(1981);

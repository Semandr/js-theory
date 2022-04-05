'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovements(movements) {
  containerMovements.innerHTML = '';

  movements.forEach((el, i) => {
    const type = el > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${el}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

const createUserName = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
  });
};
createUserName(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// SIMPLE ARRRAY METHODS

// SLICE METHOD - NOT mutate original array

/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e'] - new array with only last element from original array
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] - shallow copy
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e'] - same result with SPREAD operator

// SPLICE METHOD - YES mutate original array

// console.log(arr.splice(2)); // ['c', 'd', 'e']
arr.splice(-1); // last element
console.log(arr.splice(1, 2)); //  ['b', 'c']
console.log(arr); // ['a', 'd']

// REVERSE METHOD - YES, change original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j'] - original array IS CHANGED
// let string = 'PincoPallino';
// console.log(string.reverse()); // NOT WORKING -> error

// CONCAT METHOD
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // same result = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN METHOD
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j STRING
console.log(letters.join(', '));
console.log(letters);
let numbers = [1, 2, 3];
console.log(numbers.join(' ')); // STRING '1 2 3'



/////////////////////////////////////////////////
// AT METHOD

// This method work also with strings!
const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// Last element from the array
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64

// Strings!
console.log('Marco'.at(0)); // 'M'



/////////////////////////////////////////////////
// forEach() METHOD

// forOf method for comparing
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// same result but with forEach() method
console.log('----- forEach() -----');
movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(
      `Movement ${index + 1}: You deposited ${movement} from ${array}`
    );
  } else {
    console.log(
      `Movement ${index + 1}: You withdrew ${Math.abs(movement)} from ${array}`
    );
  }
});




/////////////////////////////////////////////////
// forEach() METHOD with MAPS

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}. And ${map}`);
});

// Output like: USD: United States dollar. And [object Map]

/////////////////////////////////////////////////
// forEach() METHOD with SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}. And ${map}`);
});
// _ === value that completely Unnecessary
// Output like: USD: USD. And [object Set]




/////////////////////////////////////////////////
// MAP method
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

// for fun forOf method
const movementsUSDfor = [];
for (const iterator of movements) {
  movementsUSDfor.push(iterator * eurToUsd);
}
console.log(movementsUSDfor); // same result as 'movementsUSD', but another phylosofy

/////////
const movDescriptions = movements.map(
  (el, i, arr) =>
    `Movement ${i + 1}: You ${el > 0 ? 'deposited' : 'withdrew'} ${el}`
);
console.log(movDescriptions);



*/

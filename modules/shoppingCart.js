// Exporting module
console.log(`Exporting module`);

// Blocking code
// console.log(`Start fetching users`);
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log(`Finish fetching users`);

const shoppingCost = 10;
export const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} of ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} of ${product} added to cart`);
}

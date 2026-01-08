// Method 1: Swapping using a third variable

let a = 10;
let b = 20;

console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swap logic
let temp = a; // temp = 10, a = 10
a = b; // a = 20, b = 20
b = temp; // b = 10

console.log(`After swapping: a = ${a}, b = ${b}\n`);

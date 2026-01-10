// Method 1: Swapping using a third variable

let a = 10;
let b = 20;

console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swap logic
let temp = a; // temp = 10, a = 10
a = b; // a = 20, b = 20
b = temp; // b = 10

console.log(`After swapping: a = ${a}, b = ${b}\n`);

// Method 2: Swapping without using a third variable
{
  let a = 5;
  let b = 7;

  console.log(`Before swapping: a = ${a}, b = ${b}`);

  // Swap Logic
  // (initially a = 5, b = 7)
  a = a + b; // a = 12, b = 7
  b = a - b; // b = 5, a = 12
  a = a - b; // a = 7, b = 5

  console.log(`After swapping: a = ${a}, b = ${b}`);
}

// Method 3: Destructuring assignment

{
  let a = 30;
  let b = 50;

  console.log(`Before swapping: a = ${a}, b = ${b}`);

  [a, b] = [b, a];

  console.log(`After swapping: a = ${a}, b = ${b}`);
}

let a = 10;
let b = 20;

console.log("Sum of 10 and 20 " + a + b); // 1020

// If + sees a string, it switches to string concatenation and goes left to right.

console.log("Sum of 10 and 20 is " + (a + b));

// type coercion
console.log("1" + 1); // 11

console.log("1" - 1); // 0

let num = 5;
let str = "10";
let result = num + str; // The number 5 is coerced to the string "5"
console.log(result);   // Output: "510" (string concatenation)

// Explicit conversion
let value = 10;
let explicitStr = String(value); // explicitStr is "10"


/*
Type coercion can be categorized into two main types:

. Implicit Coercion: JavaScript automatically converts types behind the scenes during
operations like arithmetic, comparisons, or logical contexts.

. Explicit Coercion (Type Casting): The developer intentionally converts types using
built-in functions or methods like Number() , String() , Boolean() , parseInt() , or
.tostring().

*/
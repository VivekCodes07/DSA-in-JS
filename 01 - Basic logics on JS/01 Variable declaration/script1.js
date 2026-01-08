// 1. Sum of two integers
let a = 10;
let b = 20;

console.log(a + b);

// Relation between integer and string

// Number and String values
let num = 10;        // number (integer)
let str = "10";     // string

// Display their types
console.log(typeof num); // "number"
console.log(typeof str); // "string"

// Using + operator
// + performs string concatenation if one operand is a string
console.log(num + str);  // "1010"

// Using arithmetic operators (-, *, /)
// JavaScript automatically converts the string to a number

console.log(num - str);  // 0
// Explanation: 10 - "10" → 10 - 10 → 0

console.log(num * str);  // 100
// Explanation: 10 * "10" → 10 * 10 → 100

console.log(num / str);  // 1
// Explanation: 10 / "10" → 10 / 10 → 1

// Explicit type conversion (recommended)
let convertedStr = Number(str);

console.log(num - convertedStr); // 0
console.log(num * convertedStr); // 100
console.log(num / convertedStr); // 1

// Example where conversion fails
let invalidStr = "abc";
console.log(num - invalidStr); // NaN (Not a Number)

// Summary:
// - + prefers string concatenation
// - -, *, / convert strings to numbers
// - Explicit conversion avoids bugs

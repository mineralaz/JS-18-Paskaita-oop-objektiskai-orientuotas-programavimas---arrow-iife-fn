"use strict";
console.log("iife.js");

// immediately invoked function ekspression
const name1 = "James";

const sum = (a, b) => {
  const sum = a + b;
  console.log("sum ===", sum);
  return sum;
};
sum(2, 5);

// IIFE
// (() => {})()
((n1, n2) => {
  const sum = n1 + n2;
  if (!n2) return;
  console.log("sum ===", sum);
  return sum;
})(2, 5);

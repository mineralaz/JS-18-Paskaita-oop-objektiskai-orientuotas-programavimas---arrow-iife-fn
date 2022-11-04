"use strict";
console.log("movie.js");

const movie1 = new Movie("Water", 2000, "John Wicker", 1000000, 3195724);
const movie2 = new Movie("Grass", 2020, "Will Bead", 3195724, 1000000);
console.log("movie1 ===", movie1);
console.log("movie2 ===", movie2);
movie1.getProfitTimes();

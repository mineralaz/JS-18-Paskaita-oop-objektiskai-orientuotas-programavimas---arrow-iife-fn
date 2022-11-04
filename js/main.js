"use strict";
console.log("main.js");

const st1 = new Student("James", 2, "London");
// sukurti metoda addCourse(), kuris prides viena kursa prie studento esamu
st1.addCourse("Math");
console.log("st1 ===", st1);
st1.removeCourse("Math");
console.log("st1 ===", st1);

const st2 = new Student("Jane", 4, "Kaunas");
st2.addCourse("Gymnastics");
console.log("st2 ===", st2);

"use strict";
console.log("student.js");
class Student {
  // constructor vyksta sukuriant nauja objekta su new
  constructor(argName, argYear, argHomeTown) {
    console.log("student created");
    this.studList = document.getElementById("studs");
    this.name = argName;
    this.year = argYear;
    this.town = argHomeTown;
    this.printStudent();
    this.courses = [];
  }
  getMathMarks() {
    return this.courses[0].avg();
  }
  sayHi() {
    // studentas iskonsolina ir pasisako apie save
    // sveiki, as James, is London, esu 2 kurse
    const helloString = `Sveiki, as esu ${this.name} is ${this.town}, esu ${this.year} kurse`;
    console.log("helloString ===", helloString);
    return helloString;
  }
  printStudent() {
    const liEl = document.createElement("li");
    liEl.textContent = this.sayHi();
    this.studList.append(liEl);
  }
  addCourse(subject) {
    this.courses.push(subject);
    console.log(subject, "was added to", this.name);
  }
  // removeCourse() -
  removeCourse(subject) {
    // pasitikrinti ar yra toks kursas kursuose
    if (this.courses.includes(subject)) {
      // jei yra - pasalinam ir pranesam su konsole
      this.courses = this.courses.filter((course) => course !== subject);
      console.log(subject, "has been removed from", this.name);
      return this.courses;
    } else {
      // jei nera - pranesam, kad tokio nera
      console.log(subject, "has not been found between courses");
    }
  }
}

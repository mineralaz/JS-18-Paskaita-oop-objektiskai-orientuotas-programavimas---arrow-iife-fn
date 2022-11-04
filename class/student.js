class Student {
  // constructor vyksta sukuriant nauja objekta su new
  constructor(argName, argYear, argHomeTown) {
    // console.log("hello");
    this.name = argName;
    this.year = argYear;
    this.town = argHomeTown;
    this.printStudent();
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
    studsEl.append(liEl);
  }
}
const studsEl = document.getElementById("studs");
const st1 = new Student("James", 2, "London");
// console.log("st1 ===", st1);
// st1.sayHi();

const st2 = new Student("Jane", 4, "Kaunas");

// console.log("st2 ===", st2);

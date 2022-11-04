// Sukurti klase Employee. employee turi firstName, lastName, hourlyPay. Sukuriant nauja Employee sukurti jam papildoma savybe hoursWorked ir prilyginti ja 0.
class Employee {
  constructor(firstNameArg, lastNameArg, hourlyPayArg) {
    this.firstName = firstNameArg;
    this.lastName = lastNameArg;
    this.hourlyPay = hourlyPayArg;
    this.hoursWorked = 0;
  }
  // Employee prideti metoda work() kuris prideda tiek valandu prie hoursWorked, kiek paduodam i argumenta.
  work(hours) {
    const workHours = (this.hoursWorked = this.hoursWorked + hours);
    console.log("workHours ===", workHours);
    return workHours;
  }
  // sukurti metoda calcPay() kuris paskaiciuoja kiek darbuotojui priklauso pinigu uz isdirbtas valandas.
  calcPay() {
    let sumForWorkHours = this.hoursWorked * this.hourlyPay;
    console.log("sumForWorkHours ===", sumForWorkHours);
    return sumForWorkHours;
  }
  // sukurti metoda payForWork() kuris grazina kiek pinigu sumoketi ir nunulina valandas (hoursWorked)
  payForWork() {
    this.calcPay();
    this.hoursWorked = 0;
  }
}

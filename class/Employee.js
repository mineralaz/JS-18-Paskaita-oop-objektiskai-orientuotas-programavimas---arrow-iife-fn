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
    this.hoursWorked += hours;
    console.log(`${this.firstName} has worked for ${this.hoursWorked} hours`);
  }
  // sukurti metoda calcPay() kuris paskaiciuoja kiek darbuotojui priklauso pinigu uz isdirbtas valandas.
  calcPay() {
    let pay = this.hoursWorked * this.hourlyPay;
    return pay;
  }
  // sukurti metoda payForWork() kuris grazina kiek pinigu sumoketi ir nunulina valandas (hoursWorked)
  payForWork() {
    let salary = this.calcPay();
    this.hoursWorked = 0;
    return salary;
  }
}

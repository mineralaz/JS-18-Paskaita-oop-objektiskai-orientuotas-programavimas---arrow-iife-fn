"use strict";
console.log("employee.js");

const worker1 = new Employee("Liudas", "Vasaris", 10);
const worker2 = new Employee("Ona", "Krukglia", 5);

worker1.work(48);
worker2.work(50);
console.log("worker1.hoursWorked ===", worker1.hoursWorked);
console.log("worker2.hoursWorked ===", worker2.hoursWorked);
console.log("worker1.calcPay() ===", worker1.calcPay());
console.log("worker2.calcPay() ===", worker2.calcPay());
console.log("w1 payForWork() ===", worker1.payForWork());
console.log("w2 payForWork() ===", worker2.payForWork());

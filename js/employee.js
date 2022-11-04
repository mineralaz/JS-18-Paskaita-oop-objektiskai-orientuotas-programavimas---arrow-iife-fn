"use strict";
console.log("employee.js");

const worker1 = new Employee("Liudas", "Vasaris", 10);
console.log("worker1 ===", worker1);
worker1.work(48);
console.log("worker1 ===", worker1);
worker1.work(60);
console.log("worker1 ===", worker1);
worker1.calcPay();
console.log("worker1 ===", worker1);
worker1.payForWork();
console.log("worker1 ===", worker1);

const Employee = require('./app/models/Employee');

const Vasile = new Employee('Vasile', 'Ioan', 45, 'Sofer', 1, 2500);
const Leo = new Employee('Leo', 'Brid', 34, 'Developer', 15, 2500);

console.log(Vasile.getAge());
console.log(Vasile.getSalary());
console.log(Vasile.getPayday());

console.log(Leo.getAge());
console.log(Leo.getSalary());
console.log(Leo.getPayday());

// 4

const arr = [1, -2, 6, -7, 10, 9, 14, true, false, null, undefined];

// Filtrati array-ul astfel incat sa obtineti doar valorile numerice.
const onlyNumbers = arr.filter((item) => typeof item === 'number');
console.log(onlyNumbers);

// Modificați array-ul rezultat înmulțind fiecare valoare cu 10.
const x10 = onlyNumbers.map((item) => item * 10);
console.log(x10);

// Afișați suma tuturor numerelor rezultate într-o variabila result.
const result = x10.reduce((x, y) => x + y);
console.log(result);

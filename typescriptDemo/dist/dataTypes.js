"use strict";
let Lname = 'Murillo';
//Lname = 10;
Lname.toUpperCase();
console.log(Lname);
let age = 21;
//age = "si"
age = 21.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
let depList;
empList = ["Murillo1", "Murillo2", "Murillo3"];
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
//swapNumbs[2];
let department;
department = "IT";
department = 10;

let Lname : string = 'Murillo';
//Lname = 10;
Lname.toUpperCase();
console.log(Lname);

let age:number = 21;
//age = "si"
age = 21.5
let dob = "25"
let result = parseInt(dob)

let isValid : boolean = false;
console.log(isValid)

let empList : string[];
let depList : Array<string>;
empList = ["Murillo1", "Murillo2", "Murillo3"];
let numList : number[];
numList = [1,2,3,4,5];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum)

const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;

let swapNumbs : [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number): [number, number] {
    return  [num2, num1]
}
swapNumbs = swapNumbers(10,20);
swapNumbs[0];
//swapNumbs[2];

let department: any;
department = "IT";
department = 10;


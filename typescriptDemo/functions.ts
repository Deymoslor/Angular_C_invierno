function add(num1: number, num2: number, num3?: number) {
    return num3 ? num1 + num2 + num3 : num1 + num2
}
//function addtype(num1: number, num2: number){
   // num1 + num2;
//}
console.log(add(1,2))

const sub = (num1: number, num2: number, num3=10): number => num1 - num2 - num3;
console.log(sub(2,3));

const mult = function (num1: number, num2: number): number {
    return num1 * num2;
} 


function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a,b) => a + b, 0)
}
let numbers: number[] = [1,2,3,4,5];
console.log(add2(0,0, ...numbers))

function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}
let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d"]);
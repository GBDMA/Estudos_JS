//IEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; //number

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0



console.log(num1);
console.log(Number.isInteger(num1))

//num1 = parseFloat(num1.toFixed(2)); Conta as casa decimais
// console.log (num1.toFixed(2)) arredonda o numero
// console.log(num1.toString() + num2)
// num1 = num1.toString(); converção de number para string;
// console.log (num1.toString(2))
// console.log (Number.isInteger(num1)) para saber se o numero e interio ou flutuante
/*let temp = num1 * 'Ola';
console.log (Number.isNaN(temp)); para saber se e um numero ou não */
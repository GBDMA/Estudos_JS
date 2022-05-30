/*
Primitivos (imutavéis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados.
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
<---------------------------------------------------------------------------------------------------------------->

Referencia (mutável) - array, object, fuction - Passados por referencia.

let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push (4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz')
console.log(c)


*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a};

a.nome = 'João';

console.log(a);
console.log(b);

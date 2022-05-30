/*
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 29.667971215755585*/

const nome = 'Gabriel';
const sobrenome = 'Bento';
const idade = 21;
const peso = 94;
const alturaEmM = 1.78;
let imc; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

// +
console.log (nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');

// template strings
console.log (`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log (`${nome} nasceu em  ${anoNascimento}.`);

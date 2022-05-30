let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
const varATemp = varA; //variavel temporaria

varA = varB;
varB = varC;
varC = varATemp;*/

[varA, varB, varC] = [varB, varC, varA];

console.log (varA, varB, varC);


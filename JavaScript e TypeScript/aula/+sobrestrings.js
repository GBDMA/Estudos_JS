//               01234567
let umaString = "Um texto";

console.log (umaString[4]); // so mostra o que tem dentro do indice, se passar da undefined
console.log (umaString.charAt(8)); // se sair do indice da um valor vazio
console.log (umaString.concat(' ','em', ' ','um', ' ', 'lindo dia.')); // contatena os valores 
console.log (`${umaString} em um lindo dia.`); // utilizando template melhor forma


console.log (umaString.indexOf('texto')); // para saber aonde começa o indice
console.log (umaString.LastindexOf('m', 3)); // a buscar de tras para frente


console.log (umaString.match (/[a-z]/g)); // e uma expressão regular, mostra todas as letras minusculas /O g E UM ARRAY./


console.log (umaString.search(/[a-z]/g)) //sempre retorna o indice


console.log (umaString.replace(/r/g, 'l')); // Substituição


console.log (umaString.length); // Retorna o tamanho do indice


console.log (umaString.split(' ', 2)); //adiciona e substitui


console.log (umaString.toUpperCase()); // TUDO MAIUSCULO

console.log (umaString.toLowerCase());  // tudo minusculo
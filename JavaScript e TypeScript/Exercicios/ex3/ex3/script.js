var numero = Number(prompt ('O seu numero é:'));
var numeroTitulo = document.getElementById('numero-titulo');
var texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}<p> <br >`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}<p> <br >`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} <p> <br >`;
texto.innerHTML += `<p> Arredonda para baixo: ${Math.floor(numero)} <p> <br >`;
texto.innerHTML += `<p> Arredonda para cima: ${Math.ceil(numero)} <p> <br >`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} <p>`;

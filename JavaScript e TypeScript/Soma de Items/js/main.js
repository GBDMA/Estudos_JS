// Selecionar input text
// Selecionar input Number
// Selecionar Botão
// Selecionar div 
// Selecionar ul

/* Apresentar uma Lista de items e numeros e a soma dos números */

const inputItem = document.querySelector('.input-item');
const inputNumber = document.querySelector('.input-number');
const btnTexto = document.querySelector('.btn-text');
const btnNumero = document.querySelector('.btn-num')
const resultado = document.querySelector('.result');
const tarefas = document.querySelector('.tarefas');


function criaTarefa(textoInput) {
    console.log(textoInput);
};
btnTexto.addEventListener('click', function(e){
    if(!inputItem.value) return;
    criaTarefa(!inputItem.value);
});

btnNumero.addEventListener('click', function(e){
    if(!inputNumber.value) return;
    criaTarefa(!inputNumber.value)
});
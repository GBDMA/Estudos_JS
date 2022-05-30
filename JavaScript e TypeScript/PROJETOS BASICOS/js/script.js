function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const total = document.querySelector('.total')

    const pessoas = [];

  function recebeEventoForm (evento) {
      evento.preventDefault();
    const item = form.querySelector('.item');
    const valor = form.querySelector('.valor');

    

    pessoas.push({
        item: item.value,
        valor: valor.value,

    });
    

    console.log(pessoas);

    resultado.innerHTML += `<p>${item.value} ${valor.value} ${total.value}<p>`;

  }  
    form.addEventListener('submit', recebeEventoForm,);
}
  function soma() {
      valor + valor == Number(total);
    }
meuEscopo();
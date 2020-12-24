// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('[href^="#"]');

function addAtivo(event){

  event.preventDefault();
  event.currentTarget.classList.toggle('ativo');
}

linksInternos.forEach( (item) => {
  item.addEventListener('click', addAtivo);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const body = document.querySelectorAll('body *');

// Antepenultimo exercicio
// function mostrarElementos(event){

//   event.preventDefault();
//   console.log(event.target);
// }

// function mostrarElementos(event){

//   event.preventDefault();

//   console.log("Removido: ");
//   console.log(event.target);
//   event.target.remove();
// }

// body.forEach( (item) => {
//   item.addEventListener('click', mostrarElementos);
// });

// Penultimo exercicio
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyboard(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleKeyboard);

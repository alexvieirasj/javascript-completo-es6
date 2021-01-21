// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const section = document.querySelectorAll("section p");

let arrayParagrafo = Array.from(section);

const valorTotal = arrayParagrafo.reduce((acumulador, valor) => {
    
    //console.log(valor.innerHTML.split(''))
    const valorSomado = valor.innerHTML.split('').length;
    return acumulador + valorSomado; 
 }, 0);
 
 console.log(valorTotal);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento; 
  }
  
  console.log(criarElemento('li', 'azul', 'Esse é o conteudo'))
  
  
  // Crie uma nova função utilizando a anterior como base
  // essa nova função deverá sempre criar h1 com a
  // classe titulo. Porém o parâmetro conteudo continuará dinâmico
  
  const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
  
  const cursosJS = h1Titulo('Cursos de JavaScript')
  const cursosHTML = h1Titulo('Cursos de HTML')
  
  console.log(cursosJS, cursosHTML)
// Adicione a classe ativo a todos os itens do menu
const addClasseAtivo = document.querySelectorAll('ul:first-child');
const arrayLi = Array.from(addClasseAtivo[0].children);

arrayLi.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
arrayLi.forEach((item, index) => {
  
  if(index !== 0){
    item.classList.remove('ativo');
  }
});

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');

imagens.forEach((item, index) => {

  if(item.hasAttribute('alt')){
    console.log(`A imagem ${index} tem o ALT`);
  }
});

// Modifique o href do link externo no menu

const linkInterno = document.querySelector('[href^="https://www.origamid.com/"]');
linkInterno.setAttribute('href', '#Modificado');

console.log(linkInterno);
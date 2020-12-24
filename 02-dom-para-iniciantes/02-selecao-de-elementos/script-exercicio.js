// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');

imagens.forEach(function(item){
  console.log(item);
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const inicioImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(inicioImagens);

// Selecione todos os links internos (onde o href começa com #)
const linkExternos = document.querySelectorAll('[href^="#"]');

linkExternos.forEach(function(item){
  console.log(item);
})

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const ultimoParagrafo = document.querySelector('p:last-child');
console.log(ultimoParagrafo);

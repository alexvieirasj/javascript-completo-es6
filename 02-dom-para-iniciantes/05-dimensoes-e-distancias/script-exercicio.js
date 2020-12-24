// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem.offsetTop);


// Retorne a soma da largura de todas as imagens

function somaLargura() {

  const imagens = document.querySelectorAll('img');
  let soma = 0;

  imagens.forEach((item) => {

    soma += item.offsetWidth;
  });

  console.log(soma);
}

window.onload = function () {
  somaLargura();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linkExternos = document.querySelectorAll('a');

linkExternos.forEach((item) => {

  if (item.offsetWidth < 48 || item.offsetHeight < 48) {
    console.log('Link não está no padrão Google ' + item);
  }

});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


const small = window.matchMedia('(max-width: 720px)').matches;

if (small) {
  document.querySelector('.menu').classList.add('menu-mobile');
}
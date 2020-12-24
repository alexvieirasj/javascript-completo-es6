// Retorne o url da página atual utilizando o objeto window
var url = location.href;

// Seleciona o primeiro elemento da página que
// possua a classe ativo
var elementoAtivo = document.querySelector(".ativo").innerHTML;


// Retorne a linguagem do navegador
var linguagem = navigator.language;

// Retorne a largura da janela
var larguraPagina = innerWidth;

console.log(`Url: ${url} Classe Ativo: ${elementoAtivo} Linguagem: ${linguagem} Largura da Página: ${larguraPagina}`);
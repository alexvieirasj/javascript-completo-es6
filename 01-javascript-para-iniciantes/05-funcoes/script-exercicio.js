// Crie uma função para verificar se um valor é Truthy

function testaValor(valor){
    return !!valor;
}

console.log(testaValor(true));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
    return lado * 4;
}

console.log(`Perímetro do Quadrado: ${perimetroQuadrado(5)}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Alex', 'Vieira'));

// Crie uma função que verifica se um número é par

function verificaPar(numero){

    if(typeof numero !== 'number') {
        return `Informe um número!`;
    } else if (numero % 2 === 0){
        return `É par`;
    } else {
        return `É ímpar`;
    }
}

console.log(verificaPar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(valor){

    return `O tipo de dado é ${typeof valor}`;
}

console.log(tipoDeDado(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log('Alex Vieira');
});

var totalPaises = 193;
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }

  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }

  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  
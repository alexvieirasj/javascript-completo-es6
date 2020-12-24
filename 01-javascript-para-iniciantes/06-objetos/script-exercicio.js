// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
    nome: 'Alex',
    sobrenome: 'Vieira'
}

console.log(console.table(dados));

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.mostrarNomeCompleto = function() {
    return `Nome completo: ${this.nome} ${this.sobrenome}`
}

console.log(dados.mostrarNomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;

console.log(carro.preco);
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    habilidade: function(valor) {

        if(valor === 'Homem'){
            return `Cachorro ${this.raca}, ${this.cor}, com ${this.idade} anos latiu ao ver o homem`;
        } else {
            return `Valor inválido`;
        }
    }
}

console.log(cachorro.habilidade('Homem'));
  
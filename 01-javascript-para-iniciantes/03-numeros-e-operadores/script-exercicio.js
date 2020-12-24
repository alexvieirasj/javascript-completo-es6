// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
var numeroString =  +'Isso 35';
var outroNumeroString = 'Esse 64' - 15;

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

numero /= 2;
pesoPorDois = numero + unidade;

console.log(total, numeroString, outroNumeroString, soma, ++incremento, pesoPorDois);
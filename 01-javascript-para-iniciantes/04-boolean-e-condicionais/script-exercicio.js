// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeMinha = 29;
var idadeParente = 31

if (idadeMinha > idadeParente){
    console.log('É maior');
} else if (idadeMinha === idadeParente){
    console.log('É igual');
} else {
    console.log('É menor');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //True
var idade = 28; //True
var possuiDoutorado = false; //False
var empregoFuturo; //False
var dinheiroNaConta = 0; //False

console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes!')
} else if(brasil === china) {
    console.log('Brasil e China tem a mesma quantidade de habitantes!')
} else {
    console.log('China tem mais habitantes!')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso'); //Essa opção aqui
}



// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); //Irá aparecer cão
} else {
  console.log('Falso');
}
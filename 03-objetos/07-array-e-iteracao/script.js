// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);


const objetoCursos = arrayCursos.map((curso) => {
    
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const horas = curso.querySelector('.aulas').innerText;
    const aulas = curso.querySelector('.horas').innerText;

    return {
        titulo,
        descricao,
        horas,
        aulas
    }
});
console.log(objetoCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresValores = numeros.filter( numero => numero > 100);
console.log(maioresValores);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const retornaBaixo = instrumentos.some( (instrumento) => {
    return instrumento === 'Baixo';

});
console.log(retornaBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
    
   const valorSomado = +parseFloat(item.preco.toLocaleUpperCase().replace("R$ ", '').trim().replace(",", ".")).toFixed(2);
   return acumulador + valorSomado;

}, 0);

console.log(valorTotal);
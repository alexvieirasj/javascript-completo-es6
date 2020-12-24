// nomeie 3 propriedades ou métodos de strings
var minuscula = 'ALEX'.toLowerCase();
var tamanho = 'abc'.length;
var numeroRandom = Math.random();

console.log(minuscula, tamanho, numeroRandom);

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');


var valor = btn.innerHTML;
var nomeClasses = btn.className;
var adicionaClasse = btn.classList.add('ativo');
var id = btn.id;
var evento = btn.addEventListener('click', function (){
    console.log('Clicou no botao');
})


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
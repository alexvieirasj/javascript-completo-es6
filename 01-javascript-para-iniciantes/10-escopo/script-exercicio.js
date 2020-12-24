// Por qual motivo o código abaixo retorna com erros?
  {
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;

    console.log(cor, marca, portas);  
  }


  // var não existe, trocar por cor
  // marca e portas existem apenas no escopa das chaves
  
  const dois = 2;
  // Como corrigir o erro abaixo?
  function somarDois(x) {

    return x + dois;
  }

  function dividirDois(x) {
    return x / dois;
  }

  console.log(`Somar: ${somarDois(4)}`);
  console.log(`Dividir: ${dividirDois(6)}`);
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(`Total: ${total}`);
  
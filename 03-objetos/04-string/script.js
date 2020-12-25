// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxa = 0;
  let recebimento = 0;

  transacoes.forEach( (item) => {

    const numeroLimpo = item.valor.replace("R$ ", ''); 

    if(item.descricao.startsWith('Taxa')){            
        taxa += parseFloat(numeroLimpo);
    } else if(item.descricao.startsWith('Recebimento')) {   
        recebimento += parseFloat(numeroLimpo);
    }
  });

  console.log(`Taxa: R$ ${taxa} e Recebimento: R$ ${recebimento}`);
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayTransportes = transportes.split(';');

  console.log(`Array: ${arrayTransportes}`);
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  const htmlArray = html.split('span');
  const novoHtml = htmlArray.join('a');

  console.log(`Tag com 'a': ${novoHtml}`);

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

  console.log(`O último caracter de ${frase} é ${frase[frase.length -1]}`);
  
  // Retorne o total de taxas
  const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  
  let taxa1 = 0;
  transacoes1.forEach( (item) => {
      
    if(item.trim().toLowerCase().startsWith('taxa')){
        taxa1++;
    } 
  });

  console.log(`Total de taxas: ${taxa1}`);
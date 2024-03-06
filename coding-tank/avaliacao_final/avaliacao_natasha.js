const dadosPessoas = [ 
  ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'], 
  [1.70, 1.72, 1.62, 1.90, 1.53], 
  [80, 90, 61, 84, 49] 
]

//As seguintes constantes reprensentam cada linha da matriz.
const iNome = 0;
const iAltura = 1;
const iPeso = 2

let qtdPessoas = dadosPessoas[0].length;

// Variáveis usadas para o cálculo das médias de altura e peso.
let somatorioAlturas = 0;
let somatorioPesos = 0;
let mediaAltura = 0;
let mediaPeso = 0;

let nomeMaisAlta = "";
let maiorAltura = dadosPessoas[iAltura][0];

let nomeMaisBaixa = "";
let menorAltura = dadosPessoas[iAltura][0];

let nomeMaisPesada = "";
let maiorPeso = dadosPessoas[iPeso][0];

let nomeMaisLeve = "";
let menorPeso = dadosPessoas[iPeso][0];

let nomeMaiorIMC = "";
let maiorIMC = 0;

let nomeMenorIMC = "";
let menorIMC = 100;


// Cada iteração do for corresponde a uma pessoa da matriz dadosPessoas.
for (let index = 0; index < qtdPessoas; index++) {

  // Variáveis para guardar valores da matriz em cada iteração, para tornar o código mais legível.
  const nomeAtual = dadosPessoas[iNome][index];
  const alturaAtual = dadosPessoas[iAltura][index];
  const pesoAtual = dadosPessoas[iPeso][index];

  somatorioAlturas += alturaAtual;
  somatorioPesos += pesoAtual;

  // Calcula e imprime nome e IMC de cada pessoa
  let IMC = (pesoAtual / (alturaAtual * alturaAtual));
  console.log(`O IMC de ${nomeAtual} é ${IMC.toFixed(2)}`);

  /* Se o IMC da pessoa atual for o maior até agora,
  atualiza as variáveis correspondentes*/
  if (maiorIMC < IMC){
    maiorIMC = IMC;
    nomeMaiorIMC = nomeAtual;
  }

  /* Se o IMC da pessoa atual for o menor até agora,
  atualiza as variáveis correspondentes*/
  if (menorIMC > IMC){
    menorIMC = IMC;
    nomeMenorIMC = nomeAtual;
  }
  
  /* Se a altura da pessoa atual for a maior até agora,
  atualiza as variáveis correspondentes*/
  if (maiorAltura < alturaAtual) {
    maiorAltura = alturaAtual;
    nomeMaisAlta = nomeAtual;
  }

  /* Se a altura da pessoa atual for a menor até agora,
  atualiza as variáveis correspondentes*/
  if (menorAltura > alturaAtual) {
    menorAltura = alturaAtual;
    nomeMaisBaixa = nomeAtual;
  } 

  /* Se o peso da pessoa atual for o maior até agora,
  atualiza as variáveis correspondentes*/
  if (maiorPeso < pesoAtual) {
    maiorPeso = pesoAtual;
    nomeMaisPesada = nomeAtual;
  }

  /* Se o peso da pessoa atual for o menor até agora,
  atualiza as variáveis correspondentes*/
  if (menorPeso > pesoAtual) {
    menorPeso = pesoAtual;
    nomeMaisLeve = nomeAtual;
  } 

}

// Calcula as médias de altura e peso
mediaAltura = somatorioAlturas / qtdPessoas;
mediaPeso = somatorioPesos / qtdPessoas;

// Imprime todos os dados solicitados.
console.log(`A média de altura é: ${mediaAltura.toFixed(2)}`);
console.log(`A média de peso é: ${mediaPeso}`);
console.log(`Nome da pessoa mais alta: ${nomeMaisAlta}`);
console.log(`Altura da pessoa mais alta: ${maiorAltura.toFixed(2)}`);
console.log(`Nome da pessoa mais baixa: ${nomeMaisBaixa}`);
console.log(`Altura da pessoa mais alta: ${menorAltura.toFixed(2)}`);
console.log(`Nome da pessoa mais pesada: ${nomeMaisPesada}`);
console.log(`Peso da pessoa mais pesada: ${maiorPeso}`);
console.log(`Nome da pessoa mais leve: ${nomeMaisLeve}`);
console.log(`Peso da pessoa mais leve: ${menorPeso}`);
console.log(`Nome da pessoa com maior IMC: ${nomeMaiorIMC}`);
console.log(`O IMC de ${nomeMaiorIMC} é ${maiorIMC.toFixed(2)}`);
console.log(`Nome da pessoa com menor IMC: ${nomeMenorIMC}`);
console.log(`O IMC de ${nomeMenorIMC} é ${menorIMC.toFixed(2)}`);





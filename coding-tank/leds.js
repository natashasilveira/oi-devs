/*
Exercício 4

João quer montar um painel de leds contendo diversos números. 
Ele não possui muitos leds, e não tem certeza se conseguirá 
montar o número desejado. Considerando a configuração dos leds 
dos números abaixo, faça um algoritmo que ajude João a descobrir 
a quantidade de leds necessário para montar o valor.

--Entrada
A entrada contém um inteiro N, (1 ≤ N ≤ 1000) correspondente ao 
número de casos de teste, seguido de N linhas, 
cada linha contendo um número (1 ≤ V ≤ 10100) correspondente ao 
valor que João quer montar com os leds.

--Saída
Para cada caso de teste, imprima uma linha contendo o número de 
leds que João precisa para montar o valor desejado, 
seguido da palavra "leds".
*/

const prompt = require("prompt-sync")();
let entrada = prompt("Digite quantos teste deseja fazer: ");
let qtdTestes = parseInt(entrada);

let numeros = [];
let totalLeds = 0;

for(let i = 0; i < qtdTestes; i++){
  numeros[i] = prompt("Digite o número: ");
}

for(let i = 0; i < qtdTestes; i++){
  let atual = numeros[i];

  for (let i = 0; i < atual.length; i++){
    let num = atual[i];
    if ( num == '0' || num == '9' || num == '6'){
      totalLeds += 6;
    } else if (num == '1'){
      totalLeds += 2;
    } else if (num == '2' || num == '3' || num == '5'){
      totalLeds += 5;
    } else if (num == '4'){
      totalLeds += 4;
    } else if (num == '7'){
      totalLeds += 3;
    } else {
      totalLeds += 7;
    }
  }
  console.log(totalLeds);
  totalLeds = 0;
}

// Definimos a quantidade de LED's para cada número, começando do zero
let leds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

let caseTestLength = 1;

for (let i = 0; i < caseTestLength; i++) {
  
  let ledQuantity = 0;
  
  let value = "52";
  
  // Dividimos a string da variavel anterior em um array
  // Esse array contém cada caracter do numero, por exemplo:
  // Valor da variavel value: "52"
  // A variavel valueArray fica = ["5", "2"]
  let valueArray = value.split("");

  // For que vai percorrer cada caracter da variavel valueArray
  for (let i = 0; i < valueArray.length; i++) {
    let item = Number(valueArray[i]);
    ledQuantity += leds[item];
  }
  
  console.log(`${ledQuantity} leds`);  // Mostramos no console

}
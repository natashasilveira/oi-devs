/*Exercício 1 

Você deve fazer um programa que leia (Adicionar na variável os valores. 
  EX: const entrada = "10.3";) um valor qualquer e apresente uma mensagem 
  dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) 
 este valor se encontra. Obviamente se o valor não estiver em nenhum 
 destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

--Entrada
O arquivo de entrada contém um número double (EX: 10.2).

--Saída
/A saída deve ser uma mensagem conforme exemplo abaixo.

--Saída esperada para quando a entrada tiver o valor de 10.2:
'Intervalo [0,25]'*/

const prompt = require("prompt-sync")();
let entrada = prompt("Digite um número: ");
let numero = parseFloat(entrada);

if(numero >= 0 && numero <= 25.0) {
  console.log("Intervalo [0,25]");
} else if (numero > 25.0 && numero <= 50.0) {
  console.log("Intervalo (25,50]");
} else if (numero > 50.0 && numero <= 75.0) {
  console.log("Intervalo (50,75]");
} else if (numero > 75.0 && numero <= 100.0) {
  console.log("Intervalo (75,100]");
} else {
  console.log("Fora de intervalo!")
}

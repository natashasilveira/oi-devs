/*
Exercício 2

Leia (Adicionar na variável os valores. EX: const entrada = "10.3 203.0 5.0";)
3 valores de double (EX: 10.2) e efetue o cálculo das
raízes da equação de Bhaskara. Se não for possível calcular as raízes,
mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.

--Entrada
Leia três valores double (EX: 10.2) A, B e C.
EX: Ponto de entrada dos coeficientes da fórmula de Bhaskara
	const entrada = "10.3 203.0 5.0";

--Saída
Se não houver possibilidade de calcular as raízes, apresente a 
mensagem "Impossivel calcular". Caso contrário, imprima o resultado 
das raízes com 5 dígitos após o ponto, com uma mensagem correspondente 
conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

--Saída esperada para a entrada como os coeficientes 10.3, 203 e 5 
(a, b e c, respectivamente):
'R1 = -0.02466'
'R2 = -19.68408'
*/

const prompt = require("prompt-sync")();
let entrada = prompt("Digite o valor de A: ");
let a = parseFloat(entrada);
entrada = prompt("Digite o valor de B: ");
let b = parseFloat(entrada);
entrada = prompt("Digite o valor de C: ");
let c = parseFloat(entrada);

let delta = ((b * b)-(4 * a * c));
let r1 = 0;
let r2 = 0;

if(delta < 0) {
	console.log("Impossível calcular");
} else {
	r1 = ((-(b) + Math.sqrt(delta))/(2 * a));
	r2 = ((-(b) - Math.sqrt(delta))/(2 * a));
	console.log(`R1 = ${r1.toFixed(5)}`);
	console.log(`R2 = ${r2.toFixed(5)}`);
}




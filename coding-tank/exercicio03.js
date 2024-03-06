/*
Exercício 3

Leia (Adicionar na variável os valores. EX: const entrada = "10 20 5 9";) 
4 valores inteiros A, B, C e D. A seguir, 
se B for maior do que C 
e se D for maior do que A, 
e a soma de C com D for maior que a soma de A e B 
e se C e D, ambos, forem positivos 
e se a variável A for par 
escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

--Entrada
Quatro números inteiros A, B, C e D.

--Saída
Mostre a respectiva mensagem após a validação dos valores.
*/

const prompt = require("prompt-sync")();
let entrada = prompt("Digite um número inteiro: ");
let a = parseInt(entrada);
entrada = prompt("Digite um número inteiro: ");
let b = parseInt(entrada);
entrada = prompt("Digite um número inteiro: ");
let c = parseInt(entrada);
entrada = prompt("Digite um número inteiro: ");
let d = parseInt(entrada);

if((b > c) && (d > a) && ((c + d) > (a + b)) && c >= 0 && d >= 0 && (a % 2 === 0)){
  console.log("Valores aceitos");
} else { 
  console.log("Valores não aceitos.");
}

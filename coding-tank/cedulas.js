let notas = [100, 50, 20, 10, 5, 2, 1];
let qtdNotas = 0;

const prompt = require("prompt-sync")();
let entrada = prompt("Digite um número inteiro: ");
let numero = parseInt(entrada);

console.log("R$ " + numero.toFixed(2) + " é:");

/*for(let i = 0; i < notas.length; i++) {
  while(numero >= notas[i]) {
    numero -= notas[i];
    qtdNotas++;
  }
  console.log(qtdNotas + " nota(s) de R$ " + notas[i].toFixed(2));
  qtdNotas = 0;
}*/

for(let i = 0; i < notas.length; i++) {
  if(numero >= notas[i]) {
    qtdNotas = parseInt(numero/notas[i]);
    numero = numero % notas[i];
  }
  console.log(qtdNotas + " nota(s) de R$ " + notas[i].toFixed(2));
  qtdNotas = 0;
}


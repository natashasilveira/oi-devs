const prompt = require("prompt-sync")();
let num = parseInt(prompt("Digite um número natural: "));

function fatorial(num) {
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(num));
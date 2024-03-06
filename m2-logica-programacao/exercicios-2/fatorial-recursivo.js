const prompt = require("prompt-sync")();
let num = parseInt(prompt("Digite um número natural: "));

function fatorialRecursivo (num) {
  if (num === 1) return 1;
  else return num * fatorialRecursivo(num - 1);
}

console.log(fatorialRecursivo(num));
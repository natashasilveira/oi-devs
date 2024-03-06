const prompt = require("prompt-sync")();
let entrada = prompt("Digite um número: ");
const numero = parseInt(entrada);

/*for(let i = 0; i <= numero; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}*/

for (let contador = 0; contador <= numero; contador++){
  let resultado = "";
  if(contador % 3 === 0) resultado += "fizz";
  if(contador % 5 === 0) resultado += "buzz";
  if(resultado === "") resultado = contador;
  console.log(resultado);
}


/*
Erros no JS podem ter dois tipos:
1. Sintaxe
2. Erro em tempo de execução

Try Catch
*/

// let nome = "Guilherme";

// try {
//   console.log(nome);
// } catch (error) {
//   console.log(error);
// }

function soma (num1, num2) {
  if (num1 <= 0 || num2 > 10) {
    throw new RangeError(`Número não permitido!`);
  }
  return num1 + num2;
}

try {
  console.log(soma(0, 5));
} catch (e) {
  console.log(e.name);
  console.log(e.message);
} finally {
  console.log("finally");
}



// let num1;
// do {
//   num1 = prompt("Digite o primeiro número: ");
//   num1 = num1.replace(/,/g, '.');
//   num1 = parseFloat(num1);
//   if (isNaN(num1)) alert("O conteúdo digitado não é um número!");
// } while (isNaN(num1));
// Escreva um código que simule uma calculadora básica, provendo a leitura de um valor, seguido da operação(+, -, * e /) e do segundo valor.
let num1;
let num2;
let operador;

// var altura = "1,82";
// altura = altura.replace(/,/g, '.');
// alert(altura);

do {
  num1 = prompt("Digite o primeiro número: ");
  num1 = num1.replace(/,/g, '.');
  num1 = parseFloat(num1);
  if (isNaN(num1)) alert("O conteúdo digitado não é um número!");
} while (isNaN(num1));


do {
  operador = prompt("Digite um operador válido (+, -, * ou /): ");
} while (operador != '+' && operador != '-' && operador != '*' && operador != '/');

do {
  num2 = prompt("Digite o segundo número: ");
  num2 = num2.replace(/,/g, '.');
  num2 = parseFloat(num2);
  if (isNaN(num2)) alert("O conteúdo digitado não é um número!");
} while (isNaN(num2));

switch (operador) {
  case '+':
    document.write(`<h1>${num1} + ${num2} = ${num1+num2}</h1>`);
    break;
  case '-':
    document.write(`<h1>${num1} - ${num2} = ${num1-num2}</h1>`);
    break;
  case '*':
    document.write(`<h1>${num1} * ${num2} = ${num1*num2}</h1>`);
    break;
  case '/':
    document.write(`<h1>${num1} / ${num2} = ${num1/num2}</h1>`);
    break;
}
// Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.

// Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
// Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente

let nota1;
let nota2;
let nota3;

do {
  nota1 = prompt("Digite a primeira nota: ");
  nota1 = nota1.replace(/,/g, '.');
  nota1 = parseFloat(nota1);
  if (isNaN(nota1)) alert("O conteúdo digitado não é válido!");
  if (nota1 < 0 || nota1 > 10) alert("Digite uma nota de 0 a 10!");
} while (isNaN(nota1) || nota1 < 0 || nota1 > 10);

do {
  nota2 = prompt("Digite a segunda nota: ");
  nota2 = nota2.replace(/,/g, '.');
  nota2 = parseFloat(nota2);
  if (isNaN(nota2)) alert("O conteúdo digitado não é válido!");
  if (nota2 < 0 || nota2 > 10) alert("Digite uma nota de 0 a 10!");
} while (isNaN(nota2) || nota2 < 0 || nota2 > 10);

do {
  nota3 = prompt("Digite a terceira nota: ");
  nota3 = nota3.replace(/,/g, '.');
  nota3 = parseFloat(nota3);
  if (isNaN(nota3)) alert("O conteúdo digitado não é válido!");
  if (nota3 < 0 || nota3 > 10) alert("Digite uma nota de 0 a 10!");
} while (isNaN(nota3) || nota3 < 0 || nota3 > 10);

let media = (nota1 + nota2 + nota3)/3;

if (media < 5) document.write(`<h1>Média: ${media.toFixed(2)} - Aluno Reprovado.</h1>`);
else document.write(`<h1>Média: ${media.toFixed(2)} - Aluno Aprovado.</h1>`);
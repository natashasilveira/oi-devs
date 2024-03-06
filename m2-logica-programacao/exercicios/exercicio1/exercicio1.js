// Escreva um código que imprima um mês de acordo com o número digitado pelo usuário.

let leitor = parseInt(prompt("Digite um número: "));

switch (leitor) {
  case 1:
    document.write(`<h1>O mês ${leitor} é Janeiro.</h1>`);
    break;
  case 2:
    document.write(`<h1>O mês ${leitor} é Fevereiro.</h1>`);
    break;
  case 3:
    document.write(`<h1>O mês ${leitor} é Março.</h1>`);
    break;
  case 4:
    document.write(`<h1>O mês ${leitor} é Abril.</h1>`);
    break;
  case 5:
    document.write(`<h1>O mês ${leitor} é Maio.</h1>`);
    break;
  case 6:
    document.write(`<h1>O mês ${leitor} é Junho.</h1>`);
    break;
  case 7:
    document.write(`<h1>O mês ${leitor} é Julho.</h1>`);
    break;
  case 8:
    document.write(`<h1>O mês ${leitor} é Agosto.</h1>`);
    break;
  case 9:
    document.write(`<h1>O mês ${leitor} é Setembro.</h1>`);
    break;
  case 10:
    document.write(`<h1>O mês ${leitor} é Outubro.</h1>`);
    break;
  case 11:
    document.write(`<h1>O mês ${leitor} é Novembro.</h1>`);
    break;
  case 12:
    document.write(`<h1>O mês ${leitor} é Dezembro.</h1>`);
    break;
  default:
    document.write(`O conteudo digitado não corresponde a nenhum mês.`);
}
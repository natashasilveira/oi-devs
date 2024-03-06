let matriz = [
  [15, 12, 58, 98],
  [42, 57, 36, 1],
  [21, 87, 6, 99]
];

let aluno = prompt("Digite seu nome: ");
const turma = "906 - OiDevs";
document.write(`
  <h1>Olá ${aluno}!</h1>
  <h2>Turma ${turma}</h2>
`);

for (let linha = 0; matriz.length > linha; linha++) {
  for (let coluna = 0; matriz[linha].length > coluna; coluna++) {
    console.log(matriz[linha][coluna]);
    document.write(matriz[linha][coluna] + " | ");
  }
  document.write("<br />");
}
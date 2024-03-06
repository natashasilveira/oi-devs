// let numbers = [1, 2, 3, 4, 5, 10, 20];

// let numbersDobrados = numbers.map ((item) => {
//   return item * 2;
// })

// console.log(numbers);
// console.log(numbersDobrados);

const alunos = [
  {nome: "Fulano", sobrenome: "de Tal", idade: 25},
  {nome: "Maria", sobrenome: "da Silva", idade: 30},
  {nome: "Joaquim", sobrenome: "da Silva", idade: 30}
];

let listaAlunos = alunos.map(aluno => {
  aluno.nomeCompleto = `${aluno.nome} ${aluno.sobrenome}`;
  return aluno;
});



console.log(lista);
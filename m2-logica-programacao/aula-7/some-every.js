const alunos = [
  {nome: "Fulano", sobrenome: "de Tal", idade: 25},
  {nome: "Maria", sobrenome: "da Silva", idade: 17},
  {nome: "Joaquim", sobrenome: "da Silva", idade: 0}
];

//some
let algumMaiorDeIdade = alunos.some((aluno) => aluno.idade >= 18);

console.log(algumMaiorDeIdade);


//every
let todosMaioresDeIdade = alunos.every((aluno) => aluno.idade >= 18);

console.log(todosMaioresDeIdade);
const alunos = [
  {nome: "Fulano", sobrenome: "de Tal", idade: 25},
  {nome: "Maria", sobrenome: "da Silva", idade: 17},
  {nome: "Joaquim", sobrenome: "da Silva", idade: 0}
];


const maioresDeIdade = alunos.filter(({idade}) => idade >= 18);
const comIdade = alunos.filter(({idade}) => idade !== undefined);

console.log(maioresDeIdade);
console.log(comIdade);
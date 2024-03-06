const alunos1 = require('./alunos');
console.log(alunos1);

// import alunos from './alunos';

const alunos = [
  {nome: "Fulano", sobrenome: "de Tal", idade: 25},
  {nome: "Maria", sobrenome: "da Silva", idade: 17},
  {nome: "Menino", sobrenome: "da Silva", idade: 18},
  {nome: "Joaquim", sobrenome: "da Silva", idade: 0}
];

let alunosNomes = [ "Menino", "Ivina", "Amanda", "Juliana" ];

const index = alunosNomes.indexOf("Ivina");

console.log(alunosNomes.at(index));

// let index = alunos.indexOf(({nome}) => nome === "Menino");

console.log(alunos.at(index));
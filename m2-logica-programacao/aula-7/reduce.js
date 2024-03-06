const numeros = [1, 2, 3, 4];

const alunos = [
  {nome: "Fulano", sobrenome: "de Tal", idade: 25},
  {nome: "Maria", sobrenome: "da Silva", idade: 17},
  {nome: "Joaquim", sobrenome: "da Silva", idade: 0}
];

const soma = numeros.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual;
});

console.log(soma);

const somaIdade = alunos.reduce ((acc, {idade}) => acc + idade, 0);

console.log("Resultado:", somaIdade);
// for (let passos = 0; passos <= 1000; passos++) {
//   console.log(`Caminhando: ${passos}`);
// }

let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) console.log(numeros[i]);
// }

// for (let i in numeros) {
//   if (numeros[i] % 2 === 0) console.log(numeros[i]);
// }


// for (let i of numeros) {
//   if (i % 2 === 0) console.log(i);
// }

//EXERCICIO
//Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
//onde as tem-se, nome, nota 1 e nota2. Use o for para percorer esse array
//e calcular a média das duas notas de cada aluno

let alunos = [
  {nome: "Natasha", idade: 30, nota1: 9.0, nota2: 8.5},
  {nome: "João", idade: 25, nota1: 10.0, nota2: 6.5},
  {nome: "Maria", idade: 45, nota1: 7.0, nota2: 7.5 },
  {nome: "Júlia", idade: 50, nota1: 4.0, nota2: 5.5},

];


// for (let {nome, nota1, nota2} of alunos) {
//   console.log(`A média de ${nome} é ${(nota1+nota2)/2}`);
// }


// alunos.forEach((aluno) => {
//   console.log(aluno);
// });


let aleatorios = [];
let i = 0;

// while (i < 5) {
//   aleatorios.push(Math.round(Math.random() * 10));
//   i++;
// }

// console.log(aleatorios);

// const aleatorios = [];

while(aleatorios.length < 5) {
    let aleatorio = Math.round(Math.random() * 10);

    if(aleatorios.indexOf(aleatorio) === -1) {
        aleatorios.push(aleatorio)
    }
}

console.log(aleatorios)
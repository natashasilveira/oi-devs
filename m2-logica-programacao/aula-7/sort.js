const numeros = [ 1, 2, 3, 4, 5, 9, 256, 25 ];
const alunos = [ "Miguel", "Ivina", "Ana" ];

console.log(numeros.sort());

console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));
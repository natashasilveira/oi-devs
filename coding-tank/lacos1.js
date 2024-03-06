let notas = [
  {
    valor: 8.5,
    peso: 0.25
  },
  {
    valor: 9.9,
    peso: 0.95
  },
  {
    valor: 5,
    peso: 0.5
  },
  {
    valor: 2,
    peso: 0.25
  },
  {
    valor: 10,
    peso: 1
  },
  {
    valor: 5.5,
    peso: 0.25
  },
  {
    valor: 6,
    peso: 0.2
  },
  {
    valor: 9,
    peso: 0.75
  }
]

let somatorio = 0;
let somatorioPond = 0;
let somaPesos = 0;
let maiorNota = notas[0].valor;
let menorNota = notas[0].valor;

for(let index = 0; index < notas.length; index++){
  if (notas[index].valor > maiorNota) maiorNota = notas[index].valor;
  if (notas[index].valor < menorNota) menorNota = notas[index].valor;
  somatorio += notas[index].valor;
  somatorioPond += (notas[index].valor * notas[index].peso); 
  somaPesos += notas[index].peso; 
}

console.log("Média simples: ", (somatorio/notas.length));
console.log("Média ponderada: ", (somatorioPond/somaPesos));
console.log("Maior nota: ",  maiorNota);
console.log("Menor nota: ",  menorNota);
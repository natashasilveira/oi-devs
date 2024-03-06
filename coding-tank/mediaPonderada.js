let notas = [
    {
        valor: 8.5,
        peso: 0.25
    },
    {
        valor: 10,
        peso: 0.95
    },
    {
        valor: 5,
        peso: 0.5
    }
]

let somatorio = 0;
let somaPesos = 0;

for(let index = 0; index < notas.length; index++){
    somatorio += (notas[index].valor * notas[index].peso); // Aqui está sendo somado as notas multiplicadas pelos seus respectivos pesos.
    somaPesos += notas[index].peso; // aqui estamos somando os pesos das notas. A cada interação é somado o peso do respectivo index.
}

console.log("Somatório das notas: ",  somatorio);
console.log("Somatório dos pesos: ",  somaPesos);
console.log("Média: ", (somatorio/somaPesos));

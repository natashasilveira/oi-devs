let notas = [1, 3, 5, 6, 0, 9, 10, 8, 9, 7];

let totalNotas = 0; 
let i = 0;
while(i < notas.length){ 
    totalNotas += notas[i];
    i++;
    
}

console.log("Somatório: ",  totalNotas);
console.log("Média: ", (totalNotas/notas.length));

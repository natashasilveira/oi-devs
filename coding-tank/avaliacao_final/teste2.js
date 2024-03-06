const prompt = require("prompt-sync")();

let grade = [
  [' ', '#', '#', ' ', ' ', ' '],
  ['#', '#', '#', '#', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '#', ' '],
  ['#', '#', '#', '#', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
];

let qtdLinhas = grade.length;
let qtdColunas = grade[0].length;

for(let i = 0; i < qtdLinhas; i++){
  console.log(grade[i]);
}

let gradeAux = [
  [' ', '#', '#', ' ', ' ', ' '],
  ['#', '#', '#', '#', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '#', ' '],
  ['#', '#', '#', '#', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
];

let continuar = '';
continuar = prompt("Enter para continuar: ");

while (!continuar){
for(let linha = 0; linha < qtdLinhas; linha++) {
  for(let coluna = 0; coluna < qtdColunas; coluna++){
    let celula = grade[linha][coluna];
    let vizinhos = 0;

    for(let i = (linha-1); i <= (linha+1); i++){
      for (let j = (coluna-1); j <= (coluna+1); j++) {
        if(i >= 0 && i < qtdLinhas && j >= 0 && j < qtdColunas && grade[i][j] === '#'){
          if(!(i === linha && j === coluna)){
            vizinhos++;
          }
        }
        
      }
    }

    if (celula === '#' && (vizinhos === 2 || vizinhos === 3)){
      gradeAux[linha][coluna] = '#';
    } else if (celula === ' ' && vizinhos === 3){
      gradeAux[linha][coluna] = '#';
    } else {
      gradeAux[linha][coluna] = ' ';
    }
  }
}

for(let i = 0; i < qtdLinhas; i++){
  for(let j = 0; j < qtdColunas; j++){
    grade[i][j] = gradeAux[i][j];
  }
}

console.log();

for(let i = 0; i < qtdLinhas; i++){
  console.log(grade[i]);
}
continuar = prompt("Enter para continuar: ");
}



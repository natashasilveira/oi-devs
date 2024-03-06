const dadosPessoas = [['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'], [1.70, 1.72, 1.62, 1.90, 1.53], [80, 90, 61, 84, 49]];
let mediaAltura = 0;
let mediaPeso = 0;
let imc = 0;
let maisAlto = 0
let maisBaixo = 0
let maisPesado = 0
let maisLeve = 0
let maiorImc = 0
let indexMaiorIMC = 0
let menorImc = 100
let indexMenorIMC = 0;

for (let index = 0; index < dadosPessoas[0].length; index++) {
  const nome = dadosPessoas[0][index];
  const altura = dadosPessoas[1][index];
  const peso = dadosPessoas[2][index];
  mediaAltura += altura;
  mediaPeso += peso;
  imc = peso / Math.pow(altura,2);
  console.log(`c. O IMC de ${nome} é ${imc.toFixed(2)}`)
  if (altura > dadosPessoas[1][maisAlto]) maisAlto = index
  if (altura < dadosPessoas[1][maisBaixo]) maisBaixo = index
  if (peso > dadosPessoas[2][maisPesado]) maisPesado = index
  if (peso < dadosPessoas[2][maisLeve]) maisLeve = index
  if (imc > maiorImc ) {
    maiorImc =  imc
    indexMaiorIMC = index
  }
  if (imc < menorImc ) {
    menorImc =  imc
    indexMenorIMC = index
  }

}
mediaAltura /=  dadosPessoas[1].length;  
mediaPeso /= dadosPessoas[2].length;
console.log(`a. a média de altura é ${mediaAltura.toFixed(2)}`);
console.log(`b. a média de peso é ${mediaPeso}`);
console.log(`d. O mais alto é ${dadosPessoas[0][maisAlto]} com ${dadosPessoas[1][maisAlto].toFixed(2)}`)
console.log(`e. O mais baixo é ${dadosPessoas[0][maisBaixo]} com ${dadosPessoas[1][maisBaixo].toFixed(2)}`)
console.log(`f. O mais pesado é ${dadosPessoas[0][maisPesado]} com ${dadosPessoas[2][maisPesado]} kg`)
console.log(`g. O mais leve é ${dadosPessoas[0][maisLeve]} com ${dadosPessoas[2][maisLeve]} kg`)
console.log(`h. O maior IMC é ${dadosPessoas[0][indexMaiorIMC]} com ${maiorImc.toFixed(2)}`)
console.log(`i. O menos IMC é ${dadosPessoas[0][indexMenorIMC]} com ${menorImc.toFixed(2)}`)
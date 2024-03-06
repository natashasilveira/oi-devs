// *** Questão 3 ***
// Escreva um programa que imprime os 10 primeiros números naturais.

// for (let i = 0; i < 10; i++) console.log(i);


// *** Questão 4 ***
// Escreva um programa que imprime a soma dos 100 primeiros números naturais.
// Esse código considera o 0 como o primeiro número natural

// let somatorio = 0;
// for (let i = 1; i < 1000; i++) {
//   somatorio += i;
// }

// console.log(`O somatório dos 100 primeiros números naturais é ${somatorio}`);


// *** Questão 5 ***
// Escreva um programa que imprime todos os números pares entre 1 e 1000.

// for(let i = 2; i <= 1000; i += 2) {
//   console.log(i);
// }


// *** Questão 6 ***
// Escreva um programa que imprime todos os números primos entre 1 e 100.

// let primo = true;

// for (let numero = 2; numero <= 100; numero += 1) {
//   for (let divisor = 2; divisor < numero && primo; divisor++) {
//     if (numero % divisor === 0) primo = false;
//   }

//   if (primo) console.log(numero);

//   primo = true;
// }




for (let numero = 2; numero <= 100; numero += 1) {
  if (verificarPrimo(numero)) console.log(numero);
}

function verificarPrimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) return false;
  } 
  return true;
}
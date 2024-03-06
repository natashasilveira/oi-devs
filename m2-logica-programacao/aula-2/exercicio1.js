/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

let salario = 1684.00;
let porcentagemAumento = 0;
let aumento = 0;
let salarioReajustado = 0;

if (salario <= 1500) {
  porcentagemAumento = 20;
  aumento = salario * 0.2;
} else if (salario > 1500 && salario <= 1700) {
  porcentagemAumento = 15;
  aumento = salario * 0.15;
} else if (salario > 1700 && salario < 2000) {
  porcentagemAumento = 10;
  aumento = salario * 0.1;
} else {
  porcentagemAumento = 5;
  aumento = salario * 0.05;
}

salarioReajustado = salario + aumento;

console.log(`Salário: R$ ${salario}`);
console.log(`Porcentagem do aumento: ${porcentagemAumento}%`);
console.log(`Valor do aumento: R$ ${aumento}`);
console.log(`Salário reajustado: R$ ${salarioReajustado}`);
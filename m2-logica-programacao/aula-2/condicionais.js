// const idade = "18";

// let soma = idade + 35; // 1835
// // soma = parseInt(idade) + 35; // 53
// soma = Number(idade) + 35;
// soma = +idade + 35;

// console.log(soma);

// let number = 1000;
// console.log(typeof number);
// number = "" + 1000;
// console.log(typeof number);

// number = number.toString();

let diaClaro = true;
let tenhoDinheiro = true;

// Operador ternário

diaClaro && tenhoDinheiro
  ? console.log("Oba! Vou para a praia")
  : console.log("Hoje não tem praia.");

  // Coalescência

  let user = "";
  let username = user || "Usuário sem nome";
  console.log("username ||:", username);

  let saldo = 0;
  console.log(saldo || "Houve um erro");
  console.log(saldo ?? "Houve um erro");
  console.log(saldo ? saldo : "Houve um erro");
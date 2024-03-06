let numero = 10;
let texto = "string";
let booblean = true;
let objeto = {
  prop1: 10,
  prop2: "texto"
};
let listaDeNumeros = [1, 2, 3, 4];
let listaDeLista = [
  [1, 2, 3], 
  ["joao", "maria", "jose"]
];
let listaDeString = ["joao", "maria", "jose"];

let listaDeObjetos = [
  {
    numero: 1,
    extenso: "um"
  },
  {
    numero: 2,
    extenso: "dois"
  },
  {
    numero: 3,
    extenso: "tres"
  }
]

let lista_de_lista = [
  listaDeNumeros,
  listaDeObjetos,
  listaDeString
]

console.log(listaDeLista[1][2]);
console.log(lista_de_lista[1][1].extenso);
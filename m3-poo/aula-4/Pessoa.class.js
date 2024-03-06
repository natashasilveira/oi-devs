class Pessoa {
  nome;
  altura;
  peso;

  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }

  apresentação() {
    return `Oi, meu nome é ${this.nome}, tenho ${this.altura} m de altura e peso de ${this.peso} Kg`
  }
}
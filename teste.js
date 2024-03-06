class Pessoa {
  nome;
  #peso;
  #altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.#altura = altura;
  }


  get peso(){
    return this.#peso
  }
  calcularImc() {
    return this.#peso/Math.pow(this.#altura, 2);
  }
}

const pessoa = new Pessoa('Nome da pessoa', 60, 2);


console.log(this.peso)
console.log(pessoa.calcularImc());
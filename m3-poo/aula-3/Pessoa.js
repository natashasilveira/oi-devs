class Pessoa {
  #nome;
  #idade;
  #peso;
  #altura;

  constructor(nome, idade, peso, altura) {
    this.#nome = nome;
    this.#idade = idade;
    this.#peso = peso;
    this.#altura = altura;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  get idade() {
    return this.#nome;
  }

  set idade(novaIdade) {
    this.#idade = novaIdade;
  }

  get imc() {
    return this.#peso / Math.pow(this.#altura, 2)
  }
}

class Trabalhador extends Pessoa {
  #salario;

  constructor(nome, idade, peso, altura, salario) {
    super(nome, idade, peso, altura);
    this.#salario = salario;
  }

  get salario(){
    return this.#salario;
  }
}

class Estudante extends Pessoa {
  #curso;
  
  constructor(nome, idade, peso, altura, curso) {
    super(nome, idade, peso, altura);
    this.#curso = curso;
  }

}

const trabalhador = new Trabalhador('Natasha', 30, 50, 1.63, 1000);

trabalhador.nome = 'Guilherme';

console.log(trabalhador.salario);
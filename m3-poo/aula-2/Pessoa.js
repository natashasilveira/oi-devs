
class Pessoa {
  nome;
  sobrenome;
  #idade;
  #peso;
  #altura;
  
  static numeroPessoas = 0;

  constructor(nome, sobrenome, idade, peso, altura) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.#idade = idade;
    this.#peso = peso;
    this.#altura = altura;
    Pessoa.numeroPessoas += 1;
  }



  get imc() {
    return this.#peso / Math.pow(this.#altura, 2)
  }

  get idade() {
    return `${this.#idade} anos`;
  }

  get peso() {
    return `${this.#peso} Kg`;
  }

  set peso(novoPeso) {
    this.#peso = novoPeso;
  }
}

const pessoa = new Pessoa("Natasha", "da Silveira", 30, 50, 1.63);

pessoa.peso = 61;
console.log(pessoa.peso);
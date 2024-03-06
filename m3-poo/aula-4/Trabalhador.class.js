const Pessoa = require('./Pessoa.class');

class Trabalhador extends Pessoa {
  salario;
  constructor(nome, altura, peso, salario) {
    super(nome, altura, peso);
    this.salario = salario;
  }
}
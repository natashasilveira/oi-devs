

class Usuario {
  #nomeCompleto;
  #nascimento;
  #documento;
  #endereco;

  constructor(nomeCompleto, nascimento, documento) {
    this.#nomeCompleto = nomeCompleto;
    this.#nascimento = nascimento;
    this.#documento = documento;
  }

  get documento(){
    return this.#documento;
  }

  inserirEndereço(endereco) {
    this.#endereco = endereco;
  }
}

module.exports = Usuario;
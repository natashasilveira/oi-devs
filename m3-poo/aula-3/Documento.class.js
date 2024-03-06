
class Documento {
  #tipo;
  #numero;

  static documentosAceitos() {
    return [
      'RG',
      'CPF',
      'CNH'
    ]
  }

  constructor(tipo, numero) {
    if(!Documento.documentosAceitos().includes(tipo)) throw 'Tipo não aceito'
    this.#tipo = tipo;
    this.#numero = numero;
  }
}

module.exports = Documento;
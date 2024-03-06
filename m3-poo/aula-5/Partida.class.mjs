export default class Partida {
  #palavra;
  #tentativasRestantes = 10;
  #letrasErradas = [];
  #letrasCertas = [];

  constructor(palavra){
    this.#palavra = palavra;
  }

  get tentativasRestantes() {
    return this.#tentativasRestantes;
  }

  get letrasErradas() {
    return this.#letrasErradas;
  }

  get totalDeLetrasDaPalavra() {
    return this.#palavra.length;
  }

  posicaoDaLetraSeExistir(letra) {
    if(this.#letrasCertas.includes(letra) || this.#letrasErradas.includes(letra)) {
      throw new Error('Esse palpite já foi dado');
      // return [];
    }
    if(this.#palavra.includes(letra)){
      this.#letrasCertas.push(letra);
      const posicoes = [];
      this.#palavra.split('').forEach((element, index) => {
        if(element === letra) {
          posicoes.push(index);
        }
      });
      return posicoes;
    } else {
      this.#letrasErradas.push(letra);
      this.#tentativasRestantes -= 1;
      return [];
    }
  }

  resetTudo() {
    this.#letrasErradas = [];
    this.#letrasCertas = [];
    this.#tentativasRestantes = 10;
  }

  palavraCorresponde(palavra) {
    return this.#palavra === palavra;
  }
}
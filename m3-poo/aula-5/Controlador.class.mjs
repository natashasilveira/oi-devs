import Partida from "./Partida.class.mjs"

export default class Controlador {
  #partida;
  #espacosDasLetras;

  constructor() {
    this.#partida = new Partida('paralelepipedo');

    // this.#espacosDasLetras = this.#renderizarEspacosDasLetras();
    this.#renderizarEspacosDasLetras();
    this.#renderizarTentativasRestantes();

  }

  #renderizarEspacosDasLetras() {
    const quantidadeDeEspacos = this.#partida.totalDeLetrasDaPalavra;
    // let divs = '';
    let divs = [];
    for(let index = 0; index < quantidadeDeEspacos; index++) {
      const divEspaco = document.createElement('div');
      divEspaco.id = `espaco-${index}`;
      divEspaco.classList.add('letra');
      divs.push(divEspaco);
      // divs += `<div id="espaco-${index}" class="letra"></div>`
    }
    // document.querySelector('.container-da-palavra').innerHTML = divs;
    document.querySelector('.container-da-palavra').append(...divs);
    return divs;
  }

  processarPalpite(palpite) {
    if(palpite.length) alert('Palpite vazio não é permitido!');
    else if(palpite.length === 1) {
      try {
        const posicoes = this.#partida.posicaoDaLetraSeExistir(palpite);
        
        if(posicoes.length === 0) {
          this.#renderizarTentativasRestantes();
        }
        
        posicoes.forEach(index => this.#revelarLetra(palpite, index));
      } catch (error) {
        console.log("Deu erro")
      }
    } else if(palpite.length > 1) {
      const ehPalavraCorreta = this.#partida.palavraCorresponde(palpite);

      if(ehPalavraCorreta) {
        palpite.split('').forEach((letra, index) => this.#revelarLetra(letra, index));
        alert('Parabéns! Você ganhou!');
      } else {
        alert('Palavra incorreta! Tente novamente.');
      }
    }
    // this.#renderizarTentativasRestantes
  }

  #renderizarTentativasRestantes() {
    const elementoTentativasRestante = document.getElementById('tentativas-restantes');

    if(this.#partida.tentativasRestantes > 1) {
      elementoTentativasRestante.innerHTML = `${this.#partida.tentativasRestantes} tentativas restantes`;
    } else if (this.#partida.tentativasRestantes === 1) {
      elementoTentativasRestante.innerHTML = `${this.tentativasRestantes} tentativa restante`;
    } else {
      elementoTentativasRestante.innerHTML = `Você perdeu`;
    }
  }

  #atualizarLetrasErradas() {

  }

  #revelarLetra(letra, index) {
    document.getElementById(`espaco-${index}`).innerText = letra;
    // this.#espacosDasLetras[index].innerText = letra;
  }

  reiniciar() {
    this.#partida.resetTudo();
    this.#renderizarLetrasErradas();
    
  }
}
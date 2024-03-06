import Controlador from "./Controlador.class.mjs";
import Partida from "./Partida.class.mjs";



// const partida1 = new Partida('paralelepipedo');
const controlador = new Controlador();


const botaoEnviarPalpite = document.getElementById('enviar-palpite');

botaoEnviarPalpite.addEventListener('click', function() {
  const inputDoPalpite = document.getElementById('palpite');
  controlador.processarPalpite(inputDoPalpite.value);
});

// const posicaoDaLetra = partida1.posicaoDaLetraSeExistir('a');
// console.log(posicaoDaLetra);
// console.log(partida1.tentativasRestantes);

// console.log(partida1.posicaoDaLetraSeExistir('a'));
// console.log(partida1.posicaoDaLetraSeExistir('z'));
// console.log(partida1.posicaoDaLetraSeExistir('z'));
// console.log(partida1.posicaoDaLetraSeExistir('e'));
// console.log(partida1.tentativasRestantes);
// console.log(partida1.letrasErradas);

// partida1.resetTudo();
// console.log(partida1.tentativasRestantes);
// console.log(partida1.letrasErradas);
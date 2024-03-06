class StringMelhor extends String {
  constructor(str) {
    super(str);
  }

  primeiraLetraMaiuscula() {
    return `${this[0].toLocaleUpperCase()}${this.slice(1).toLocaleLowerCase()}`
  }
}

const palavra = new StringMelhor('A CASA É BONITA');

// String.prototype.primeiraLetraMaiuscula = function() {
//   return `${this[0].toLocaleUpperCase()}${this.slice(1).toLocaleLowerCase()}`
// }


console.log(palavra.primeiraLetraMaiuscula());

class Pessoa {
  nome
  sobrenome
  idade
  peso
  altura

  constructor(nome, sobrenome, idade, peso, altura) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.peso = peso
    this.altura = altura
  }

  apresentação() {
    console.log(`Oi, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade}`)
    console.log(`Meu peso é ${this.peso}kg e minha altura é de ${this.altura} m.`);
  }

  calcularImc() {
    return this.peso / Math.pow(this.altura, 2)
  }
}

const pessoa1 = new Pessoa('Ghuilheme', 'Risnik', 29, 61, 1.65)

pessoa1.apresentação()
console.log(`Meu imc é ${pessoa1.calcularImc()}`);

{/* <pessoa nome="Miquéias"></pessoa>
<pessoa nome="João"></pessoa>

<script>
  let elements = document.querySelectorAll('pessoa').forEach((element)=>{
    element.innerHTML = element.attributes.nome.value
    element.style.width = '200px'
    element.style.height = '200px'
    element.style.backgroundColor = 'blue'
  });
</script> */}

// console.log(pessoa1 instanceof Pessoa);


// const pessoa = {
//   nome: 'Guilherme',
//   idade: 29,
//   printThis: function () {console.log(this)}
// }

// pessoa.printThis();
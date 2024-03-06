const UsuarioImportado = require('./Usuario.class');
const Documento = require('./Documento.class')

const usuario = new UsuarioImportado(
  'Natasha',
  '07/05/2022',
  new Documento('CPF', '12345678984')
);

console.log(usuario);
console.log(usuario.documento);
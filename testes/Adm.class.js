const User = require('./User.class')
import database from './DataBase.class'

class Adm extends User {

  constructor(nome, idade) {
    super(nome, idade);
  }
  
  deleteUser(user) {
    
  }
}

module.exports = Adm;
// const DataBase = require('./DataBase.class')

class User {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
}

module.exports = User;


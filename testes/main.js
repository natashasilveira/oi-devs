

const DataBase = require('./DataBase.class')
const User = require('./User.class')
const Adm = require('./Adm.class')


const db = new DataBase();

const admin = new Adm('Chefe', 55);
db.addUser(admin);

db.addUser(new User('Natasha', 30));

console.log(db.users);
console.log('Fim')


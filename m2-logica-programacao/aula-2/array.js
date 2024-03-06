let students = ["Natasha", "Carol", "Ivina"];

console.log(typeof students);
console.log(students);
console.log(students.length);
console.log(students[1]);

// Adiciona item ao final da lista
students.push("José");
console.log(students);

// Adiciona item no início da lista
students.unshift("Ivina");
console.log(students);

// Remove item ao final da lista
students.pop();
console.log(students);

// Remove item no início da lista
students.shift();
console.log(students);

// Remover um item específico
students.splice(2, 1);
console.log(students);

const index = students.indexOf("Jady");
students.splice(index, 1);
console.log(students);

// Fazer uma cópia de um array
const myArray = students; // Não é uma cópia, é um ponteiro
console.log(myArray);

// dessa forma criar uma cópia independente
const array2 = students.slice();
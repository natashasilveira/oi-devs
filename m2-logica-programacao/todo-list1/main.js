
const texto = document.querySelector('input');
const btnInsert = document.querySelector('.div-insert button');
const btnDeleteAll = document.querySelector('header button');
const ul = document.querySelector('ul');

let itensDB = [];

btnDeleteAll.onclick = () => {
  itensDB = []
  updateDB()
}

texto.addEventListener('keypress', e => {
  if (e.key == 'Enter' && texto.value != '') setItemDB();
});

btnInsert.onclick = () => {
  if (texto.value != '') setItemDB();
}

function setItemDB() {
  
  itensDB.push({ 'item': texto.value, 'status': ''});
  updateDB();
}

function updateDB() {
  localStorage.setItem('todolist', JSON.stringify(itensDB));
  loadItens();
}

function loadItens() {
  ul.innerHTML = '';
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? [];
  itensDB.forEach((item, i) => {
    insertItemTela(item.item, item.status, i);
  });
}

function insertItemTela(text, status, i) {
  const li = document.createElement('li')
  
  li.innerHTML = `
    <div class="div-li">
      <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data-i=${i}>
        <i class='bx bx-trash'></i>
      </button>
    </div>
    `
  ul.appendChild(li)

  if (status) {
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }

  texto.value = ''
}

function done(chk, i) {
  console.log(chk);
  if (chk.checked) {
    itensDB[i].status = 'checked' 
  } else {
    itensDB[i].status = '' 
  }

  updateDB()
}

function removeItem(i) {
  itensDB.splice(i, 1)
  updateDB()
}

loadItens()
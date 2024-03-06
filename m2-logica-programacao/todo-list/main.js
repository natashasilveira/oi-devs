let inputNovaTarefa = document.querySelector('#input-nova-tarefa');
let btnAddTarefa = document.querySelector('#btn-add-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');
let janelaEdicao = document.querySelector('#janela-edicao');
let janelaEdicaoFundo = document.querySelector('#janela-edicao-fundo');
let janelaEdicaoBtnFechar = document.querySelector('#janela-edicao-btn-fechar');
let btnAtualizarTarefa = document.querySelector('#btn-atualizar-tarefa');
let idTarefaEdicao = document.querySelector('#id-tarefa-edicao');
let inputTarefaNomeEdicao = document.querySelector('#input-tarefa-nome-edicao');



inputNovaTarefa.addEventListener('keypress', (e) => {
  if(e.key == 'Enter' && inputNovaTarefa.value != ''){
    let tarefa = {
      nome: inputNovaTarefa.value,
      id: gerarId()
    }
    adicionarTarefa(tarefa);
  }
});

btnAddTarefa.addEventListener('click', (e) => {
  if(inputNovaTarefa.value != ''){
    let tarefa = {
      nome: inputNovaTarefa.value,
      id: gerarId()
    }
    adicionarTarefa(tarefa);
  }
});

btnAtualizarTarefa.addEventListener('click', (e) => {
  e.preventDefault();
  let idTarefa = idTarefaEdicao.innerHTML.replace('#', '');
  let tarefa = {
    nome: inputTarefaNomeEdicao.value,
    id: idTarefa
  }

  let tarefaAtual = document.getElementById(idTarefa);

  if(tarefaAtual) {
    let li = criarTagLi(tarefa);
    listaTarefas.replaceChild(li, tarefaAtual);
    alternarJanelaEdicao();
  } else {
    alert('Elemento HTML não encontrado!');
  }
});

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
  alternarJanelaEdicao();
});


function gerarId() {
  return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {
  let li = criarTagLi(tarefa);
  listaTarefas.appendChild(li);
  inputNovaTarefa.value = '';
}

function criarTagLi(tarefa) {
  let li = document.createElement('li');
  li.id = tarefa.id;

  let span = document.createElement('span');
  span.classList.add('texto-tarefa');
  span.innerHTML = tarefa.nome;

  let div = document.createElement('div');

  let btnEditar = document.createElement('button');
  btnEditar.classList.add('btn-acao');
  btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
  btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')');
  
  let btnExcluir = document.createElement('button');
  btnExcluir.classList.add('btn-acao');
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');

  // btnExcluir.onclick = excluir(tarefa.id);

  // btnExcluir.addEventListener('click', excluir => {
  //   alert(tarefa.id);
  // });

  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);

  li.appendChild(span);
  li.appendChild(div);
  return li;
}

function editar(idTarefa) {
  let li = document.getElementById(idTarefa);
  if(li) {
    idTarefaEdicao.innerHTML = '#' + idTarefa;
    inputTarefaNomeEdicao.value = li.innerText;
    alternarJanelaEdicao();
  } else {
    alert('Elemento HTML não encontrado!');
  }
}

function excluir(idTarefa) {
  let confirmacao = window.confirm('Tem certeza que deseja excluir a tarefa?');
  if(confirmacao) {
    let li = document.getElementById(idTarefa);
    if(li) {
      listaTarefas.removeChild(li);
    } else {
      alert('Elemento HTML não encontrado!');
    }
  }
}

function alternarJanelaEdicao() {
  janelaEdicao.classList.toggle('abrir');
  janelaEdicaoFundo.classList.toggle('abrir');
}
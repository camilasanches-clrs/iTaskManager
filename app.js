"use strict";
const tituloInput = document.getElementById('titulo');
const descricaoInput = document.getElementById('descricao');
const adicionarBtn = document.getElementById('adicionar');
class Tarefa {
    titulo;
    descricao;
    dataCriacao;
    concluida;
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.concluida = false;
    }
}
const tarefas = [];
const tasks = document.getElementById('tasks');
adicionarBtn.addEventListener("click", () => {
    const novaTarefa = new Tarefa(tituloInput.value, descricaoInput.value);
    tituloInput.value = "";
    descricaoInput.value = "";
    tarefas.push(novaTarefa);
    const card = document.createElement("div");
    const tasktitulo = document.createElement("h3");
    tasktitulo.textContent = novaTarefa.titulo;
    card.appendChild(tasktitulo);
    const taskdescricao = document.createElement("p");
    taskdescricao.textContent = novaTarefa.descricao;
    card.appendChild(taskdescricao);
    const taskdate = document.createElement("p");
    taskdate.textContent = novaTarefa.dataCriacao.toLocaleString();
    card.appendChild(taskdate);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = novaTarefa.concluida;
    card.appendChild(checkbox);
    tasks.appendChild(card);
});
//# sourceMappingURL=app.js.map
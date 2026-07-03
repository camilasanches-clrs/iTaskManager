const tituloInput = document.getElementById('titulo') as HTMLInputElement;
const descricaoInput = document.getElementById('descricao') as HTMLInputElement;
const adicionarBtn = document.getElementById('adicionar') as HTMLButtonElement;
const tasks = document.getElementById('tasks') as HTMLElement;

class Tarefa {
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    concluida: boolean;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.concluida = false;
    }

    renderizar(): HTMLElement {
        const card = document.createElement("div");
        card.classList.add("task-card");

        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");

        const taskHeader = document.createElement("div");
        taskHeader.classList.add("task-header");

        const checkbox = document.createElement("input");
        checkbox.classList.add("task-checkbox");
        checkbox.type = "checkbox";
        checkbox.checked = this.concluida;
        taskHeader.appendChild(checkbox);

        const tasktitulo = document.createElement("h3");
        tasktitulo.classList.add("task-title");
        tasktitulo.textContent = this.titulo;
        taskHeader.appendChild(tasktitulo);

        taskInfo.appendChild(taskHeader);

        const taskdescricao = document.createElement("p");
        taskdescricao.classList.add("task-description");
        taskdescricao.textContent = this.descricao;
        taskInfo.appendChild(taskdescricao);

        card.appendChild(taskInfo);

        const taskdate = document.createElement("span");
        taskdate.classList.add("task-date");
        taskdate.textContent = this.dataCriacao.toLocaleString();
        card.appendChild(taskdate);

        checkbox.addEventListener("change", () => {
            this.concluida = checkbox.checked;
            card.classList.toggle("concluida");
        });

        return card;
    }
}

const tarefas: Tarefa[] = [];

adicionarBtn.addEventListener("click", () => {
    const novaTarefa = new Tarefa(tituloInput.value, descricaoInput.value);
    tarefas.push(novaTarefa);

    const cardPronto = novaTarefa.renderizar();
    tasks.appendChild(cardPronto);

    tituloInput.value = "";
    descricaoInput.value = "";
});
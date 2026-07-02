const tituloInput = document.getElementById('titulo') as HTMLInputElement;
const descricaoInput = document.getElementById('descricao') as HTMLInputElement;
const adicionarBtn = document.getElementById('adicionar') as HTMLButtonElement;

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
}

const tarefas: Tarefa[] = [];
const tasks = document.getElementById('tasks') as HTMLElement;

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




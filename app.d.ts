declare const tituloInput: HTMLInputElement;
declare const descricaoInput: HTMLInputElement;
declare const adicionarBtn: HTMLButtonElement;
declare const tasks: HTMLElement;
declare class Tarefa {
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    concluida: boolean;
    constructor(titulo: string, descricao: string);
    renderizar(): HTMLElement;
}
declare const tarefas: Tarefa[];
//# sourceMappingURL=app.d.ts.map
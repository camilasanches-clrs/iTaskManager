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
export {};
//# sourceMappingURL=app.js.map
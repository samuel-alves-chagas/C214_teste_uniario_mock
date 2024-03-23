import { SistemaAtendimento } from "./SistemaAtendimento";

export class HorarioAtendimento {
    private nomeDoProfessor: string = "";
    private horarioDeAtendimento: string = "";
    private periodo: string = "";
    private sala: string = "";
    private predio: string[] = [];
    private sistemaAtendimento;

    constructor(sitemaInatel:SistemaAtendimento) {
        this.sistemaAtendimento = sitemaInatel
    }

    public buscarAtendimento(professor: string) {
        const dadosAtendimento = this.sistemaAtendimento.buscarDadosServidor(professor)
        console.log(dadosAtendimento)
        return JSON.parse(dadosAtendimento)
    }
}
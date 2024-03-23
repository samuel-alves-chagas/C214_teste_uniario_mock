export class SistemaAtendimento {

    public buscarDadosServidor(nomeDoProfessor:string): string {
        /**Fingindo que esse sistema faz uma conexão remota, não foi necessário implementar porque o professor não pediu */
        const respostaServidor = "{\"nomeDoProfessor\":\"Chris Lima\",\"horarioDeAtendimento\":\"17:30\",\"periodo\":\"integral\",\"sala\":\"1\",\"predio\":[\"1\"]}"

        return respostaServidor
    }
}
import { HorarioAtendimento } from "./HorariosAtendimento";

export class SistemaAtendimento {

    public buscaHorarioAtendimentoProfessor(nomeDoProfessor:string): HorarioAtendimento {
        /**Fingindo que esse sistema faz uma conexão remota, não foi necessário implementar porque o professor não pediu */
        const retornoServidor: HorarioAtendimento = JSON.parse("{\"nomeDoProfessor\":\"Chris Lima\",\"horarioDeAtendimento\":\"17:30\",\"periodo\":\"integral\",\"sala\":\"1\",\"predio\":[\"1\"]}")
        
        return retornoServidor
    }
}
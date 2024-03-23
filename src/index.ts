import { HorarioAtendimento } from "./HorariosAtendimento"
import { SistemaAtendimento } from "./SistemaAtendimento"

const sistemdeAtendimentoInatel = new SistemaAtendimento()
const horarioDoChris = new HorarioAtendimento(sistemdeAtendimentoInatel)
console.log(horarioDoChris.buscarAtendimento("Chris Lima"))


import { SistemaAtendimento } from "../src/SistemaAtendimento"
import { HorarioAtendimento } from "../src/HorariosAtendimento"

jest.mock('../src/SistemaAtendimento', ()=>({
    __esModule: true,
    SistemaAtendimento: jest.fn().mockImplementation(() => ({
      buscaDadosAtendimento: jest.fn(() => "{\"nomeDoProfessor\":\"Renzo\",\"horarioDeAtendimento\":\"17:30\",\"periodo\":\"integral\",\"sala\":\"1\",\"predio\":[\"1\"]}")
    }))
}));

describe('Testando página WEB que apresenta os horários de atendimento', ()=> {

    it('Validando que o retorno do servidor é uma string', ()=> {
        const sistemdeAtendimentoInatel = new SistemaAtendimento()

        const dadosAtendimentoChris = sistemdeAtendimentoInatel.buscarDadosAtendimento("Chris Lima")

        expect(typeof dadosAtendimentoChris).toBe("string")
    })

    it('Validando que o professor é o Renzo', ()=> {
        const sistemdeAtendimentoInatel = new SistemaAtendimento()

        const dadosAtendimentoChris = sistemdeAtendimentoInatel.buscarDadosAtendimento("Renzo")

        expect(typeof dadosAtendimentoChris).toBe("string")
    })
})

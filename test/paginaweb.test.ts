

import { SistemaAtendimento } from "../src/SistemaAtendimento"
import { HorarioAtendimento } from "../src/HorariosAtendimento"

jest.mock('../src/SistemaAtendimento', ()=>({
    __esModule: true,
    SistemaAtendimento: jest.fn().mockImplementation(() => ({
      buscarDadosServidor: jest.fn(() => "{\"nomeDoProfessor\":\"Renzo\",\"horarioDeAtendimento\":\"17:30\",\"periodo\":\"integral\",\"sala\":\"1\",\"predio\":[\"1\"]}")
    }))
}));

describe('Testando página WEB que apresenta os horários de atendimento', ()=> {

    let sistemdeAtendimentoInatel: SistemaAtendimento
    let horarioAtendimento: HorarioAtendimento

    beforeEach(()=> {
        sistemdeAtendimentoInatel = new SistemaAtendimento()
        horarioAtendimento = new HorarioAtendimento(sistemdeAtendimentoInatel)
    })

    it('Validando que o retorno da consulta é um objeto e não a string entregue pelo servidor', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(typeof dadosAtendimentoChris).toBe("object")
    })

    it('Validando que o retorno da consulta possui o campo nomeDoProfessor', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimentoChris).toHaveProperty("nomeDoProfessor")
    })

    it('Validando que o retorno da consulta possui o campo horarioDeAtendimento', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimentoChris).toHaveProperty("horarioDeAtendimento")
    })

    it('Validando que o retorno da consulta possui o campo periodo', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimentoChris).toHaveProperty("periodo")
    })

    it('Validando que o retorno da consulta possui o campo sala', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimentoChris).toHaveProperty("sala")
    })

    it('Validando que o retorno da consulta possui o campo predio', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimentoChris).toHaveProperty("predio")
    })

    it('Validando que o nome do professor é Renzo', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Renzo")
        expect(dadosAtendimentoChris.nomeDoProfessor).toBe("Renzo")
    })

    it('Validando que a propriedade horarioDeAtendimento é uma string', ()=> {
        const dadosAtendimentoChris = horarioAtendimento.buscarAtendimento("Renzo")
        expect(typeof dadosAtendimentoChris.horarioDeAtendimento).toBe("string")
    })
})

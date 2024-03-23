

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
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(typeof dadosAtendimento).toBe("object")
    })

    it('Validando que o retorno da consulta possui o campo nomeDoProfessor', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimento).toHaveProperty("nomeDoProfessor")
    })

    it('Validando que o retorno da consulta possui o campo horarioDeAtendimento', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimento).toHaveProperty("horarioDeAtendimento")
    })

    it('Validando que o retorno da consulta possui o campo periodo', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimento).toHaveProperty("periodo")
    })

    it('Validando que o retorno da consulta possui o campo sala', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimento).toHaveProperty("sala")
    })

    it('Validando que o retorno da consulta possui o campo predio', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris Lima")
        expect(dadosAtendimento).toHaveProperty("predio")
    })

    it('Validando que o nome do professor é Renzo', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Renzo")
        expect(dadosAtendimento.nomeDoProfessor).toBe("Renzo")
    })

    it('Validando que a propriedade sala possui valor 1', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Renzo")
        expect(dadosAtendimento.sala).toBe("1")
    })

    it('Validando que por a sala ser 1 o prédio também é 1', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Renzo")
        expect(dadosAtendimento.sala).toBe("1")
        expect(dadosAtendimento.predio[0]).toBe("1")
    })

    it('Validando que só pode haver um item no array de prédio', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Renzo")
        expect(dadosAtendimento.predio.length).toBe(1)
    })
})

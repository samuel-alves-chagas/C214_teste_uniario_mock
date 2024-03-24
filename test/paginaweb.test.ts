

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

    it('Validando que o retorno da consulta é um objeto', ()=> {
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

    it('Validando que uma vez que a sala é 1 o prédio também é 1', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Renzo")
        expect(dadosAtendimento.sala).toBe("1")
        expect(dadosAtendimento.predio[0]).toBe("1")
    })

    it('Validando que só pode haver um item no array de prédio', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Renzo")
        expect(dadosAtendimento.predio.length).toBe(1)
    })

    // Cenário de falha
    it('Validando que o buscarDadosServidor não retorna o nome do Chris', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(dadosAtendimento.nome).not.toBe("Chris")
    })

    it('Validando que a propriedade horarioDeAtendimento não é do tipo Date', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(typeof dadosAtendimento.horarioDeAtendimento).not.toBe("Date")
    })

    it('Validando que a propriedade periodo não é do tipo Number', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(typeof dadosAtendimento.periodo).not.toBe("number")
    })

    it('Validando que a propriedade sala não é do tipo Number', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(typeof dadosAtendimento.sala).not.toBe("number")
    })

    it('Validando que a propriedade prédio não é do tipo string', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(typeof dadosAtendimento.predio).not.toBe("string")
    })

    it('Validando que a resposta da busca por atendimento não retorna uma fila de alunos que estão esperando para ser atendidos', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(typeof dadosAtendimento.filaAlunos).toBe("undefined")
    })

    it('Validando que a propriedade periodo não é vespertino mesmo que o horário seja 17:30', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(dadosAtendimento.periodo).not.toBe("vespertino")
    })

    it('Validando que a resposta da busca por atendimento não retorna as matérias que o professor leciona', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(typeof dadosAtendimento.materias).toBe("undefined")
    })

    it('Validando que a resposta da busca por atendimento não a string que o servidor retorna', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(dadosAtendimento).not.toBe("{\"nomeDoProfessor\":\"Renzo\",\"horarioDeAtendimento\":\"17:30\",\"periodo\":\"integral\",\"sala\":\"1\",\"predio\":[\"1\"]}")
    })

    it('Validando que a resposta da busca por atendimento não é nula', ()=> {
        const dadosAtendimento = horarioAtendimento.buscarAtendimento("Chris")
        expect(dadosAtendimento).not.toBe(null)
    })
})

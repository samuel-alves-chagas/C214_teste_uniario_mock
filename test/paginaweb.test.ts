describe('Testando página WEB', ()=> {
    
    const retornoServidor = "{\"nomeDoProfessor\":\"Chris Lima\",\"horarioDeAtendimento\":\"17:30\",\"periodo\":\"integral\",\"sala\":\"1\",\"predio\":[\"1\"]}"

    it('Validando que o retorno é uma string', ()=>{
        expect(typeof retornoServidor).toBe("string")
    })
})

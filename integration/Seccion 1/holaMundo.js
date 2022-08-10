describe("Bienvenido al curso seccion 1", ()=>{
    it('mi primer test', () => {
        cy.log("Hola mundo") //mandar mensaje
        cy.wait(1500) //Esperar al siguiente mpaso
    });

    it('mi segundo test', () => {
        cy.visit("https://demoqa.com/text-box") //Visitar pagina
        cy.get("#userName").type("Diego") //Es un elemento ID por lo que se usa el signo '#', si usas la clase se usa el '.'
        cy.wait(3000)
    });
})
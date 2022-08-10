/// <reference types="cypress"/>

describe("Seccion 1:Validando titulo", ()=>{
    it('TestValidar tituloPagina', () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','ToolsQA')
        cy.log("Ok si jala")
    });
});
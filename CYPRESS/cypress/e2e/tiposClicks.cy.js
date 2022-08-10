/// <reference types="cypress"/>
describe("Click basico, forzado y por coordenadas",()=>{
    it.only('BF', () => {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
        cy.get('#main-tfa').type('{pageUp}').click()
        cy.wait(2000)
        cy.get('#main-tfa').type('{pageDown}').click({force:true})
        cy.wait(2000)
        cy.get('#main-tfa').type('{pageDown}').click(50,50)
    });
})

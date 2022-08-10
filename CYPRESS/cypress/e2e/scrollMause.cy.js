/// <reference types="cypress"/>
describe("Ejemplo :type pageUp, page Down",()=>{
    it.only('pageUp', () => {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
        cy.get('#main-tfa').type('{pageUp}')
        cy.wait(2000)
        cy.get('#main-tfa').type('{pageDown}')
    });
})

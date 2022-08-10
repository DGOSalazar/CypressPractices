/// <reference types="cypress"/>
describe("Ejemplo :type pageUp, page Down",()=>{
    it('pageUp', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get('#userName').type('(pagup')
    });
})
describe("Ejemplo :type pageUp, page Down",()=>{
    it('pageDown', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get('#userName').type('(pagdown')
    });
})

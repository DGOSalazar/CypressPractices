/// <reference types="cypress"/>
describe("Asserts",()=>{
    it('Demo Assert', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','Google')
        cy.get('#userName').type('(pagup')
    });
})
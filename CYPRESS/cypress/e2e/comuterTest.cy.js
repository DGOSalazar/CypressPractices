/// <reference types="cypress"/>
require('cypress-plugin-tab')

describe('Formulario Computadoras', () => {

    it('Busqueda de computadoras',() =>{
        cy.visit("http://computer-database.gatling.io/")
        cy.title().should('eq','Computers database')
        cy.get("#searchbox").should("be.visible").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)
        cy.get("h1").should("be.visible")
        cy.get("#searchbox").clear().type("ASCI")
        cy.get("#searchsubmit").should("be.visible").click()
    })
    it('Agregar registros',( )=>{
        cy.get("#add").should("be.visible").click()
        cy.get("#name").should("be.visible").type("Diego")
        cy.get("#introduced").should("be.visible").type("1998-08-22")
        cy.get("#discontinued").should("be.visible").type("2000-01-21")
        cy.get("#company").select(13)

    })

})
/// <reference types="cypress"/>
require('cypress-plugin-tab')

describe('Llenar formulario', () => {

  it('Fromulario', () => {
    cy.visit('https://testingqarvn.com.es/datos-personales/')
    cy.title().should('eq','Datos Personales | TestingQaRvn')
    cy.get("#wsf-1-field-21").type("Diego Salazar Contreras").tab().
    type("Salazar Contreras").tab().
    type("dz122012@hotmail.com").tab().
    type("3333227676").tab().
    type("Jacarandas 262 colonia los sauces")
    cy.wait(4000)
    cy.get("#wsf-1-field-27").should('be.visible').click()
    
  })
})
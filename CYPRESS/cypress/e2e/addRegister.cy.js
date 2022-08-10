/// <reference types="cypress"/>
require('cypress-plugin-tab')

describe('Ingresar seccion tablas', () => {
  it('ingreso', () => {

    cy.visit("https://demoqa.com/")
    cy.title().should('eq','ToolsQA')
    cy.get(".category-cards > :nth-child(1) > :nth-child(1").click()
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click({force:true})
    cy.get("#searchBox").type('{pageUp}')
    cy.wait(1000)
  })
})
describe('Eliminación de registros', ()=>{
  it('Eliminando', () => {
    cy.get('#delete-record-1').click()
    cy.wait(1000)
    cy.get('#delete-record-2').click()
    cy.wait(1000)
    cy.get('#delete-record-3').click()

  })
})
describe('Abrir ventana registros', ()=>{
    it('Abrir', () => {
      cy.get('#addNewRecordButton').click()
      cy.wait(1000)
    })
  })
  describe('Agregar registros nuevos', ()=>{
    it('Agregando', () => {
      cy.get("#firstName").type("Diego").tab().
      type("Salazar").tab().
      type("dz122012@hotmail.com").tab().
      type("23").tab().
      type("21000").tab().
      type("Tecnologias de la información").tab().click()
      cy.wait(1000)
    })
  })
  describe('Agregar registros nuevos', ()=>{
    it('Agregando', () => {
      cy.get("#edit-record-1").click()
    })
  })
  describe('Editar Registro', ()=>{
    it('Editando', () => {
      cy.get("#firstName").type("Josuelo").tab().
      type("Salazar").tab().
      type("dz122012@hotmail.com").tab().
      type("23").tab().
      type("15").tab().
      type("Cantante").tab().click()
    })
  })
  describe('Buscar Registro', ()=>{
    it('Buscando', () => {
      cy.get("#searchBox").type("Diego")
      cy.wait(1000)
      cy.get("#basic-addon2").click()
      cy.wait(1000)
      cy.get("#searchBox").clear()
    })
  })
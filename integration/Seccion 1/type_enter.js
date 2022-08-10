/// <reference types="cypress"/>
describe("Funciones para type",()=>{
    it('Presionar enter', () => {
        cy.visit("https://www.google.com.mx")
        cy.title().should('eq',"Google")

        cy.get("[name='q']").type("Diego Salazar Contreras {enter}")
        //+ concatena o une comandos
        cy.get("#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.NJo7tc.Z26q7c.jGGQ5e > div > a > h3").click()
        cy.get("#mount_0_0_50 > div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.dp1hu0rb.d2edcug0.taijpn5t.j83agx80.gs1a9yip > div > div > div > div.gh1tjcio > div > div > div.bp9cbjyn.j83agx80.taijpn5t.c4xchbtz.by2jbhx6.a0jftqn4 > div > span > span").click()
    });
});

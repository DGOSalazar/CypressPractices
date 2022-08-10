describe("Busquedas", () =>  {

    it('Haciendo busqueda youtube', () => {
        cy.visit("https://www.youtube.com/")
        cy.get("#search-input").type("youtube")
        cy.get("#search-icon-legacy").click
    });

})

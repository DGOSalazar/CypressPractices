describe("Tab", () =>  {

    it('type con tab', () => {
        cy.visit("https://www.youtube.com/")
        cy.get("#search-input").type("youtube")
        cy.get("#search-icon-legacy").click
        cy.wait(1000)
    });

})

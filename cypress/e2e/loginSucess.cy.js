describe.only("Tentativa de login com dados corretos", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#login").type("12319336");
    cy.get("#senha").type("12319336");
    cy.get("#btn-login").click();
    cy.url("").should("eq", "https://materdei.jacad.com.br/academico/aluno-v2");
  });
});

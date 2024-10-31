describe("Tentativa de login sem informar a senha", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#login").type("fernando");
    cy.get("#btn-login").click();
    cy.get("#senha-error").should("be.visible");
  });
});

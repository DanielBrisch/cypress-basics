describe("Tentativa de login sem informar os campos", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#btn-login").click();
    cy.get("#login-error").should("be.visible");
    cy.get("#senha-error").should("be.visible");
  });
});

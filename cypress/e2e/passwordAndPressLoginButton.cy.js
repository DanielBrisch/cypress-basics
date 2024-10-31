describe("Tentativa de login sem informar o usuario", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#senha").type("senha");
    cy.get("#btn-login").click();
    cy.get("#login-error").should("be.visible");
  });
});

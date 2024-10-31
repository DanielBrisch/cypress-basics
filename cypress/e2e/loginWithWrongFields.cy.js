describe("Tentativa de login com dados errados", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#login").type("Daniel");
    cy.get("#senha").type("123");
    cy.get("#btn-login").click();
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "be.visible"
    );
  });
});

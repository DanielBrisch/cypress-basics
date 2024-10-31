describe.only("Entrar na tela de Disciplinas cursadas", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#login").type("12218285");
    cy.get("#senha").type("********");
    cy.get("#btn-login").click();
    cy.url("").should("eq", "https://materdei.jacad.com.br/academico/aluno-v2");
    cy.visit(
      "https://materdei.jacad.com.br/academico/aluno-v2/disciplinas-cursadas/"
    );
    cy.get(".table.table-striped.table-bordered.small.mb-0");
  });
});

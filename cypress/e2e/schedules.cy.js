describe.only("Entrar na tela de quadro de horarios ", () => {
  it("passes", () => {
    cy.visit("https://materdei.jacad.com.br/academico/aluno-v2/login");
    cy.get("#login").type("12218285");
    cy.get("#senha").type("********");
    cy.get("#btn-login").click();
    cy.url("").should("eq", "https://materdei.jacad.com.br/academico/aluno-v2");
    cy.visit(
      "https://materdei.jacad.com.br/academico/aluno-v2/horario/quadro-de-horarios"
    );
    cy.get(
      ".table.table-striped.table-bordered.dataTable.no-footer.mb-0.small"
    );
  });
});

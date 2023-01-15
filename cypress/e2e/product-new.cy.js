/// <reference types="cypress" />

describe("Product New (e2e)", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Verify texts in page", () => {
    cy.contains("Product List");
  });
});

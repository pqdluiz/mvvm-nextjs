/// <reference types="cypress" />

describe("Product List (e2e)", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Verify texts in page", () => {
    cy.contains("Product List");
  });
});

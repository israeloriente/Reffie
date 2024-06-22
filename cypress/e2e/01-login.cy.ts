/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";

describe("Testing Login Auth", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });

  it("Login ok", () => {
    cy.login(Cypress.env("AUTH_USER"), Cypress.env("AUTH_PASS"));
    cy.url().should('eq', `${Cypress.env("BASE_URL")}landlord/inner/messages`);
    cy.saveAuth();
  });

  it("Login Fails", () => {
    cy.login(faker.internet.email(), faker.internet.password());
    cy.get(".MuiAlert-message")
      .contains("Either the user does not exist or the password is incorrect")
      .should("be.visible");
  });
});

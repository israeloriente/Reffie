/// <reference types="Cypress" />

Cypress.Commands.add("getAuth", () => {
  cy.task("checkFileExists", Cypress.env("AUTH_PATH")).then(() => {
    cy.window().then((window) => {
      cy.readFile(Cypress.env("AUTH_PATH")).then(({ token, refreshToken }) => {
        window.localStorage.setItem(Cypress.env("STORAGE_AUTH_TOKEN"), token);
        window.localStorage.setItem(Cypress.env("STORAGE_AUTH_TOKEN_REFRESH"), refreshToken);
      });
    });
    cy.visit(`${Cypress.env("BASE_URL")}`);
    cy.get('#root').should('be.visible');
    cy.location("pathname").then((pathname) => {
      if (pathname === "/landlord/login") {
        cy.login(Cypress.env("AUTH_USER"), Cypress.env("AUTH_PASS"));
        cy.url().should("eq", `${Cypress.env("BASE_URL")}landlord/inner/messages`);
        cy.saveAuth();
      }
    });
  });
});

Cypress.Commands.add("saveAuth", () => {
  cy.window().then(() => {
    let token = window.localStorage.getItem(Cypress.env("STORAGE_AUTH_TOKEN"));
    let refreshToken = window.localStorage.getItem(Cypress.env("STORAGE_AUTH_TOKEN_REFRESH"));
    if (token && refreshToken) cy.writeFile(Cypress.env("AUTH_PATH"), { token, refreshToken });
  });
});

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get('input[placeholder="Email"]').type(username);
  cy.get('input[placeholder="Password"]').type(password, { log: false });
  cy.contains("Sign in").click();
});

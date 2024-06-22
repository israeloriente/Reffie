/// <reference types="Cypress" />

Cypress.Commands.add("getAuth", () => {
  cy.window().then((window) => {
    cy.readFile(Cypress.env("AUTH_PATH")).then(({ token, refreshToken }) => {
      window.localStorage.setItem(Cypress.env("STORAGE_AUTH_TOKEN"), token);
      window.localStorage.setItem(Cypress.env("STORAGE_AUTH_TOKEN_REFRESH"), refreshToken);
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

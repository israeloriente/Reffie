import "./commands";

// cypress/support/
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<JQuery<HTMLElement>>;
      saveAuth(): Chainable<JQuery<HTMLElement>>;
      getAuth(): Chainable<JQuery<HTMLElement>>;
    }
  }
}

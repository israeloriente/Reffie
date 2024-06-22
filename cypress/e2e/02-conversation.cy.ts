/// <reference types="Cypress" />

import { randowData } from "../utils/main";

describe("Conversation Checkbox", () => {
  beforeEach(() => {
    cy.getAuth();
    cy.visit(`${Cypress.env("BASE_URL")}landlord/inner/messages`);
  });

  it("Select checkbox", () => {
    cy.get("._conversationHeadings_l1p28_14", { timeout: 30000 }).contains("Active").click();
    let rd = randowData("number", { qtd: 1, min: 1, max: 10 });
    cy.get(
      `#Active > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > ._desktop_1cdns_8 > .css-ayshjd > .MuiPaper-root > .MuiTable-root > .MuiTableBody-root > :nth-child(${rd}) > ._tableCellWithCheckbox_1j1i0_39`,
      { timeout: 30000 }
    ).as("checkboxCell");
    cy.get("@checkboxCell").find('input[type="checkbox"]').first().click({ force: true });
    cy.get(".css-qxfc5n > .MuiPaper-root").should("be.visible");
  });
});

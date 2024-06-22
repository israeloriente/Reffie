/// <reference types="Cypress" />

import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    BASE_URL: "https://platform-staging.reffie.me/",
    AUTH_PATH: "cypress/fixtures/auth.json",
    STORAGE_AUTH_TOKEN: "access_token",
    STORAGE_AUTH_TOKEN_REFRESH: "refresh_token",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        // Example:
        //   async funcao(id) {
        //     const { data } = await axios.get(`https://api.com/${id}`);
        //     return data;
        //   }
      });
    },
  },
});

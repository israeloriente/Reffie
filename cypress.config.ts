/// <reference types="Cypress" />

import { defineConfig } from "cypress";
import fs from "fs-extra";

export default defineConfig({
  env: {
    BASE_URL: "https://platform-staging.reffie.me/",
    AUTH_PATH: "cypress/fixtures/auth.json",
    STORAGE_AUTH_TOKEN: "access_token",
    STORAGE_AUTH_TOKEN_REFRESH: "refresh_token",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        checkFileExists(filePath) {
          if (!fs.existsSync(filePath)) fs.writeJsonSync(filePath, { token: "", refreshToken: "" });
          return null;
        },
      });
    },
  },
});

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});

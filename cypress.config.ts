import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'tzttyb',
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://dev.rentzila.com.ua/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

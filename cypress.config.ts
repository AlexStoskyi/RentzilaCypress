import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  projectId: 'tzttyb',
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: process.env.BASE_URL, 
    setupNodeEvents(on, config) {
    },
    env: {
      apiKey: process.env.CYPRESS_API_KEY,
      userLogin: process.env.USER_LOGIN,
      userPassword: process.env.USER_PASSWORD,
    },
  },
});


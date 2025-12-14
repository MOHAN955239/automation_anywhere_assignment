
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: false,
    baseURL: 'https://pathfinder.automationanywhere.com',
    screenshot: 'on',
    video: 'on'
  },
  reporter: [['html', { open: 'never' }]]
});

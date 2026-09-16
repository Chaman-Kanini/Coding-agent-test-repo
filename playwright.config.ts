import { defineConfig } from '@playwright/test';

/**
 * Playwright configuration for running landing-page acceptance tests
 * against a deterministic Vite preview server.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    headless: true,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx vite --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: false,
    timeout: 120000,
  },
});

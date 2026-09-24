import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    // No egress in the sandbox: fail remote hosts fast instead of hanging `load`.
    launchOptions: { args: ['--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1, EXCLUDE localhost'] },
  },
  webServer: {
    // Vite directly, not the package's scripts: an agent that rewrites
    // package.json must not be able to change how the tests reach the app
    // (run e579b80c's GREEN dropped `--host 127.0.0.1` from `preview`, the
    // server bound to IPv6 localhost, and every suite waited out 120 s).
    command: 'npx vite build && npx vite preview --host 127.0.0.1 --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: true,
    timeout: 120000,
  },
});

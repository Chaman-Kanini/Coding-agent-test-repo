import { defineConfig } from "vitest/config";

// Written by Propel provisioning. `globals: true` is required, not stylistic:
// @testing-library/react registers its automatic afterEach(cleanup) only when a
// global afterEach exists, and @testing-library/jest-dom's default entry point
// calls a bare global `expect`. Without it, renders accumulate between tests in
// the same file and a second test fails on duplicate elements.
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
});

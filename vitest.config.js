import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // Vitest globals (describe/it/expect) so existing test files need
        // minimal changes. Remove this once tests are converted to imports.
        globals: true,
        environment: "node",
        include: ["tests/**/*.spec.js", "tests/**/*Spec.js"],
    },
});

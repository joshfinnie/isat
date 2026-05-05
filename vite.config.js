import { defineConfig } from "vite";

// Dev server: serves the viz/ directory as the root so existing
// relative paths (../js/isat.min.js, ./tle/, etc.) all resolve correctly.
export default defineConfig({
  root: "viz",
  server: {
    port: 9999,
  },
});

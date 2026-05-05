import js from "@eslint/js";

export default [
  {
    // Global ignores — vendor code, generated bundles, and legacy test runner
    ignores: [
      "node_modules/**",
      "js/isat.js",
      "js/isat.min.js",
      "viz/cesium/**",
      "science.nasa.gov/media/cesium/**",
      "jasmine/**",
      "doc/**",
      "AIAA-2006-6753/**",
      "Miura_Thesis_CD/**",
    ],
  },
  js.configs.recommended,
  {
    files: ["js/**/*.js", "sgp4/**/*.js", "tests/**/*.js", "*.config.js"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        // Existing code uses browser globals — tighten these as we modularize
        console: "readonly",
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly",
        // CJS globals still needed until we move to ESM
        require: "readonly",
        module: "writable",
        exports: "writable",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      // Relax rules that the existing codebase fails en masse.
      // Tighten these one phase at a time.
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];

import js from "@eslint/js";

export default [
    {
        ignores: ["node_modules/**", "viz/cesium/**", "doc/**", "jasmine/**"],
    },
    js.configs.recommended,
    {
        // Pure math library — no browser or CJS globals
        files: ["js/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                console: "readonly",
            },
        },
        rules: {
            "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
            "no-undef": "error",
        },
    },
    {
        // Viz layer — browser globals needed
        files: ["viz/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                console: "readonly",
                document: "readonly",
                window: "readonly",
                navigator: "readonly",
                XMLHttpRequest: "readonly",
                Image: "readonly",
                setInterval: "readonly",
                clearInterval: "readonly",
                setTimeout: "readonly",
                Cesium: "readonly",
            },
        },
        rules: {
            "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
            "no-undef": "error",
        },
    },
    {
        // Tests — vitest globals
        files: ["tests/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                console: "readonly",
                describe: "readonly",
                it: "readonly",
                expect: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
            },
        },
        rules: {
            "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
            "no-undef": "error",
        },
    },
    {
        files: ["*.config.js", "scripts/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
        },
    },
];

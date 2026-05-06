import { defineConfig } from "vite";

export default defineConfig({
    root: "viz",
    define: {
        CESIUM_BASE_URL: JSON.stringify("/cesium/"),
    },
    optimizeDeps: {
        exclude: ["cesium"],
    },
    server: {
        port: 9999,
        proxy: {
            // Proxy CelesTrak requests to avoid browser CORS restrictions in dev
            "/celestrak": {
                target: "https://celestrak.org",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/celestrak/, "/NORAD/elements/gp.php"),
            },
        },
    },
});

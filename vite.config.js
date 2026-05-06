import { defineConfig } from "vite";
import cesium from "vite-plugin-cesium";

export default defineConfig({
    root: "viz",
    plugins: [cesium()],
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

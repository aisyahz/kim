import { defineConfig } from "vite";
import { resolve } from "node:path";

// Kim is a static multi-page site. The main portfolio is the root entry; each
// demo is its own HTML entry under /demo/* so Vite emits a separate bundle per
// demo — visiting one demo never downloads another demo's JS/CSS. `base: "./"`
// keeps asset URLs relative so the same build works from a domain root or a
// subpath (Netlify / GitHub Pages).
export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      // Multi-page inputs. Add a line per demo as they are approved.
      input: {
        main: resolve(__dirname, "index.html"),
        "demo-property": resolve(__dirname, "demo/property/index.html"),
      },
      output: {
        // Only the main site uses gsap/lenis; demos avoid them. Splitting here
        // keeps those libs out of the demo bundles.
        manualChunks: {
          gsap: ["gsap"],
          lenis: ["lenis"],
        },
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});

import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "dot-matrix-display",
      fileName: (format) => `dot-matrix-display.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        sourcemapExcludeSources: true,
        globals: {
          react: "React",
        },
      },
    },
    sourcemap: true,
    target: "esnext",
    minify: false,
  },
});

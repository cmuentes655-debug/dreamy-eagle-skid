import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command }) => ({
  // En el build de producción el sitio se sirve bajo el subpath de GitHub Pages.
  // En desarrollo se mantiene la raíz para no alterar el flujo local.
  base: command === "build" ? "/dreamy-eagle-skid/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

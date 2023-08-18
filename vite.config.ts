import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: `${path.resolve(__dirname, "./src/api/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      modules: `${path.resolve(__dirname, "./src/modules/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      router: `${path.resolve(__dirname, "./src/router/")}`,
      models: `${path.resolve(__dirname, "./src/models/")}`,
      ui: `${path.resolve(__dirname, "./src/ui/")}`,
      utils: `${path.resolve(__dirname, "./src/utils/")}`
    }
  }
});

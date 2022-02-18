import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import reactSvgPlugin from "vite-plugin-react-svg";
import svgrPlugin from "vite-plugin-svgr";
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  jsx: "react",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Tự động tìm file có các đuôi này
  },
});

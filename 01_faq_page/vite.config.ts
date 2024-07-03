import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  plugins: [react()] as UserConfig["plugins"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

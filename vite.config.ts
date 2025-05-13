import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My-Portfolio/", // 👈 EXACTLY this (must match your repo name)
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});

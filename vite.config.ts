import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My-Portfolio/", // <-- Add this line
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});

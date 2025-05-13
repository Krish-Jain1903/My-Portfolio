import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My-Portfolio/", // EXACT match to your repo name
  plugins: [react()],
});

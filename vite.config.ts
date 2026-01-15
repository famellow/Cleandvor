import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { existsSync, readFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Проверяем наличие кастомного домена
  // Если есть файл CNAME в public или в корне, используем base: "/"
  const hasCustomDomain = 
    (existsSync("public/CNAME") && readFileSync("public/CNAME", "utf-8").trim() && !readFileSync("public/CNAME", "utf-8").trim().startsWith("#")) ||
    (existsSync("CNAME") && readFileSync("CNAME", "utf-8").trim());
  
  // Для production: если есть кастомный домен - base: "/", иначе "/Cleandvor/"
  // Для development: всегда base: "/"
  const base = mode === "production" && !hasCustomDomain ? "/Cleandvor/" : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

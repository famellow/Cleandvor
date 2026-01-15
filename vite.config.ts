import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { existsSync, readFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Для development: всегда base: "/"
  // Для production: проверяем наличие кастомного домена
  let base = "/";
  
  // Можно переопределить через переменную окружения
  if (process.env.VITE_BASE_PATH) {
    base = process.env.VITE_BASE_PATH;
  } else if (mode === "production") {
    // Проверяем наличие кастомного домена в CNAME файле
    const checkCNAME = (filePath: string) => {
      if (existsSync(filePath)) {
        const content = readFileSync(filePath, "utf-8").trim();
        // Проверяем, что файл не пустой и не содержит только комментарии
        const lines = content.split("\n").filter(line => line.trim() && !line.trim().startsWith("#"));
        return lines.length > 0;
      }
      return false;
    };
    
    const hasCustomDomain = checkCNAME("public/CNAME") || checkCNAME("CNAME");
    
    // Если нет кастомного домена, используем "/Cleandvor/" для GitHub Pages
    if (!hasCustomDomain) {
      base = "/Cleandvor/";
    }
    
    // Выводим информацию для отладки
    console.log(`[Vite] Production build - base path: "${base}", hasCustomDomain: ${hasCustomDomain}`);
  }

  return {
    base,
    build: {
      // Убеждаемся, что base path применяется ко всем ресурсам
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          // Все пути должны учитывать base
          assetFileNames: (assetInfo) => {
            return `assets/${assetInfo.name}`;
          },
        },
      },
    },
    server: {
      host: "localhost",
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

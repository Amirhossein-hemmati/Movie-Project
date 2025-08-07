import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";

import tailwindcss from "@tailwindcss/vite";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    server: {
      host: "test.mblt.ir",
      watch: {
        usePolling: true,
      },
    },
    base: env.VITE_APP_BASE_URL,
    plugins: [vue(), basicSsl(), tailwindcss()],
    build: {
      jsCodeSplit: false,
      cssMinify: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const ext = assetInfo.name?.split(".").pop();
            if (ext === "woff" || ext === "woff2" || ext == "ttf") {
              return `assets/font/[name][extname]`;
            } else if (ext === "css") {
              return `assets/css/[name]_[hash][extname]`;
            }
            return `assets/[name]_[hash][extname]`;
          },
          chunkFileNames: () => {
            return `assets/js/[name]_[hash].js`;
          },
          entryFileNames: () => {
            return `assets/js/[name]_[hash].js`;
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  };
});

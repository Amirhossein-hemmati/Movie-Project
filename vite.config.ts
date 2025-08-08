import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { fileURLToPath, URL } from 'node:url'
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
     resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        'api': fileURLToPath(new URL("./src/api", import.meta.url)),
        'stores': fileURLToPath(new URL("./src/store", import.meta.url)),
        'components': fileURLToPath(new URL("./src/components", import.meta.url)),
        'types': fileURLToPath(new URL("./src/types", import.meta.url)),
        'utils': fileURLToPath(new URL("./src/utils", import.meta.url)),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  };
});

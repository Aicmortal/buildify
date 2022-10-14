import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { fileURLToPath, URL } from "url";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: "vue-next",
        }),
      ],
      dts: "src/types/components.d.ts",
    }),
  ],
});

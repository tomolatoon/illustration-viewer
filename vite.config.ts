import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    entries: ["/app/**/*.tsx"],
  },
  server: {
    watch: {
      awaitWriteFinish: true,
    },
  },
  plugins: [
    honox({ devServer: { adapter }, client: { input: ["/app/style.css"] } }),
    build(),
  ],
});

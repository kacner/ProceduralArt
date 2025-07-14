// vite.config.mjs
import { defineConfig } from 'vite';

export default defineConfig({
  // ← no `root` property, so defaults to project root

  build: {
    outDir: 'dist',
    emptyOutDir: true,      // cleans old builds
    rollupOptions: {
      // only needed if you’d previously overridden the HTML input:
      input: {
        main: 'index.html'  // point at your root-level index.html
      }
    }
  }
});

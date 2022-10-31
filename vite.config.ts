import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
export default defineConfig({
  base: './',
  build: {
    outDir: './docs',
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    AutoImport({
      resolvers: [],
      imports: ['vue'],
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [],
      dirs: ['src/components'],
      directoryAsNamespace: true,
      dts: 'types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './types'),
    },
  },
});

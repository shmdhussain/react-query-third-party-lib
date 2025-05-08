import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import dts from 'vite-plugin-dts';


// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'my-lib',
      fileName: 'mylibss',
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    minify: false,
    target: 'es2022',
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
    },
    copyPublicDir: false,
  },
  plugins: [react(),  dts({ tsconfigPath: 'tsconfig.app.json' })],
})

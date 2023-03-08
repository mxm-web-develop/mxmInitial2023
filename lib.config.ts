import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import {resolve} from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/components/main.tsx'),
      name: 'textractUi',
      fileName: (format) => `textractUi.${format}.js`,
      formats:['es','cjs','umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react','antd'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          React: 'react',
          antd:'antd'
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry:true
    }),
    svgr({
    svgrOptions: {
      icon: true,
      },
    }),
  react(),
  viteStaticCopy({
    targets: [
      {
        src: 'src/components/package.json',
        dest: './'
      }
    ]
  })],
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"
import styleImport, { AntdResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    styleImport({
      resolves: [
        AntdResolve()
      ]
    })],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, './src'),
      "@": path.resolve(__dirname, 'src'),
      "@r": path.resolve(__dirname, 'src/store')
    }
  },
  /* https://cn.vitejs.dev/config/server-options.html#server-proxy */
  server: {
    port: 8080, 
    host: "0.0.0.0",
    open: true, 
    proxy: {
      '^/prod-api': { 
        target: 'http://xue.cnkdl.cn:23683',
        changeOrigin: true, 
        rewrite: (path) => path.replace('/prod-api', '/prod-api') 
      }
    },
  },
})

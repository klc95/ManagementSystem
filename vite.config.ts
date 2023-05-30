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
    port: 8081, // 设置服务启动的端口号 也可以在package.json的scripts "dev": "vite --host --port 3005"
    host: "0.0.0.0",
    open: true, 
    proxy: {
      /* // 使用 proxy 实例
      '^/api': { // 首先匹配以api开头（来源于baseUrl与请求路径拼接的结果 例如结果为 /api/login）
        target: ''http://jsonplaceholder.typicode.com',
        changeOrigin: true, // 是否跨域
        rewrite: (path) => path.replace('/api', '') // 对路径进行重写 相当于将‘/api’换成‘’然后与target的值进行拼接
      } */
      '^/prod-api': { 
        // target: 'http://localhost:8081/page1',
        target: 'http://xue.cnkdl.cn:23683',
        changeOrigin: true, 
        rewrite: (path) => path.replace('/prod-api', '/prod-api') 
      }
    },
  },
})

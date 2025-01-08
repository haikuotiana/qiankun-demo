import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun";
// https://vite.dev/config/
export default defineConfig({
  // 这里的注册上qiankun插件，并且声明一下子应用的name?
  plugins: [qiankun("app-child", { useDevMode: true }),vue()],
})

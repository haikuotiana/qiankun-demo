import { createRouter, createWebHistory } from 'vue-router';
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
// 定义路由
const routes = [
  {
    path: "/test",
    name: "test",
    component: () => import("../components/HelloWorld.vue"),
  },
];
// 创建路由器实例
const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/app-child/" : "/"), // 使用 HTML5 模式
  routes, // 路由配置
});
export default router

import { createRouter, createWebHistory } from 'vue-router';
// 定义路由
const routes = [
  
];
// 创建路由器实例
const router = createRouter({
  history: createWebHistory('/'), // 使用 HTML5 模式
  routes, // 路由配置
});
export default router

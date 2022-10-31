import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('../pages/devtools.vue'),
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});

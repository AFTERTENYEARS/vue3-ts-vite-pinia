import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/about',
    component: () => import('@/pages/about/index.vue')
  },
  {
    path: '/store',
    component: () => import('@/pages/store/index.vue')
  },
  {
    path: '/hook',
    component: () => import('@/pages/hook/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

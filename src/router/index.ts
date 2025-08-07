// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'

const routes = [
  { path: '/', name: 'Home', component: Index },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

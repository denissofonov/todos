import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Todos from '@/components/Todos.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'todos',
    component: Todos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', name: 'root', redirect: '/Page/1' },
  { path: '/Page/:id', name: 'Home', component: Home },
  { path: '/:pathMatch(.*)*', name: 'error', redirect: '/Page/1' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

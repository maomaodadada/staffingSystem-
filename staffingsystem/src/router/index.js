import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Task',
    name: 'Task',
    component: () => import('../views/Task.vue')
  },
  {
    path: '/Parent',
    name: 'Parent',
    component: () => import('../views/Parent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

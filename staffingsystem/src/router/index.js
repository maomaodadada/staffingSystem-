import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: layout,
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'User',
        name: 'User',
        component: () => import('../views/userManagement/User.vue')
      },
      {
        path: 'UserGroup',
        name: 'UserGroup',
        component: () => import('../views/userManagement/UserGroup.vue')
      },
      {
        path: 'JobList',
        name: 'JobList',
        component: () => import('../views/JobList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

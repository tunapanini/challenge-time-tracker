import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'expenses' }
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: () => import('../views/Expenses.vue')
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('../views/Management.vue')
  },
  {
    path: '/timesheets',
    name: 'timesheets',
    component: () => import('../views/Timesheets.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

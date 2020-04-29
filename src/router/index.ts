import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'timesheets' }
  },
  {
    path: '/timesheets',
    name: 'timesheets',
    component: () => import('../views/Timesheets.vue')
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
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

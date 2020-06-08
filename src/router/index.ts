import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '*',
    redirect: { name: 'timesheets' }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/challenge-timetracker-vue/' : '/'
})
export default router

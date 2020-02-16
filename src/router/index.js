import Vue from 'vue'
import VueRouter from 'vue-router'
import Rank from '../components/rank.vue'
import Recommand from '../components/recommand.vue'
import Singer from '../components/singer.vue'
import Search from '../components/search.vue'
import Login from '../components/login.vue'
import Home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: '/recommand' },
      { path: '/rank', component: Rank },
      { path: '/recommand', component: Recommand },
      { path: '/singer', component: Singer },
      { path: '/search', component: Search }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Rank from '../components/rank.vue'
import Recommand from '../components/recommand.vue'
import Singer from '../components/singer.vue'
import Search from '../components/search.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommand' },
  { path: '/rank', component: Rank },
  { path: '/recommand', component: Recommand },
  { path: '/singer', component: Singer },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  routes
})

export default router

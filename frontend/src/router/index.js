import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import city from '../views/city.vue'
import guideDetails from '../views/guide-details.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/city/:_id',
    component: city
  },
  {
    path: '/guide/:_id',
    component: guideDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

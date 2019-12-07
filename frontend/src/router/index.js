import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import city from '../views/city.vue'
import guideDetails from '../views/guide-details.vue'
import profile from '../views/profile.vue'
import editGuide from '../views/guide-edit.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/city/:_id',
    component: city
  },
  {
    path: '/guide/edit/:_id?',
    component: editGuide,
  },
  {
    path: '/guide/:_id',
    component: guideDetails
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/signup',
    component: signup
  },
  {
    path: '/profile/:_id?',
    component: profile,
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
//   scrollBehavior() {
//     return {x: 0, y: 0}
// }
})

export default router

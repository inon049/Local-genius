import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import city from '../views/city.vue'
import guideDetails from '../views/guide-details.vue'
import profile from '../views/profile.vue'
import editGuide from '../views/guide-edit.vue'

//profile children 
// import messenger from '../components/profile/messenger.vue'
// import summary from '../components/profile/summary.vue'
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
    path: '/profile/:_id?',
    component: profile,
    // children: [
    //   {
    //     path: '/profile/messenger',
    //     component: messenger
    //   },
    //   {
    //     path: '/profile/summary',
    //     component: summary
    //   }
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

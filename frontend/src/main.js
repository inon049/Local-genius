import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/global.scss'
import VCalendar from 'v-calendar'

Vue.use(VCalendar);
import VueTinySlider from "vue-tiny-slider";
import VCalendar from 'v-calendar';
Vue.use(VCalendar);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {
  },
  render: h => h(app)
}).$mount('#app')

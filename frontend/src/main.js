import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/global.scss'
import VCalendar from 'v-calendar'
import VueTinySlider from "vue-tiny-slider";
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
Vue.use(VCalendar);

Vue.use(VCalendar);
Vue.use(require('vue-moment'));


Vue.config.productionTip = false

new Vue({
    router,
    store,
    components: {},
    render: h => h(app)
}).$mount('#app')
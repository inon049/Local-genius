import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/global.scss'
import VCalendar from 'v-calendar'
import vSelect from 'vue-select'
import VAnimateCss from 'v-animate-css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCarousel from 'vue-carousel';
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(ElementUI);
Vue.use(VAnimateCss);
Vue.component('v-select', vSelect)
Vue.use(VCalendar);
Vue.use(require('vue-moment'));
Vue.use(VueCarousel);


Vue.config.productionTip = false
Vue.config.pwa = {
    name :"Local Genius",
    themeColor : '#ffffff',
}
console.log(Vue.config,'ppp');

new Vue({
    router,
    store,
    components: {},
    render: h => h(app)
}).$mount('#app')




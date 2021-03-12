import Vue from 'vue'
import App from './App.vue'
import VueFriendlyIframe from 'vue-friendly-iframe';
import router from './router'



Vue.config.productionTip = false

Vue.use(VueFriendlyIframe);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
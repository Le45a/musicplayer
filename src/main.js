import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import fastclick from 'fastclick'
import Axios from 'axios'


Axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = Axios
Vue.config.productionTip = false

fastclick.attach(document.body)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

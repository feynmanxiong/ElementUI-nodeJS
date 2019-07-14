import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
})


Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

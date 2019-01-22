import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import AddData from './pages/addData.vue'
import Logs from './pages/logs.vue'
import Data from './pages/data.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/addData', component: AddData },
    { path: '/logs', component: Logs },
    { path: '/data', component: Data }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App
  },
  router
})

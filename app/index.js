import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'
import AddData from './pages/addData.vue'
import Logs from './pages/logs.vue'
import Data from './pages/data.vue'

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.use(Vuex)
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
  router,
  store
})

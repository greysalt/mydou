// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/dou-green-light.css'
import store from './store/store'

Vue.use(VueMaterial)
Vue.config.productionTip = false

Vue.filter('arrToString', function (arr) {
  return arr.join(' / ')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})

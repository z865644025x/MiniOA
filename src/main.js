// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import apihttp from './api/http'
// import qs from 'qs'
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.http = apihttp
Vue.use(ElementUI)
// Vue.use(apihttp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import apihttp from './api/http'
import store from './store/store.js'
import router from './router'
import './permission.js' // 路由挂载 permission control



Vue.config.productionTip = false
Vue.prototype.http = apihttp
Vue.prototype.$store = store
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

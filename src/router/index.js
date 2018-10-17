import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/views/main'
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
		},
		{
			path:'/login',
			name:'login',
			component:Login
		},
  ]
})

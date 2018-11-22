import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/views/main'
import Login from '@/components/login/login'

Vue.use(Router)


//所有权限通用路由表 
//如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {
		path:'/login',
		name:'登录页',
		component:Login
  },
  {
		path: '/',
		name: '首页',
    component: Main,
    redirect:'/index',
    children:[
      { path:'/index',name:'首页',component:HelloWorld },
      // { path:'/pages/resources',name:'资源管理',component:HelloWorld }
    ]
  },
  {
		path: '/pages',
		name: '办公流程',
		component: Main,
		children:[
			{path:'resources',name:'工作签报',component:Login},
		]
  }
]

// 实例化vue的时候只挂载constantRouter
export default new Router({
  routes: constantRouterMap
});

//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRouterMap = [
  {
    path: '/permission',
    component: HelloWorld,
    name: '权限测试',
    meta: { role: ['admin','super_editor'] }, //页面需要的权限
    children: [
    { 
      path: 'index',
      component: HelloWorld,
      name: '权限测试页',
      meta: { role: ['admin','super_editor'] }  //页面需要的权限
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
];


import router from './router'
// import store from './store/store'
import { asyncRouterMap } from './router'
import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css'// progress bar style

// NProgress.configure({ showSpinner: false })// NProgress Configuration


router.beforeEach((to, from, next) => {
	// debugger
	console.log(to.path);
	console.log(from);
	console.log(asyncRouterMap);
	// console.log()
	next();
})

// router.afterEach(() => {
//   NProgress.done() // finish progress bar
// })

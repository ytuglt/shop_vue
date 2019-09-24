import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'

NProgress.configure({showSpinner: false})
console.log("permisssion  start")

const whitelist = ['/login']

router.beforeEach((to, from, next) => {
    console.log("router before each "+ to.path + " , " + from.path)
    NProgress.start()
    if(whitelist.indexOf(to.path) !== -1){
        next()
    }else {
        next('/login');
    }
})

router.afterEach(() => {
    console.log('router after each')
    NProgress.done()
})

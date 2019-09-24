import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '../components/HelloWorld'

export const constantRouterMap= [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden:true
    },
    {
        path:'/hello',
        component:HelloWorld
    }
]

export default new Router({
    scrollBehavior: () =>({y: 0}),
    routes:constantRouterMap
})



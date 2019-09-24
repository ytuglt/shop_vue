import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

import router from './router'

import './permission'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
    mockXHR()
}

Vue.use(ElementUI,{
    size:Cookies.get('size') || 'medium'
})

Vue.config.productionTip = false

new Vue({
    el:"#app",
    router,
    render: h=>h(App)
})

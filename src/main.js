import Vue from 'vue'
//app组件，所有组件的父组件
import App from './App.vue'
//路由组件
import router from './router'
import VueRouter from 'vue-router'
//状态管理
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
axios.defaults.baseURL = '/'
Vue.prototype.$axios = axios
new Vue({
    router,
    store,
    axios,
    render: h => h(App),
    // 全局事件主线创建
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
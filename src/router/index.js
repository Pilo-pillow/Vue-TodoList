import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('@/components/user/Login.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/components/user/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        beforeRouteEnter(to, from, next) {
            // ...
        },
        component: () =>
            import ('@/components/user/Register.vue')
    },
    {
        path: '/todolist',
        name: 'todolist',
        component: () =>
            import ('@/views/TodoList.vue'),
        beforeEnter: (to, from, next) => {
            let isPass = false
            JSON.parse(localStorage.getItem('users')).forEach((user) => { if (user.username == to.query.username && user.password == to.query.password) isPass = true })
            if (isPass) next()
            else next('/')
        }
    },
    {
        path: '/todolist/countdown',
        name: 'countdown',
        component: () =>
            import ('@/components/time/CountDown.vue')
    },
    {
        path: '/todolist/player',
        name: 'player',
        component: () =>
            import ('@/components/player/MusicPlayer.vue')
    },
    {
        path: '/todolist/calendar',
        name: 'calendar',
        component: () =>
            import ('@/components/time/Calendar.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
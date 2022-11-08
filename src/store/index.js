import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
import { nanoid } from 'nanoid'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [{
                "username": "aa",
                "password": "aa",
                "tasks": {
                    id: nanoid(),
                    title: '',
                    finished: false
                }
            },
            {
                "username": "bb",
                "password": "bb",
                "tasks": {
                    id: nanoid(),
                    title: '',
                    finished: false
                }
            },
            {
                "username": "cc",
                "password": "cc",
                "tasks": {
                    id: nanoid(),
                    title: '',
                    finished: false
                }
            }
        ],
    },
    computed: {
        // ...mapState(['tasks'])
    },
    getters: {},
    mutations: {
        addTask: (state, task, username) => {
            state.users.forEach((user) => { return username == user.username }).push(task)
        }
    },
    actions: {},
    modules: {}
})
<template>
    <div id="contain">
        <Inner />
        <div class="todolist">
            <NavHeaderVue :upAddTask="upAddTask" />
            <NavMainVue :tasks="tasks" />
            <NavFooterVue :tasks="tasks" :clearAllFinished="clearAllFinished" />
        </div>
    </div>
</template>

<script>
import NavHeaderVue from '@/components/todo/NavHeader.vue';
import NavMainVue from '@/components/todo/NavMain.vue';
import NavFooterVue from '@/components/todo/NavFooter.vue';
import Inner from './Inner.vue';

export default {
    name: 'TodoList',
    components: {
        NavHeaderVue,
        NavMainVue,
        NavFooterVue,
        Inner
    },
    data() {
        return {
            tasks: JSON.parse(localStorage.getItem('users'))[0].tasks || []
        }
    },
    methods: {
        upAddTask(obj) {
            this.tasks.unshift(obj)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter((task) => {
                return task.id !== id
            })
        },
        changeCheck(id) {
            this.tasks.forEach((task) => {
                if (task.id === id) {
                    task.finished = !task.finished
                }
            })
        },
        clearAllFinished() {
            this.tasks = this.tasks.filter((task) => {
                return task.finished === false
            })
        }
    },
    watch: {
        tasks(value) {
            let users = JSON.parse(localStorage.getItem('users')).filter(
                (user) => {
                    return user.username != this.$route.query.username
                })
            let user = {
                username: this.$route.query.username,
                password: this.$route.query.password,
                tasks: value
            }
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
        }
    },
    mounted() {
        this.$bus.$on('changeCheck', this.changeCheck)
        this.$bus.$on('deleteTask', this.deleteTask)
    },
    beforeDestroy() {
        this.$bus.$off('changeCheck')
        this.$bus.$off('deleteTask')
    }
}
</script>

<style scoped >
.todolist {
    float: left;
    width: 64vh;
    min-height: 25vh;
    border: solid 4px rgba(70, 70, 70, 0.3);
    border-bottom: none;
    border-radius: 5%;
    background-color: #f5f5f5;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.36), 0 0 60px rgba(0, 0, 0, 0.06) inset;
    -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.36), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.36), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    transition: all 0.32s ease-in-out;
}

.toCountDown {
    width: 100%;
    height: 100%;
}
</style>
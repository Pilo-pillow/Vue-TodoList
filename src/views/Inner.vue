<template>
    <div class="links">
        <span @click="toTodoList">待办事项</span>
        <span @click="toCountDown">倒计时钟</span>
        <span @click="toPlayer">音乐播放器</span>
        <span @click="toCalendar">查看日历</span>
    </div>
</template>
<script>
export default {
    name: 'links',
    methods: {
        toTodoList() {
            this.$router.push({
                path: '/todolist',
                name: 'todolist',
                query: {
                    username: this.$route.query.username
                }
            })
        },
        toCountDown() {
            this.$router.push('/todolist/countdown')
        },
        toPlayer() {
            this.$router.push('/todolist/player')
        },
        toCalendar() {
            this.$router.push('/todolist/calendar')
        }
    }
}
</script>
<style lang="scss" scoped>
.links {
    display: flex;
    justify-content: space-between;
    margin-top: -12vh;

    span {
        background-color: #f5f5f5;
        border-radius: 1vh;
        width: 30%;
        text-align: center;
        color: #555555;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 2vh;
        cursor: pointer;
        transition: all 0.32s ease-in-out;
        border: solid 2px rgba(70, 70, 70, 0.3);

        &:hover {
            transition: all 0.32s ease-in-out;
            background-color: #808080;
            color: #f5f5f5;
            border: solid 2px rgb(255, 255, 255);
        }
    }
}
</style>
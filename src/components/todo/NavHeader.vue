<template>
    <div class="header">
        <div class="title">
            <h2>待办事项</h2>
        </div>
        <div class="now">
            {{ now }}
        </div>
        <div class="input">
            <input type="text" placeholder="请输入任务" v-model="inputValue" @keyup.enter="addTask">
        </div>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'NavHeader',
    data() {
        return {
            inputValue: '',
            now: ''
        }
    },
    props: ['upAddTask'],
    methods: {
        addTask() {
            if (this.inputValue.trim() == '')
                alert('你的任务呢?')
            else
                this.upAddTask({ id: nanoid(), title: this.inputValue, finished: false })
            this.inputValue = ''
        }
    },
    created: function () {
        let date = new Date()
        this.now = date.getFullYear() + "年" + date.getMonth() + "月" + date.getDate() + "日"
    }
}
</script>

<style lang="scss" scoped>
.input {
    border-bottom: 1px solid #dfdfdf;
    transition: all 0.32s ease-in-out;

    &:hover {
        border-bottom: 1px solid black;
        transition: all 0.32s ease-in-out;
    }
}

.input input {
    width: 90%;
    height: 4vh;
    border: none;
    outline: none;
    margin-left: 10px;
    background-color: #f5f5f5;

}

.title {
    margin-left: 4%;
}

.now {
    float: right;
    margin-right: 4%;
}
</style>
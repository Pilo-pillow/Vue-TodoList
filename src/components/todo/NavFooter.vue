<template>
    <div class="footer" v-if="tasks.length">
        <div class="taskData">
            <span>完成&nbsp;{{ finishedTask }}&nbsp;</span>/<span>&nbsp;全部&nbsp;{{ tasks.length }}</span>
        </div>
        <button class="clearAllFinished" @click="clearAllFinished">ClearDone</button>
    </div>
    <div class="taskData" v-else>恭喜你完成了所有任务!</div>
</template>

<script>
export default {
    name: 'NavFooter',
    props: ['tasks', 'clearAllFinished'],
    computed: {
        finishedTask() {
            return this.tasks.filter((task) => { return task.finished == true }).length
        }
    }
}
</script>

<style lang="scss" scoped>
.taskData {
    margin-top: 2vh;
    font-weight: 600;
    color: gray;
    font-size: 18px;
    text-align: center;
    user-select: none;
}

.footer {
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-around;


    .clearAllFinished {
        width: 14vh;
        height: 5vh;
        margin-top: 1vh;
        text-align: center;
        border: none;
        border-radius: 1vh;
        background-color: #a6e1c7;
        color: #ffffff;
        font-weight: 800;
        font-size: 16px;
        transition: all 0.32s ease-in-out;

        &:hover {
            background-color: #7fc6a6;
            transition: all 0.32s ease-in-out;
        }
    }
}
</style>
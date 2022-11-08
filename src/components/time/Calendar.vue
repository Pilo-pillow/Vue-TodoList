<template>
    <div class="calendar">
        <Inner />
        <Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate" v-on:isToday="clickToday" />
    </div>
</template>

<script>
import Inner from '@/views/Inner.vue';
import Calendar from 'vue-calendar-component'

export default {
    name: "MyCalendar",
    data() { return {} },
    components: { Inner, Calendar },
    methods: {
        clickDay(data) {
            console.log("当前选中的日期为" + data); //选中某天
        },
        changeDate(data) {
            console.log("更改月份" + data); //左右点击切换月份
        },
        clickToday(data) {
            console.log("回到本月" + data); // 跳到了本月
        }
    }
}
</script>

<style lang="less" scoped>
#app {
    .calendar {
        /deep/ .wh_content_all {
            background-color: #f5f5f5;
            border-radius: 2vh;
            -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.36), 0 0 60px rgba(0, 0, 0, 0.06) inset;
            -moz-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.36), 0 0 40px rgba(0, 0, 0, 0.06) inset;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.36), 0 0 40px rgba(0, 0, 0, 0.06) inset;

            .wh_top_changge>*,
            .wh_content>* {
                color: #555555;
                font-weight: 550;
            }

            .wh_jiantou1 {
                border-top: 2px solid black;
                border-left: 2px solid black;
            }

            .wh_jiantou2 {
                border-top: 2px solid black;
                border-right: 2px solid black;
            }

            .wh_content_item:hover div {
                border-radius: 2vh;
                color: #f5f5f5;
                background-color: #555555;
                transition: all 0.12s ease-in-out;
            }

            .wh_isToday {
                border-radius: 2vh;
                box-sizing: border-box;
                border: 2px solid rgba(0, 0, 0, 0.32);
                background-color: antiquewhite;
            }

            .wh_chose_day {
                border-radius: 2vh;
                box-sizing: border-box;
                border: 2px solid rgba(0, 0, 0, 0.32);
                background-color: #555555;
                color: #f5f5f5;
            }
        }
    }
}
</style>
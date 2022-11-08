<template>
    <div class="countdown">
        <Inner />
        <div class="main">
            <div class="now">
                当前的时间是:&nbsp;
                <span style="color:royalblue;font-weight: 1000; !important">{{ curYear }}</span>&nbsp;年
                <span style="color:royalblue;font-weight: 1000; !important">{{ curMonth >= 10 ? curMonth : "0" +
                        curMonth
                }}</span>&nbsp;月
                <span style="color:royalblue;font-weight: 1000; !important">{{ curDay >= 10 ? curDay : "0" + curDay
                }}</span>&nbsp;日&nbsp;
                <span style="color:royalblue;font-weight: 1000; !important">{{ curHour >= 10 ? curHour : "0" + curHour
                }}:{{ curMinute >= 10 ? curMinute : "0" + curMinute }}:{{
        curSecond >= 10
            ? curSecond : "0" + curSecond
}}</span>
            </div>
            <div class="year">
                距<span style="color:royalblue;font-weight: 1000; !important">&nbsp;{{ curYear + 1
                }}&nbsp;</span>还剩:&nbsp;{{ lasMonths
}}&nbsp;个月&nbsp;&nbsp;{{ lasWeeks }}&nbsp;周&nbsp;&nbsp;{{ lasDays }}&nbsp;天
            </div>
            <div class="month">
                本月&nbsp;&nbsp;已过&nbsp;<span style="color:red;font-weight: 1000; !important">{{ curDay >= 10 ?
                        curDay : "0" + curDay
                }}</span>&nbsp;&nbsp;&nbsp;天&nbsp;&nbsp;&nbsp;&nbsp;还剩&nbsp;<span
                    style="color:red;font-weight: 1000; !important">{{ nexMonth >= 10 ? nexMonth : "0" + nexMonth
                    }}</span>&nbsp;天
            </div>
            <div class="week">
                本周&nbsp;&nbsp;已过&nbsp;<span style="color:red;font-weight: 1000; !important">{{ new Date().getDay() >= 10
                        ? new Date().getDay() : "0" + new Date().getDay()
                }}</span>&nbsp;&nbsp;&nbsp;天&nbsp;&nbsp;&nbsp;&nbsp;还剩&nbsp;<span
                    style="color:red;font-weight: 1000; !important">{{ 7
                            - new
                                Date().getDay()
                    }}</span>&nbsp;天
            </div>
            <div class="day">
                本日&nbsp;&nbsp;已过&nbsp;<span style="color:red;font-weight: 1000; !important">{{ curHour
                }}</span>&nbsp;小时&nbsp;&nbsp;&nbsp;还剩&nbsp;<span style="color:red;font-weight: 1000; !important">{{
        24 - curHour
}}</span>&nbsp;小时
            </div>
        </div>
    </div>
</template>

<script>
import Inner from '@/views/Inner.vue';

export default {
    name: "CountDown",
    components: { Inner },
    data() {
        return {
            curYear: '',
            curMonth: '',
            curWeekDay: '',
            curDay: '',
            curHour: '',
            curMinute: '',
            curSecond: '',
            lasDays: '',
            lasWeeks: '',
            lasMonths: '',
            lasHours: '',
            lasMinutes: '',
            lasSeconds: '',
            nexMonth: ''
        }
    },
    methods: {
        getData() {
            let date = new Date()
            this.curYear = date.getFullYear()
            this.curMonth = date.getMonth()
            this.getWeekDay();
            this.curDay = date.getDate()
            this.curHour = date.getHours()
            this.curMinute = date.getMinutes()
            this.curSecond = date.getSeconds()
            const restSec = new Date(this.curYear + 1 + "/01/01" + " 00:00:00").getTime() - date.getTime()
            this.lasDays = parseInt(restSec / (60 * 60 * 24 * 1000))
            this.lasMonths = parseInt(restSec / (60 * 60 * 24 * 30 * 1000))
            this.lasWeeks = parseInt(restSec / (60 * 60 * 24 * 1000 * 7))
            this.lasHours = parseInt(restSec / (60 * 60 * 1000) % 24)
            this.lasMinutes = parseInt(restSec / (60 * 1000))
            this.lasSeconds = parseInt(restSec / 1000)
            let reDate = new Date()
            reDate.setMonth(this.curMonth + 1)
            reDate.setDate(0)
            this.nexMonth = (reDate.getDate() - new Date().getDate())
        },
        getWeekDay() {
            switch (new Date().getDay()) {
                case 1:
                    this.curWeekDay = 'MON';
                    break
                case 2:
                    this.curWeekDay = 'TUS';
                    break
                case 3:
                    this.curWeekDay = 'WED';
                    break
                case 4:
                    this.curWeekDay = 'THU';
                    break
                case 5:
                    this.curWeekDay = 'FRI';
                    break
                case 6:
                    this.curWeekDay = 'SAT';
                    break
                case 7:
                    this.curWeekDay = 'SUN';
                    break
            }
        },
        flashTime() {
            let interval = setInterval(() => {
                this.getData()
            }, 1000)
        }
    },
    mounted() {
        this.flashTime()
    },
    beforeDestroy() {
        this.clearInterval(flashTime)
    }

};
</script>

<style lang="scss" scoped>
.countdown {
    width: 64vh;

    .main {
        width: 100%;
        min-height: 60vh;
        border: 6px solid rgba(55, 55, 55, 0.56);
        border-bottom: none;
        border-radius: 10vh;

        .now,
        .year,
        .month,
        .week,
        .day {
            margin: 10% 0 0 6%;
            font-weight: 550;
            font-size: 18px;

        }
    }
}
</style>
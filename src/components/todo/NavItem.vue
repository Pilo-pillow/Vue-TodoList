<template>
    <div class="item">
        <!-- prop不能修改其地址值，但是其内部数据可以修改，并不会被Vue检测到,正常应该一层一层的将数据从TodoList.vue传到NavMain,再传到本文件 -->
        <!-- <input type="checkbox" v-model="task.finished"> -->
        <input class='tgl tgl-flip' id='cb5' type="checkbox" :checked="task.finished" />
        <label class='tgl-btn' data-tg-off='Undo' data-tg-on='Done' for='cb5'></label>
        <span>{{ task.title }}</span>
        <button class="button" @click.stop="deleteTask(task.id)">删除</button>
    </div>
</template>

<script>
export default {
    name: 'NavItem',
    props: ['task'],
    methods: {
        deleteTask(id) {
            this.$bus.$emit('deleteTask', id)
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    width: 90%;
    height: 6vh;
    user-select: none;
    margin: 0 auto;
    transition: all 0.32s ease-in-out;
    border-bottom: 1px solid opacify($color: #878787, $amount: 0.9);
    color: #878787;
    font-weight: 600;


    .tgl {
        display: none;

        &,
        &:after,
        &:before,
        & *,
        & *:after,
        & *:before,
        &+.tgl-btn {
            box-sizing: border-box;

            &::selection {
                background: none;
            }
        }

        +.tgl-btn {
            float: left;
            outline: 0;
            display: block;
            width: 4em;
            height: 2em;
            position: relative;
            cursor: pointer;

            &:after,
            &:before {
                position: relative;
                display: block;
                content: "";
                width: 50%;
                height: 100%;
            }

            &:after {
                left: 0;
            }

            &:before {
                display: none;
            }
        }

        &:checked {
            +.tgl-btn {
                &:after {
                    left: 50%;
                }
            }
        }
    }

    .tgl-flip {
        +.tgl-btn {
            padding: 5px;
            transition: all .1s ease;
            font-family: sans-serif;
            perspective: 100px;

            &:after,
            &:before {
                display: inline-block;
                transition: all .2s ease;
                width: 80%;
                text-align: center;
                position: absolute;
                line-height: 2em;
                font-weight: bold;
                color: #fff;
                backface-visibility: hidden;
                border-radius: 4px;
            }

            &:after {
                content: attr(data-tg-on);
                background: #02C66F;
                transform: rotateY(-180deg);
            }

            &:before {
                background: #FF3A19;
                content: attr(data-tg-off);
            }

            &:active {
                &:before {
                    transform: rotateY(-20deg);
                }
            }
        }

        &:checked {
            +.tgl-btn {
                &:before {
                    transform: rotateY(180deg);
                }

                &:after {
                    transform: rotateY(0);
                    left: 0;
                    background: #7FC6A6;
                }

                &:active {
                    &:after {
                        transform: rotateY(20deg);
                    }
                }
            }
        }
    }

    span {
        float: left;
        line-height: 6vh;
    }

    .button {
        width: 8vh;
        height: 4vh;
        display: none;
        float: right;
        background-color: #92bcff;
        text-align: center;
        border: none;
        border-radius: 4px;
        margin-top: 2%;
        margin-right: 2%;
        transition: all 0.32s ease-in-out;
    }
}

.item:hover {
    width: 100%;
    height: 6.2vh;
    color: #000000;
    background-color: lightgray;
    transition: all 0.32s ease-in-out;
}

.item:hover .button {
    display: block;
    transition: all 0.32s ease-in-out;
}
</style>
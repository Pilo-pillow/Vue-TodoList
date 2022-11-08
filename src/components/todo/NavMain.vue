<template>
    <div class="main">
        <NavItem v-for="task in tasks" :key="task.id" :task="task" @click.native="handleCheck(task.id)" />
    </div>
</template>

<script>
import NavItem from '@/components/todo/NavItem.vue'
export default {
    name: 'NavMain',
    components: {
        NavItem
    },
    props: ['tasks'],
    methods: {
        handleCheck(id) {
            this.$bus.$emit('changeCheck', id)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
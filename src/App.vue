<template>
    <div class="list">
        <div class="counter">
            <h1>TO-DO LIST</h1>
            <p class="task__count">{{ counter }}</p>
        </div>
        <Input />
        <Tasks />
    </div>
</template>


<script>
import Input from './components/Input.vue';
import Tasks from './components/Tasks.vue';

export default {
    components: { Input, Tasks,},
    computed: {
        counter(){
            return this.$store.getters.countString
        },
        tasks(){
            return this.$store.state.tasks
        }
    },
    watch: {
        tasks:{
            handler(newVal){
                localStorage.setItem('tasks', JSON.stringify(newVal))
            },
            deep: true
        }, 
    },
    mounted(){
        const raw = localStorage.getItem('tasks')
        const localTasks = JSON.parse(raw)
        this.$store.dispatch('addTasks', localTasks)
    },
}
</script>


<style scoped>
.counter{
    display: flex;
    align-items: center;
}
.list{
    border-radius: 30px;
    background-color: white;
    padding: 30px;
    width: 800px;
}
.task__count{
    color: black;
}
h1{
    color: black;
    margin-right: 20px;
}
</style>

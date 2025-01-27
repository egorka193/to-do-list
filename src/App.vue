<template>
    <div class="list">
        <div class="counter">
            <h1>TO-DO LIST</h1>
            <p class="task__count">{{ countString }}</p>
        </div>
        <Input 
            @addTask="addTask"
        />
        <Tasks 
            v-if="tasks.length > 0"
            :tasks="tasks"
            @deleteTask="deleteTask"
            @chooseTask="chooseTask"
            @onChangeName="onChangeName"
        />
    </div>
</template>


<script>
import Input from './components/Input.vue';
import Tasks from './components/Tasks.vue';

export default {
    components: { Input, Tasks,},
    data(){
        return{
            tasks: [],
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
    computed: {
        tasksDoneCount(){
            return this.tasks.filter(task => task.checked).length
        },
        countString() {
            return `${this.tasksDoneCount}/${this.tasks.length}`
        },
    },
    methods: {
        addTask(val){
            if(val !== ''){
                let obj = {
                    name: val,
                    checked: false,
                }
                this.tasks.push(obj)
            }
        },
        deleteTask(index){  
            this.tasks.splice(index, 1)
        },
        chooseTask(index){
            // debugger
            this.tasks = this.tasks.map((item, i) => {
                if (index === i) {
                return {
                    ...item,
                    checked: !this.tasks[index].checked,
                }
                }
                return item
            })
        },
        onChangeName(index, name){
            this.tasks[index].name = name
        },
    },
    mounted(){
        const raw = localStorage.getItem('tasks')
        const localTasks = JSON.parse(raw)
        this.tasks = localTasks
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

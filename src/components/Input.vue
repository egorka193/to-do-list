<template>
    <div class="input__wrapper">
        <input
            type="text" 
            placeholder="add your task"
            v-model="task"
        >
        <button
            class="btn"
            @click="addTask(task)"
        >
            Add
        </button>
    </div>
</template>


<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default{
    data() {
        return {
            task: '',
        }
    },
    methods: {
        addTask(task) {
            this.$store.dispatch('addTask', task),
			this.task = ''
		},
    }
}
</script>


<style scoped>
input{
    padding: 20px 15px;
    background-color: rgb(220, 218, 218);
    width: 700px;
    border-radius: 30px;
    border: none;
    margin-bottom: 20px;
    margin-top: 10px;
}
.btn{
    position: absolute;
    top: 9px;
    right: -1px;
    width: 100px;
    border-radius: 30px;
    padding: 21px;
    border: none;
    color: white;
    background-color: orange;
}
.input__wrapper{
    position: relative;
}
</style>
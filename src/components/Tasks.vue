<template>
	<div class="tasks">
		<Task 
			v-for="(el, i) in tasks"
			:key="i"
			:value="el"
			:isEditing="editingTaskIndex === i"
			@deleteTask="deleteTask(i)"
			@chooseTask="chooseTask(i)"
			@showInput="showInput(i)"
			@pressEnter="(name) => onChangeName(i, name)"
		/>
	</div>
</template>


<script>
import Task from './Task.vue';

export default{
	components: { Task },
	props: {
		tasks: {
			type: Array,
			required: true
		},
	},
	data() {
        return {
			editingTaskIndex: null
        }
    },
	emit: ['deleteTask', 'chooseTask', 'onChangeName'],
	methods:{
		deleteTask(index){
			this.$emit('deleteTask', index)
		},
		chooseTask(index){
			this.$emit('chooseTask', index)
		},
		showInput(index) {
            this.editingTaskIndex = index
		},
		onChangeName(index, value){
			this.$emit('onChangeName', index, value)
			this.editingTaskIndex = null
        },
	}
}
</script>


<style scoped>
.tasks{
	color: black;
	padding: 10px;
}
</style>
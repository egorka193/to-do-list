<template>
	<div class="tasks">
		<Task 
			v-for=" (el, i) in tasks"
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
import {mapActions} from 'vuex';

export default{
	components: { Task },
	// props: {
	// 	tasks: {
	// 		type: Array,
	// 		required: true
	// 	},
	// },
	data() {
		return {
			editingTaskIndex: null
        }
    },
	computed: {
		tasks () {
			return this.$store.state.tasks
		}
	},
	methods:{
		// deleteTask(index){
		// 	this.$emit('deleteTask', index)
		// },
		// chooseTask(index){
		// 	this.$emit('chooseTask', index)
		// },
		showInput(index) {
            this.editingTaskIndex = index
		},
		// onChangeName(index, value){
		// 	this.$emit('onChangeName', index, value)
		// 	this.editingTaskIndex = null
        // },
		onChangeName(index, value) {
            this.$store.dispatch('onChangeName', { name: value, position: index}),
			this.editingTaskIndex = null
		},
		...mapActions([
            'deleteTask',
			'chooseTask',
        ])
	},
}
</script>


<style scoped>
.tasks{
	color: black;
	padding: 10px;
}
</style>
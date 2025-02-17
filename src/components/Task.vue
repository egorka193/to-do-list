<template>
    <div class="task">
        <Checkbox
            :checked="value.checked"
            @chooseTask="chooseTask"
        />
        <input
            v-if="isEditing"
            ref="input"
            class="task__input"
            type="text"
            v-model="newValue"
            @keydown.enter="pressEnter"
        >
        <p
            v-else
            class="task__name"
            :class="value.checked ? 'done' : ''"
            @click="showInput"
        >
            {{ value.name }}
        </p>
        <div
            class="cross"
            @click="deleteTask"
        >
            &#10006;
        </div>
    </div>
</template>


<script>
import Checkbox from './Checkbox.vue';

export default{
    components: { Checkbox },
    props: {
        value: {
            type: Object,
            required: true
        },
        isEditing: {
            type: Boolean,
            required: true
        },
    },
    data(){
        return{
            newValue: ''
        }
    },
    emit: ['deleteTask', 'chooseTask', 'showInput', 'pressEnter'],
    methods:{
        deleteTask(){
            this.$emit('deleteTask')
        },
        chooseTask(){
            this.$emit('chooseTask')
        },
        pressEnter(){
            console.log(this.newValue);
            this.$emit('pressEnter', this.newValue)
        },
        showInput() {
            this.newValue = this.value.name
            this.$emit('showInput')
            this.$nextTick(() => {
                const input = this.$refs.input
                if (input) {
                    input.focus()
                }
            })
        },
    },
}
</script>


<style scoped>
.task{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.task__name{
    cursor: pointer;
    margin-left: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
    padding: 0;
    border: 1px solid transparent;
    font-size: 14px;
}
.task__input{
    cursor: pointer;
    margin-left: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0;
    flex-grow: 1;
    border: 1px solid;
    min-height: 28px;
    font-size: 14px;
}
.cross{
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 50%;
    margin-right: 0px;
}
.cross:hover{
    transition: all 0.5s ease;
    background-color: rgb(173, 170, 167);
}
</style>
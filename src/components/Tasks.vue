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
import { mapActions } from 'vuex';
import Task from './Task.vue';

export default {
  components: { Task },
  data() {
    return {
      editingTaskIndex: null,
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    ...mapActions(['deleteTask', 'chooseTask']),
    showInput(index) {
      this.editingTaskIndex = index;
    },
    onChangeName(index, value) {
      // eslint-disable-next-line no-unused-expressions
      this.$store.dispatch('onChangeName', { name: value, position: index });
      this.editingTaskIndex = null;
    },
  },
};
</script>

<style scoped>
.tasks {
  color: black;
  padding: 10px;
}
</style>

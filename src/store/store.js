import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },
  getters: {
    tasksDoneCount(state) {
      return state.tasks.filter((task) => task.checked).length;
    },
    countString(state, getters) {
      return `${getters.tasksDoneCount}/${state.tasks.length}`;
    },
  },
  mutations: {
    addTasks(state, payload) {
      state.tasks = [...state.tasks, ...payload];
    },
    addTask(state, payload) {
      if (payload !== "") {
        let obj = {
          name: payload,
          checked: false,
        };
        state.tasks.push(obj);
      }
    },
    deleteTask(state, payload) {
      const newArr = state.tasks.filter(
        (item) => item !== state.tasks[payload]
      );
      state.tasks = newArr;
    },
    chooseTask(state, payload) {
      state.tasks = state.tasks.map((item, i) => {
        if (payload === i) {
          return {
            ...item,
            checked: !state.tasks[payload].checked,
          };
        }
        return item;
      });
    },
    onChangeName(state, payload) {
      state.tasks[payload.position].name = payload.name;
    },
  },
  actions: {
    addTask(context, payload) {
      context.commit("addTask", payload);
    },
    deleteTask(context, payload) {
      context.commit("deleteTask", payload);
    },
    chooseTask(context, payload) {
      context.commit("chooseTask", payload);
    },
    onChangeName(context, payload) {
      context.commit("onChangeName", payload);
    },
    addTasks(context, payload) {
      context.commit("addTasks", payload);
    },
  },
});

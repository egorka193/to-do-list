<template>
  <div class="checkbox">
    <input
      class="checkbox-input"
      type="checkbox"
      :checked="checked"
      @change="chooseTask"
    />
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    chooseTask() {
      this.$emit("chooseTask");
    },
  },
};
</script>

<style scoped>
.checkbox {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox-input {
  appearance: none;
  position: relative;
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: inset 0 0 5px rgb(0 0 0 / 0.2);
  border-radius: 50px;
  border: 1px solid #ffffff;
}
.checkbox-input:checked {
  background: orange;
}
.checkbox-input::after {
  content: "\2714";
  position: absolute;
  top: 4px;
  right: -9px;
  width: 30px;
  height: 30px;
  font-size: 26px;
  overflow: hidden;
  border-radius: 50px;
  color: #ffffff;
  font-size: 18px;
  opacity: 0;
}
.checkbox-input:checked::after {
  opacity: 1;
}
</style>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <input
      v-bind="$attrs"
      class="field-input"
      :placeholder="label"
      :value="modelValue"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
.field:not(:last-child) {
  margin-bottom: 40px;
}
label,
input {
  display: block;
}

label {
  font-weight: 500;
}
input {
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid rgba(112, 112, 112, 0.1);
  transition: all 0.5s ease;
  font-size: 16px;
}
input::placeholder {
  color: rgba(112, 112, 112, 0.5);
  transition: all 0.5s ease;
}
input:hover {
  border-color: darkgreen;
}
input:hover::placeholder {
  color: rgba(112, 112, 112, 0.2);
}
</style>

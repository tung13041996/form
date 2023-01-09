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

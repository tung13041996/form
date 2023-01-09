<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :check="modelValue"
      class="field-checkbox"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

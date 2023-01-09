<template>
  <div class="radio">
    <input
      type="radio"
      :check="modelValue === value"
      :value="value"
      v-bind="$attrs"
      class="field-checkbox"
      @change="$emit('update:modelValue', value)"
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
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

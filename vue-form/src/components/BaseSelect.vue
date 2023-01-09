<template>
  <div class="select field">
    <label v-if="label">{{ label }}</label>
    <select :value="modelValue" class="field-input" v-bind="$attrs">
      <option
        v-for="option in categories"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="form">
    <h1 class="txt_center">Create Form</h1>
    <div class="form-wrapper">
      <h2 class="margin-bottom-20px">Create Events</h2>
      <BaseInput label="Title" v-model="event.title" type="text" />
      <BaseInput label="Description" v-model="event.description" type="text" />
      <h3 class="margin-bottom-20px">Where is it?</h3>
      <BaseInput label="Location" v-model="event.location" type="text" />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "SimpleForm",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseInput,
  },
  data() {
    return {
      event: {
        title: "Title",
        description: "Description",
        location: "Vietnam",
      },
    };
  },
};
</script>

<style scoped>
.form-wrapper {
  max-width: 400px;
  margin: 0 auto 40px;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid rgba(112, 112, 112, 0.2);
}
</style>

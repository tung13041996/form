<template>
  <div class="form">
    <h1 class="txt_center">Create Form</h1>
    <div class="form-wrapper">
      <h2 class="margin-bottom-20px">Create Events</h2>
      <BaseSelect
        label="Category"
        v-model="event.category"
        :categories="event.categories"
      />
      <BaseInput label="Title" v-model="event.title" type="text" />
      <BaseInput label="Description" v-model="event.description" type="text" />
      <h3 class="margin-bottom-20px">Where is it?</h3>
      <BaseInput label="Location" v-model="event.location" type="text" />
      <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      <BaseCheckbox v-model="event.extras.cool" label="Cool" />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
export default {
  name: "SimpleForm",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BaseInput,
    BaseSelect,
    BaseCheckbox,
  },
  data() {
    return {
      event: {
        title: "Title",
        category: "Category",
        description: "Description",
        location: "Vietnam",
        categories: ["Alex", "Peter", "Thomas", "Frank", "Steven"],
        extras: {
          catering: true,
          cool: false,
        },
      },
    };
  },
};
</script>

<style>
.form-wrapper {
  max-width: 400px;
  margin: 0 auto 40px;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid rgba(112, 112, 112, 0.2);
}
.field:not(:last-child) {
  margin-bottom: 40px;
}
.field-input,
label {
  display: block;
}
label {
  font-weight: 500;
  margin-bottom: 5px;
}
.field-input {
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid rgba(112, 112, 112, 0.1);
  transition: all 0.5s ease;
  font-size: 16px;
}
.field-input::placeholder {
  color: rgba(112, 112, 112, 0.5);
  transition: all 0.5s ease;
}
.field-input:hover {
  border-color: darkgreen;
}
.field-input:hover::placeholder {
  color: rgba(112, 112, 112, 0.2);
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}
.checkbox label {
  margin-bottom: 0;
}
</style>

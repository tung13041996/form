import { createRouter, createWebHistory } from "vue-router";
import SimpleForm from "../views/SimpleForm";

const routes = [
  {
    path: "/",
    name: "SimpleForm",
    component: SimpleForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

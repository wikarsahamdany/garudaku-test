import Vue from "vue";
import VueRouter from "vue-router";
import MainPages from "@/components/pages/MainPages.vue";
import Home from "@/components/templates/Home.vue";
import Detail from "@/components/templates/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/detail/:year/:month/:day/:slug",
    name: "detail",
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

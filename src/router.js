import Vue from "vue";
import VueRouter from "vue-router";

import Index from "@/components/Index.vue";
import Fresh from "@/components/Fresh.vue";
import Director from "@/components/Director.vue";
import Intro from "@/components/Intro.vue";
import History from "@/components/History.vue";
import Law from "@/components/Law.vue";
import NotFound from "@/components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "系網首頁",
    path: "/",
    component: Index,
  },
  {
    name: "新生專區",
    path: "/fresh",
    component: Fresh,
  },
  {
    name: "系主任的話",
    path: "/director",
    component: Director,
  },
  {
    name: "系會介紹",
    path: "/intro",
    component: Intro,
  },
  {
    name: "歷屆幹部",
    path: "/history",
    component: History,
  },
  {
    name: "組織章程",
    path: "/law",
    component: Law,
  },
  {
    name: "404",
    path: "*",
    component: NotFound,
  },
];

const Router = new VueRouter({
  routes,
});

export default Router;

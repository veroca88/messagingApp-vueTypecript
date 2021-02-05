import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    alias: "/messages",
    name: "messages",
    component: () => import("../components/MessagesList.vue")
  },
  {
    path: "/messages/:id",
    name: "message-detail",
    component: () => import("../components/Message.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddMessage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

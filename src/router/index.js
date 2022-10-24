import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

Vue.use(VueRouter);
// const view = function (name) {
//   return () => import(`@/views/${name}.vue`)
// }
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // component: resolve => require(['@/views/AboutView.vue'], resolve)
    // component: view('AboutView'),
  },
];

export default routes;

import Vue from "vue";
import Router from "vue-router";
import style from "../public/global_styles/navbar.css";

Vue.use(Router);
Vue.use(style);


export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/bug_reports",
      name: "bugreports",
      component: () => import("./components/BugReportList")
    },
    {
      path: "/bug_reports/:id",
      name: "bug_report",
      component: () => import("./components/BugReport")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddBugReport")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./components/About")
    },
    {
      path: "/front_box",
      name: "front_box",
      component: () => import("./components/FrontBox")
    }
  ]
});
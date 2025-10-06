import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactUsView"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/ServicesView"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/views/PrivacyView"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/views/TermsView"),
    },
  ],
});

export default router;

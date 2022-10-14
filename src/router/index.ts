import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const modules: Record<string, any> = import.meta.glob("./modules/*.ts", {
  eager: true,
});

export const asyncRoutes: Array<RouteRecordRaw> = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  asyncRoutes.push(...modList);
});

const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "dashboard" },
  },
  ...asyncRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  routes: defaultRouterList,
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;

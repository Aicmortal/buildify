import type { RouteRecordRaw } from "vue-router";
import { Layout } from "../constant";
const dashboard: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      icon: "carbon:cloud-satellite-config",
      order: 4,
      hideChildMenu: true,
      title: "menu.cis",
    },

    component: Layout,
    redirect: "/dashboard/index",
    children: [
      {
        path: "index",
        name: "dashboardIndex",
        component: () => import("@/views/dashboard/Dashboard.vue"),
      },
    ],
  },
];

export default dashboard;

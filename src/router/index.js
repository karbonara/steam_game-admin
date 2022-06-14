import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "/",
      component: () => import("@/pages/Index"),
    },
    {
      path: "/profile",
      name: "/profile",
      component: () => import("@/pages/Profile"),
    },
    {
      path: "/login",
      name: "/login",
      component: () => import("@/pages/Login"),
    },
    {
      path: "/tables",
      name: "/tables",
      component: () => import("@/pages/Tables"),
    },
    {
      path: "/form",
      name: "/form",
      component: () => import("@/pages/Form"),
    },
    {
      path: "/directx",
      name: "/directx",
      component: () => import("@/components/directx/page//Directx"),
    },
    {
      path: "/video-card",
      name: "/video-card",
      component: () => import("@/components/video-card/page/VideoCard"),
    },
    {
      path: "/cpu",
      name: "/cpu",
      component: () => import("@/components/cpu/page/Cpu"),
    },
    {
      path: "/os",
      name: "/os",
      component: () => import("@/components/os/page/Os"),
    },
    {
      path: "/tags",
      name: "/tags",
      component: () => import("@/components/tags/page/Tags"),
    },
    {
      path: "/publisher",
      name: "/publisher",
      component: () => import("@/components/publisher/page/Publisher"),
    },
    {
      path: "/developers",
      name: "/developers",
      component: () => import("@/components/developers/page/Developers"),
    },
    {
      path: "/genre",
      name: "/genre",
      component: () => import("@/components/genre/page/Genre"),
    },
    {
      path: "/platform",
      name: "/platform",
      component: () => import("@/components/platform/page/Platform"),
    },
    {
      path: "/types",
      name: "/types",
      component: () => import("@/components/types/page/Types"),
    },
    {
      path: "/selections",
      name: "/selections",
      component: () => import("@/components/selections/page/Selections"),
    },
    {
      path: "/goods",
      name: "/goods",
      component: () => import("@/components/goods/page/Goods"),
    },
    {
      path: "/slider",
      name: "/slider",
      component: () => import("@/components/slider/page/Slider"),
    },
  ],
});

export default router;
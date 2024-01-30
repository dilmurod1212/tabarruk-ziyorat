import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: () => import("@/layouts/Default/LDefault.vue"),
      redirect: { name: "HomePage" },
      children: [
        {
          path: "/",
          name: "HomePage",
          component: () => import("@/views/PIndex.vue"),
          alias: ["/country", "/religion", "/attraction", "/destination"],
          meta: {
            roles: ["admin", "student", "teacher"],
            auth: false,
            layout: "default",
          },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/PAbout.vue"),
        },
        {
          path: "/help",
          name: "Help",
          alias: ["/faq"],
          component: () => import("../views/PHelp.vue"),
        },
        {
          path: "/privacy",
          name: "Privacy  ",
          component: () => import("../views/PPrivacy.vue"),
        },
        {
          path: "/country/:id",
          name: "countrySingle",
          component: () => import("@/views/Countries/CountriesSingle.vue"),
        },
        {
          path: "/destination/:slug",
          name: "Destination",
          component: () => import("@/views/Destinations/PSingle.vue"),
        },
        {
          path: "/religion/:id",
          name: "religionSingle",
          component: () => import("@/views/Religions/PSingle.vue"),
        },
        {
          path: "/news",
          name: "News",
          component: () => import("@/views/News/PIndex.vue"),
        },
        {
          path: "/news/:slug",
          name: "NewsSingle",
          component: () => import("@/views/News/PSingle.vue"),
        },
        {
          path: "/filter-map",
          name: "Filter-Map",
          component: () => import("@/views/PMap.vue"),
        },
      ],
    },
    {
      path: "/map",
      name: "Map",
      component: () => import("../views/PMap.vue"),
      children: [
        {
          path: "/filter-map",
          name: "Filter-Map",
          component: () =>
            import("@/components/Sections/PHelp/CFilterMobile.vue"),
        },
        {
          path: "",
          name: "Location",
          component: () => import("@/components/Sections/PHelp/CMap.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Error",
      component: () => import("@/views/PError.vue"),
    },
  ],
});
router.beforeEach((to, from) => {
  window.scrollTo(0, 0);
  // to and from are both route objects. must call `next`.
});
export default router;

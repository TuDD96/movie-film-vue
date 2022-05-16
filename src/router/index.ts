import { createRouter, createWebHistory } from "vue-router";

// page
const p = (path: string) => {
  return () => import(`../views/${path}.vue`).then((m) => m.default || m);
};

// page layout
const pl = (path: string) => {
  return () => import(`../layout/${path}.vue`).then((m) => m.default || m);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: p("Home/HomeView"),
        header: pl("Header/MainHeader"),
        footer: pl("Footer/MainFooter"),
      },
    },
    {
      path: "/:slug",
      name: "movie-detail",
      components: {
        default: p("MovieDetail/MovieDetailView"),
        header: pl("Header/MainHeader"),
        footer: pl("Footer/MainFooter"),
      },
    },
  ],
});

export default router;

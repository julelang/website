import { createRouter, createWebHistory } from "vue-router"
import NProgress from "nprogress"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/Home.vue")
    },
    {
      name: "contribute",
      path: "/contribute",
      component: () => import("../views/Contribute.vue")
    },
    {
      name: "community",
      path: "/community",
      component: () => import("../views/Community.vue")
    },
    {
      name: "code-of-conduct",
      path: "/code-of-conduct",
      component: () => import("../views/CodeOfConduct.vue")
    },
    {
      name: "downloads",
      path: "/downloads",
      component: () => import("../views/Downloads.vue")
    },
    {
      name: "404",
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue")
    },
  ]
})

NProgress.configure({ showSpinner: false })

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }

  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router

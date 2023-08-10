import { createRouter, createWebHistory } from "vue-router"
import NProgress from "nprogress"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/contribute",
      component: () => import("../views/Contribute.vue")
    },
    {
      path: "/community",
      component: () => import("../views/Community.vue")
    },
    {
      path: "/code-of-conduct",
      component: () => import("../views/CodeOfConduct.vue")
    },
    {
      path: "/downloads",
      component: () => import("../views/Downloads.vue")
    },
    {
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

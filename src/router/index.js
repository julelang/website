import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }
    return {
      top: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      name: "404",
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue")
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: () => import('../views/Contribute.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/Community.vue'),
    },
    {
      path: '/code-of-conduct',
      name: 'code',
      component: () => import('../views/CodeOfConduct.vue'),
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: () => import('../views/Downloads.vue'),
    },
    {
      path: '/downloads/:id',
      name: 'release',
      component: () => import('../views/Release.vue'),
    },
    {
      path: '/future-of-jule',
      name: 'future',
      component: () => import('../views/FutureOfJule.vue'),
    }
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
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('../views/Community.vue')
    },
    {
      path: '/contribute',
      name: 'Contribute',
      component: () => import('../views/Contribute.vue')
    },
    {
      path: '/code-of-conduct',
      name: 'CodeOfConduct',
      component: () => import('../views/CodeOfConduct.vue')
    },
    {
      path: '/license',
      name: 'License',
      component: () => import('../views/License.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue')
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

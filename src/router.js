import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('./views/Home.vue'), meta: { title: 'The Jule Programming Language', desc: 'Jule is a simple and safe programming language with built-in concurrency, first-class C/C++ interoperability and powerful compile-time capabilities.' } },
  { path: '/downloads', name: 'downloads', component: () => import('./views/Downloads.vue'), meta: { title: 'Download Jule', desc: 'Download the latest Jule compiler release for Windows, macOS and Linux.' } },
  { path: '/downloads/:id', name: 'release', component: () => import('./views/Release.vue'), meta: { title: 'Release', desc: 'Files and release notes for this Jule release.' } },
  { path: '/future-of-jule', name: 'future', component: () => import('./views/FutureOfJule.vue'), meta: { title: 'Future of Jule', desc: 'Plans, priorities and the development approach for the Jule programming language.' } },
  { path: '/community', name: 'community', component: () => import('./views/Community.vue'), meta: { title: 'Community', desc: 'Join the Jule community on Discord and GitHub, and find ways to get involved.' } },
  { path: '/contribute', name: 'contribute', component: () => import('./views/Contribute.vue'), meta: { title: 'Contributing Guidelines', desc: 'How to contribute to the Jule project: ecosystem, proposals, documentation, standard library and compiler.' } },
  { path: '/code-of-conduct', name: 'code', component: () => import('./views/CodeOfConduct.vue'), meta: { title: 'Julenour Code of Conduct', desc: 'The standard of behavior we expect from everyone in the Jule community.' } },
  { path: '/:pathMatch(.*)*', name: '404', component: () => import('./views/NotFound.vue'), meta: { title: 'Page not found', desc: 'This page does not exist.' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 90 }
    return { top: 0 }
  },
})

function setMeta(sel, attr, value) {
  document.head.querySelector(sel)?.setAttribute(attr, value)
}

router.afterEach((to) => {
  const t = to.meta.title
  const title = to.name === 'home' ? t : `${t} · Jule`
  document.title = title
  const url = 'https://jule.dev' + (to.path === '/' ? '/' : to.path)
  setMeta('meta[name="description"]', 'content', to.meta.desc)
  setMeta('meta[property="og:title"]', 'content', title)
  setMeta('meta[property="og:description"]', 'content', to.meta.desc)
  setMeta('meta[property="og:url"]', 'content', url)
  setMeta('meta[name="twitter:title"]', 'content', title)
  setMeta('meta[name="twitter:description"]', 'content', to.meta.desc)
  setMeta('link[rel="canonical"]', 'href', url)
})

export default router

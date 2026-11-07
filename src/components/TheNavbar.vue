<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { ChevronDown, Menu, X, Star, ExternalLink } from "@lucide/vue";
import JuleLogo from "./JuleLogo.vue";
import BrandIcon from "./BrandIcon.vue";
import ThemeToggle from "./ThemeToggle.vue";
import { groups, isExternal } from "@/lib/nav.js";
import { repo, loadRepo } from "@/lib/useRepo.js";
import { formatCount } from "@/lib/github.js";

const route = useRoute();

const byTitle = (t) => groups.find((g) => g.title === t);
const menus = [
  { title: "Learn", groups: [byTitle("Learn")] },
  { title: "Project", groups: [byTitle("Project"), byTitle("Tools")] },
  { title: "Community", groups: [byTitle("Community")] },
];

const openMenu = ref(null);
const mobile = ref(false);
const scrolled = ref(false);
const root = ref(null);
let hoverTimer;

const onScroll = () => (scrolled.value = window.scrollY > 8);
const onDoc = (e) => {
  if (root.value && !root.value.contains(e.target)) openMenu.value = null;
};
const onKey = (e) => {
  if (e.key === "Escape") {
    openMenu.value = null;
    mobile.value = false;
  }
};
function hover(i, on) {
  if (!window.matchMedia("(hover: hover)").matches) return;
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(
    () => (openMenu.value = on ? i : openMenu.value === i ? null : openMenu.value),
    on ? 60 : 160
  );
}

onMounted(() => {
  loadRepo();
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", onDoc);
  document.addEventListener("keydown", onKey);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("click", onDoc);
  document.removeEventListener("keydown", onKey);
});
watch(
  () => route.fullPath,
  () => {
    openMenu.value = null;
    mobile.value = false;
  }
);
watch(mobile, (v) => (document.documentElement.style.overflow = v ? "hidden" : ""));
</script>

<template>
  <header
    ref="root"
    class="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200"
    :class="
      scrolled || mobile
        ? 'border-line bg-bg/85 backdrop-blur-xl'
        : 'border-transparent bg-transparent'
    "
  >
    <nav class="container-x flex h-16 items-center gap-2" aria-label="Main">
      <RouterLink to="/" class="mr-3 flex items-center gap-2.5" aria-label="Jule home">
        <JuleLogo class="h-8 w-8 text-accent" />
        <span class="font-display text-xl font-semibold tracking-tight text-fg"
          >Jule</span
        >
      </RouterLink>

      <ul class="hidden items-center gap-0.5 md:flex">
        <li
          v-for="(m, i) in menus"
          :key="m.title"
          class="relative"
          @mouseenter="hover(i, true)"
          @mouseleave="hover(i, false)"
        >
          <button
            type="button"
            class="flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-muted transition hover:text-fg"
            :class="openMenu === i ? 'text-fg' : ''"
            :aria-expanded="openMenu === i"
            aria-haspopup="true"
            @click="openMenu = openMenu === i ? null : i"
          >
            {{ m.title }}
            <ChevronDown
              :size="15"
              class="transition-transform"
              :class="openMenu === i ? 'rotate-180' : ''"
            />
          </button>
          <div v-show="openMenu === i" class="absolute left-0 top-full pt-2">
            <div class="facet" style="--facet-bg: var(--c-surface)">
              <div class="facet-in flex gap-6 p-3">
                <div v-for="g in m.groups" :key="g.title" class="w-64">
                  <div class="px-3 pb-1 pt-2 text-xs font-medium text-dim">
                    {{ g.title }}
                  </div>
                  <ul>
                    <li v-for="item in g.items" :key="item.href">
                      <component
                        :is="isExternal(item.href) ? 'a' : 'RouterLink'"
                        v-bind="
                          isExternal(item.href)
                            ? {
                                href: item.href,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              }
                            : { to: item.href }
                        "
                        class="group block rounded-lg px-3 py-2 transition hover:bg-surface2"
                      >
                        <span
                          class="flex items-center gap-1.5 text-sm font-medium text-fg"
                        >
                          {{ item.title }}
                          <ExternalLink
                            v-if="isExternal(item.href)"
                            :size="12"
                            class="text-dim opacity-0 transition group-hover:opacity-100"
                          />
                        </span>
                        <span class="block text-xs leading-snug text-muted">{{
                          item.desc
                        }}</span>
                      </component>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <RouterLink
            to="/future-of-jule"
            class="flex h-9 items-center rounded-lg px-3 text-sm font-medium text-muted transition hover:text-fg"
            active-class="!text-fg"
            >Future of Jule</RouterLink
          >
        </li>
      </ul>

      <div class="ml-auto flex items-center gap-2">
        <a
          href="https://github.com/julelang/jule"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden h-9 items-center gap-2 rounded-lg border border-line px-3 text-sm text-muted transition hover:border-accent hover:text-fg sm:flex"
          aria-label="Jule on GitHub"
        >
          <BrandIcon name="github" class="text-base" />
          <template v-if="repo">
            <Star :size="13" class="text-accent" />
            <span class="font-medium tabular-nums text-fg">{{
              formatCount(repo.stargazers_count)
            }}</span>
          </template>
        </a>
        <ThemeToggle />
        <RouterLink to="/downloads" class="btn btn-primary btn-sm hidden md:inline-flex"
          >Download</RouterLink
        >
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-lg border border-line text-fg md:hidden"
          :aria-expanded="mobile"
          aria-label="Toggle menu"
          @click="mobile = !mobile"
        >
          <X v-if="mobile" :size="18" />
          <Menu v-else :size="18" />
        </button>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <div
      v-if="mobile"
      class="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-8 pt-4 md:hidden"
    >
      <div class="mb-5 flex gap-2">
        <RouterLink to="/downloads" class="btn btn-primary flex-1">Download</RouterLink>
      </div>
      <div v-for="g in groups" :key="g.title" class="mb-5">
        <div class="mb-1 text-xs font-medium text-dim">{{ g.title }}</div>
        <ul>
          <li v-for="item in g.items" :key="item.href">
            <component
              :is="isExternal(item.href) ? 'a' : 'RouterLink'"
              v-bind="
                isExternal(item.href)
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { to: item.href }
              "
              class="flex items-center justify-between rounded-lg py-2.5 text-[0.95rem] font-medium text-fg"
            >
              {{ item.title }}
              <ExternalLink v-if="isExternal(item.href)" :size="14" class="text-dim" />
            </component>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

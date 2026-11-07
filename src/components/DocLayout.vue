<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useRouter } from "vue-router";
import { highlightAll } from "@/lib/highlight.js";

defineProps({
  title: String,
  lead: String,
  html: { type: String, required: true },
});

const router = useRouter();
const body = ref(null);
const toc = ref([]);
const activeId = ref("");
let observer;

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

onMounted(async () => {
  await nextTick();
  const el = body.value;
  highlightAll(el);
  const used = new Set();
  const heads = [...el.querySelectorAll("h2, h3")];
  toc.value = heads.map((h) => {
    let id = h.id || slug(h.textContent);
    while (used.has(id)) id += "-2";
    used.add(id);
    h.id = id;
    return { id, text: h.textContent.trim(), level: h.tagName === "H2" ? 2 : 3 };
  });
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => e.isIntersecting && (activeId.value = e.target.id));
    },
    { rootMargin: "-90px 0px -70% 0px" }
  );
  heads.forEach((h) => observer.observe(h));
  if (location.hash)
    document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
});
onBeforeUnmount(() => observer?.disconnect());

function jump(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", "#" + id);
}

// Keep internal links inside the SPA.
function onClick(e) {
  const a = e.target.closest("a[href]");
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
  const href = a.getAttribute("href");
  if (href.startsWith("/")) {
    e.preventDefault();
    router.push(href);
  } else if (href.startsWith("#")) {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
  }
}
</script>

<template>
  <main id="main">
    <header
      class="relative overflow-hidden border-b border-line bg-soft pb-14 pt-32 md:pt-40"
    >
      <slot name="art" />
      <div class="container-x relative">
        <h1 class="font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
          {{ title }}
        </h1>
        <p
          v-if="lead"
          class="mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {{ lead }}
        </p>
        <slot name="actions" />
      </div>
    </header>

    <div class="container-x grid gap-16 py-16 lg:grid-cols-[minmax(0,44rem)_1fr]">
      <article ref="body" class="doc" @click="onClick" v-html="html"></article>
      <aside v-if="toc.length" class="hidden lg:block" aria-label="On this page">
        <div class="sticky top-24">
          <div class="mb-3 text-sm font-semibold text-fg">On this page</div>
          <ul
            class="max-h-[calc(100vh-9rem)] space-y-0.5 overflow-y-auto border-l border-line pr-2 text-sm"
          >
            <li v-for="t in toc" :key="t.id">
              <a
                :href="'#' + t.id"
                class="-ml-px block border-l py-1 leading-snug transition-colors"
                :class="[
                  t.level === 3 ? 'pl-7 text-[0.82rem]' : 'pl-4',
                  activeId === t.id
                    ? 'border-accent font-medium text-fg'
                    : 'border-transparent text-muted hover:text-fg',
                ]"
                @click.prevent="jump(t.id)"
                >{{ t.text }}</a
              >
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </main>
</template>

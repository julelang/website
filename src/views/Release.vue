<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeft } from "@lucide/vue";
import AssetTable from "@/components/AssetTable.vue";
import { getRelease } from "@/lib/github.js";
import { formatDate } from "@/lib/github.js";
import { releases, loadReleases } from "@/lib/useRepo.js";

const route = useRoute();
const release = ref(null);
const notes = ref("");
const error = ref(false);

async function load() {
  release.value = null;
  notes.value = "";
  error.value = false;
  try {
    const r = await getRelease(route.params.id);
    release.value = r;
    document.title = `${r.name || r.tag_name} · Jule`;
    if (r.body) {
      const [{ marked }, { default: DOMPurify }] = await Promise.all([
        import("marked"),
        import("dompurify"),
      ]);
      const clean = DOMPurify.sanitize(marked.parse(r.body, { gfm: true }), {
        ADD_ATTR: ["target"],
      });
      notes.value = clean.replace(
        /<a /g,
        '<a target="_blank" rel="noopener noreferrer" '
      );
    }
  } catch {
    error.value = true;
  }
}
onMounted(() => {
  loadReleases();
  load();
});
watch(() => route.params.id, load);
const isLatest = () => releases.value?.[0]?.id === release.value?.id;
</script>

<template>
  <main id="main">
    <header class="border-b border-line bg-soft pb-12 pt-32 md:pt-36">
      <div class="container-x">
        <RouterLink
          to="/downloads"
          class="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
          ><ArrowLeft :size="15" /> All downloads</RouterLink
        >
        <div v-if="release" class="mt-5">
          <h1 class="font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            {{ release.name || release.tag_name }}
          </h1>
          <div class="mt-4 flex flex-wrap items-center gap-3 text-sm text-dim">
            <span>{{ formatDate(release.published_at || release.created_at) }}</span>
            <span
              v-if="isLatest()"
              class="rounded-full bg-surface2 px-2.5 py-0.5 text-xs font-medium text-ok"
              >Latest</span
            >
            <span
              v-if="release.prerelease"
              class="rounded-full bg-surface2 px-2.5 py-0.5 text-xs font-medium text-warn"
              >Pre-release</span
            >
            <a
              class="link"
              :href="release.html_url"
              target="_blank"
              rel="noopener noreferrer"
              >View on GitHub</a
            >
          </div>
        </div>
        <div v-else-if="error" class="mt-5">
          <h1 class="font-display text-4xl font-semibold">Release not found</h1>
          <p class="mt-3 text-muted">
            We couldn’t load this release. It may not exist, or GitHub is rate limiting
            requests right now.
          </p>
        </div>
        <div v-else class="mt-5 space-y-3">
          <div class="skeleton h-12 w-80"></div>
          <div class="skeleton h-5 w-48"></div>
        </div>
      </div>
    </header>

    <div
      v-if="release"
      class="container-x grid gap-14 py-14 lg:grid-cols-[minmax(0,1fr)_26rem]"
    >
      <section v-if="notes" aria-label="Release notes">
        <h2 class="mb-4 font-display text-2xl font-semibold">Release notes</h2>
        <div class="doc max-w-none" v-html="notes"></div>
      </section>
      <section v-else class="text-muted">This release has no notes.</section>
      <section aria-label="Downloads">
        <h2 class="mb-4 font-display text-2xl font-semibold">Downloads</h2>
        <AssetTable :assets="release.assets" />
      </section>
    </div>
  </main>
</template>

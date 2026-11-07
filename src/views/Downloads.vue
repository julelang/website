<script setup>
import { computed, onMounted } from "vue";
import { ArrowRight, RotateCw, BookOpen } from "@lucide/vue";
import AssetTable from "@/components/AssetTable.vue";
import { releases, releasesError, loadReleases, retryReleases } from "@/lib/useRepo.js";
import { formatDate } from "@/lib/github.js";

onMounted(loadReleases);
const latest = computed(
  () => releases.value?.find((r) => !r.prerelease && !r.draft) || releases.value?.[0]
);
const older = computed(() =>
  (releases.value || []).filter((r) => r.id !== latest.value?.id)
);
</script>

<template>
  <main id="main">
    <header class="border-b border-line bg-soft pb-14 pt-32 md:pt-40">
      <div class="container-x">
        <h1 class="font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
          Download Jule
        </h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Pick your platform and grab the latest compiler build. New to Jule? The
          <a class="link" href="https://manual.jule.dev/getting-started"
            >Getting Started</a
          >
          guide walks you through the first steps.
        </p>
      </div>
    </header>

    <div class="container-x grid gap-14 py-14 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div>
        <!-- Error -->
        <div v-if="releasesError" class="facet">
          <div class="facet-in p-8">
            <h2 class="font-display text-2xl font-semibold">Couldn’t load releases</h2>
            <p class="mt-2 max-w-lg text-muted">
              GitHub didn’t respond (it limits anonymous requests, so this can pass in a
              few minutes). You can still get every build straight from GitHub.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <button type="button" class="btn btn-primary btn-sm" @click="retryReleases">
                <RotateCw :size="15" /> Try again
              </button>
              <a
                class="btn btn-ghost btn-sm"
                href="https://github.com/julelang/jule/releases"
                target="_blank"
                rel="noopener noreferrer"
                >Open releases on GitHub</a
              >
            </div>
          </div>
        </div>

        <!-- Loading -->
        <div
          v-else-if="!releases"
          class="space-y-4"
          aria-busy="true"
          aria-label="Loading releases"
        >
          <div class="skeleton h-9 w-56"></div>
          <div class="skeleton h-10 w-72"></div>
          <div class="skeleton h-40 w-full"></div>
        </div>

        <!-- Latest -->
        <template v-else-if="latest">
          <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h2 class="font-display text-3xl font-semibold">
              {{ latest.name || latest.tag_name }}
            </h2>
            <span
              class="rounded-full bg-surface2 px-2.5 py-0.5 text-xs font-medium text-ok"
              >Latest</span
            >
            <span class="text-sm text-dim">{{
              formatDate(latest.published_at || latest.created_at)
            }}</span>
          </div>
          <RouterLink
            :to="`/downloads/${latest.id}`"
            class="link mt-2 inline-block text-sm"
            >Release notes and all files</RouterLink
          >
          <div class="mt-6"><AssetTable :assets="latest.assets" /></div>
          <p class="mt-4 text-sm text-dim">
            Don’t see the option you’re looking for? Check the
            <a
              class="link"
              :href="latest.html_url"
              target="_blank"
              rel="noopener noreferrer"
              >release page on GitHub</a
            >.
          </p>

          <h2 class="mt-16 font-display text-2xl font-semibold">Older releases</h2>
          <div class="mt-4 overflow-x-auto rounded-xl border border-line">
            <table class="w-full min-w-[28rem] text-left text-sm">
              <thead class="bg-surface text-dim">
                <tr>
                  <th class="px-5 py-3 font-medium">Release</th>
                  <th class="px-5 py-3 font-medium">Builds</th>
                  <th class="px-5 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-line bg-bg">
                <tr v-for="r in older" :key="r.id" class="transition hover:bg-surface">
                  <td class="px-5 py-3">
                    <RouterLink
                      :to="`/downloads/${r.id}`"
                      class="inline-flex items-center gap-2 font-medium text-fg hover:text-accent"
                    >
                      {{ r.name || r.tag_name }}
                      <span
                        v-if="r.prerelease"
                        class="rounded-full bg-surface2 px-2 py-0.5 text-xs font-normal text-warn"
                        >Pre-release</span
                      >
                    </RouterLink>
                  </td>
                  <td class="px-5 py-3 text-muted">{{ r.assets.length }}</td>
                  <td class="px-5 py-3 text-muted">
                    {{ formatDate(r.published_at || r.created_at) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
      </div>

      <aside class="space-y-4 lg:pt-1">
        <div class="facet">
          <div class="facet-in p-6">
            <BookOpen :size="22" class="text-accent" />
            <h3 class="mt-3 font-display text-xl font-semibold">Next steps</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-muted">
              Learn the language with the manual, or set up your editor.
            </p>
            <a
              href="https://manual.jule.dev/getting-started"
              class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
              >Getting Started <ArrowRight :size="14"
            /></a>
          </div>
        </div>
        <div class="rounded-xl border border-line p-6 text-sm leading-relaxed text-muted">
          Prefer building from source? The reference compiler is Pure Jule and lives in
          the
          <a
            class="link"
            href="https://github.com/julelang/jule"
            target="_blank"
            rel="noopener noreferrer"
            >main repository</a
          >.
        </div>
      </aside>
    </div>
  </main>
</template>

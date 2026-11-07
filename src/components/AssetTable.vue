<script setup>
import { ref, computed, onMounted } from "vue";
import { Download } from "@lucide/vue";
import BrandIcon from "./BrandIcon.vue";
import { detectOS, parseAsset, OS_LABEL, ARCH_LABEL } from "@/lib/github.js";

const props = defineProps({ assets: { type: Array, default: () => [] } });

const parsed = computed(() => props.assets.map(parseAsset));
const order = ["windows", "macos", "linux", "other"];
const oses = computed(() => order.filter((o) => parsed.value.some((a) => a.os === o)));
const os = ref(null);
onMounted(() => (os.value = detectOS()));
const current = computed(() =>
  oses.value.includes(os.value) ? os.value : oses.value[0]
);
// Most Macs sold since 2020 are Apple Silicon (ARM64), so list it first there.
const rank = computed(() =>
  current.value === "macos"
    ? { arm64: 0, amd64: 1, 386: 2, other: 3 }
    : { amd64: 0, arm64: 1, 386: 2, other: 3 }
);
const rows = computed(() =>
  parsed.value
    .filter((a) => a.os === current.value)
    .sort((a, b) => rank.value[a.arch] - rank.value[b.arch])
);
</script>

<template>
  <div v-if="oses.length">
    <div role="tablist" class="mb-4 flex flex-wrap gap-2" aria-label="Operating system">
      <button
        v-for="o in oses"
        :key="o"
        role="tab"
        type="button"
        :aria-selected="o === current"
        class="inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition"
        :class="
          o === current
            ? 'border-accent bg-surface text-fg'
            : 'border-line text-muted hover:text-fg'
        "
        @click="os = o"
      >
        <BrandIcon v-if="o !== 'other'" :name="o" class="text-base" />
        {{ OS_LABEL[o] }}
      </button>
    </div>
    <ul
      class="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface"
    >
      <li
        v-for="(a, i) in rows"
        :key="a.id"
        class="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3.5 sm:px-5"
      >
        <div class="min-w-0 flex-1">
          <div class="font-medium text-fg">{{ ARCH_LABEL[a.arch] }}</div>
          <div class="truncate font-mono text-xs text-dim">
            {{ a.name }} · {{ a.mb }} MB
          </div>
        </div>
        <a
          :href="a.browser_download_url"
          class="btn btn-sm"
          :class="i === 0 ? 'btn-primary' : 'btn-ghost'"
          :aria-label="`Download ${a.name}`"
        >
          <Download :size="15" /> Download
        </a>
      </li>
    </ul>
  </div>
  <p v-else class="text-muted">No downloadable builds are attached to this release.</p>
</template>

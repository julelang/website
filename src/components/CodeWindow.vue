<script setup>
import { ref, computed } from "vue";
import { Copy, Check } from "@lucide/vue";
import { highlight } from "@/lib/highlight.js";

const props = defineProps({
  tabs: { type: Array, required: true }, // [{ label, code, file? }]
  minHeight: { type: String, default: "" },
});
const active = ref(0);
const copied = ref(false);
const current = computed(() => props.tabs[active.value]);
const html = computed(() => highlight(current.value.code));

async function copy() {
  try {
    await navigator.clipboard.writeText(current.value.code);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1600);
  } catch {}
}
</script>

<template>
  <div class="facet" style="--facet-line: var(--code-line); --facet-bg: var(--code-bg)">
    <div class="facet-in flex flex-col" :style="{ minHeight }">
      <div
        class="flex items-center gap-1 border-b px-2 pt-2"
        style="background: var(--code-bar); border-color: var(--code-line)"
      >
        <div
          role="tablist"
          class="flex min-w-0 flex-1 gap-1 overflow-x-auto"
          aria-label="Code samples"
        >
          <button
            v-for="(t, i) in tabs"
            :key="t.label"
            role="tab"
            type="button"
            :aria-selected="i === active"
            class="shrink-0 rounded-t-lg px-3.5 py-2 font-mono text-[0.8rem] transition-colors"
            :class="
              i === active
                ? 'text-[var(--code-fg)]'
                : 'text-[var(--code-dim)] hover:text-[var(--code-fg)]'
            "
            :style="i === active ? 'background: var(--code-bg)' : ''"
            @click="active = i"
          >
            {{ t.file || t.label }}
          </button>
        </div>
        <button
          type="button"
          class="mb-1 mr-1 inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[0.75rem] text-[var(--code-dim)] transition hover:text-[var(--code-fg)]"
          @click="copy"
        >
          <Check v-if="copied" :size="14" class="text-[var(--tok-string)]" />
          <Copy v-else :size="14" />
          <span aria-live="polite">{{ copied ? "Copied" : "Copy" }}</span>
        </button>
      </div>
      <pre class="code-pre flex-1" role="tabpanel"><code v-html="html"></code></pre>
    </div>
  </div>
</template>

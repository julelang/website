<script setup>
import { Sun, Moon } from "@lucide/vue";
import { theme, toggleTheme } from "@/lib/theme.js";
</script>

<template>
  <button
    type="button"
    class="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-fg"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggleTheme"
  >
    <Sun v-if="theme === 'dark'" :size="18" />
    <Moon v-else :size="18" />
  </button>
</template>

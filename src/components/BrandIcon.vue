<script setup>
import { computed } from "vue";
import {
  faGithub,
  faDiscord,
  faWindows,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

const props = defineProps({ name: { type: String, required: true } });
const icons = {
  github: faGithub,
  discord: faDiscord,
  windows: faWindows,
  apple: faApple,
  macos: faApple,
  linux: faLinux,
};
const def = computed(() => icons[props.name]?.icon);
</script>

<template>
  <svg
    v-if="def"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${def[0]} ${def[1]}`"
    fill="currentColor"
    aria-hidden="true"
    class="inline-block h-[1em] w-auto"
  >
    <path :d="def[4]" />
  </svg>
</template>

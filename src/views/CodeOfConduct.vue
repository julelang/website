<script setup>
import DocLayout from "@/components/DocLayout.vue";
import html from "@/content/conduct.html?raw";
</script>

<template>
  <DocLayout
    title="Julenour Code of Conduct"
    lead="A respectful, effective and productive standard of behavior for everyone in the Jule community."
    :html="html"
  />
</template>

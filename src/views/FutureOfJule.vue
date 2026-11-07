<script setup>
import DocLayout from "@/components/DocLayout.vue";
import html from "@/content/future.html?raw";
</script>

<template>
  <DocLayout
    title="Future of Jule"
    lead="Where the language is going, what we prioritize, and how we plan to get there."
    :html="html"
  />
</template>

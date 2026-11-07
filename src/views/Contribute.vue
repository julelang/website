<script setup>
import DocLayout from "@/components/DocLayout.vue";
import html from "@/content/contribute.html?raw";
</script>

<template>
  <DocLayout
    title="Contributing Guidelines"
    lead="Thank you for considering contributing to Jule. Even the smallest contribution is appreciated."
    :html="html"
  />
</template>

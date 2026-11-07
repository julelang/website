<script setup>
import JuleLogo from "@/components/JuleLogo.vue";
</script>

<template>
  <main
    id="main"
    class="container-x grid min-h-[80vh] place-items-center py-32 text-center"
  >
    <div>
      <JuleLogo class="mx-auto h-24 w-24 text-line" />
      <h1 class="mt-8 font-display text-6xl font-semibold">404</h1>
      <p class="mt-3 text-xl text-muted">This page doesn’t exist.</p>
      <p class="mx-auto mt-2 max-w-md text-sm text-dim">
        If you followed a link from our site, please
        <a
          class="link"
          href="https://github.com/julelang/jule/issues"
          target="_blank"
          rel="noopener noreferrer"
          >let us know on GitHub</a
        >.
      </p>
      <div class="mt-8 flex justify-center gap-3">
        <RouterLink to="/" class="btn btn-primary">Back to home</RouterLink>
        <a href="https://manual.jule.dev" class="btn btn-ghost">Read the manual</a>
      </div>
    </div>
  </main>
</template>

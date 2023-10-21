<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-[var(--bg-primary)] text-white">
    <div class="max-w-screen-lg mx-auto py-3 px-5 flex max-sm:flex-col justify-between items-center max-sm:gap-3">
      <router-link to="/">
        <img class="w-14" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.png">
      </router-link>
      <div class="flex flex-wrap justify-center gap-10 max-sm:gap-5">
        <a href="https://manual.jule.dev" target="_blank">Manual</a>
        <router-link to="/community">Community</router-link>
        <router-link to="/contribute">Contribute</router-link>
      </div>
    </div>
  </nav>
</template>
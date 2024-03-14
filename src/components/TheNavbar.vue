<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-[var(--bg-primary)] text-white">
    <div class="max-w-screen-lg mx-auto py-3 px-5 flex justify-between items-center">
      <router-link to="/">
        <img class="w-14" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.png">
      </router-link>
      <div class="flex flex-wrap justify-center gap-10">
        <a href="https://manual.jule.dev" target="_blank" class="hover:bg-[teal] duration-[0.3s] rounded-full pt-1 pl-2 pr-2 pb-1">Manual</a>
        <router-link to="/community" class="hover:bg-[teal] duration-[0.3s] rounded-full pt-1 pl-2 pr-2 pb-1">Community</router-link>
        <router-link to="/contribute" class="hover:bg-[teal] duration-[0.3s] rounded-full pt-1 pl-2 pr-2 pb-1">Contribute</router-link>
      </div>
    </div>
  </nav>
</template>
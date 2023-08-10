<script>
import { RouterLink } from "vue-router"
</script>

<template>
  <nav class="flex flex-wrap justify-between items-center gap-5 pb-10 pt-5 px-20 max-sm:px-5">
    <router-link class="max-sm:mx-auto" to="/">
      <img
        class="w-14 dark:invert dark:brightness-0"
        src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg" 
        alt="Jule Icon"
      >
    </router-link>
    <div class="flex flex-wrap gap-5 max-sm:mx-auto">
      <a class="nav-link" href="https://manual.jule.dev" target="_blank">Manual</a>
      <router-link class="nav-link" to="/community">Community</router-link>
      <router-link class="nav-link" to="/contribute">Contribute</router-link>
    </div>
  </nav>
</template>
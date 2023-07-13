<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <nav v-if="theme === 'light'" class="pb-10">
    <div class="flex items-center justify-between px-24 py-5 max-sm:px-10">
      <router-link to="/" class="max-md:mx-auto">
        <img class="w-16" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg" alt="Jule Icon">
      </router-link>
      <div class="flex gap-10 text-lg max-md:hidden">
        <a href="https://manual.jule.dev" target="_blank">Manual</a>
        <router-link to="/community">Community</router-link>
        <router-link to="/contribute">Contribute</router-link>
      </div>
    </div>

    <div class="flex justify-center items-center gap-10 pb-5 px-24 max-sm:px-10 md:hidden text-lg">
      <a href="https://manual.jule.dev" target="_blank">Manual</a>
      <router-link to="/community">Community</router-link>
      <router-link to="/contribute">Contribute</router-link>
    </div>
  </nav>

  <nav v-if="theme === 'dark'" class="bg-jule-darkest text-white pb-10">
    <div class="flex items-center justify-between px-24 py-5 max-sm:px-10">
      <router-link to="/" class="max-md:mx-auto">
        <img class="w-16" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg" alt="Jule Icon">
      </router-link>
      <div class="flex gap-10 text-lg max-md:hidden">
        <a href="https://manual.jule.dev" target="_blank">Manual</a>
        <router-link to="/community">Community</router-link>
        <router-link to="/contribute">Contribute</router-link>
      </div>
    </div>

    <div class="flex justify-center items-center gap-10 pb-5 px-24 max-sm:px-10 md:hidden">
      <a href="https://manual.jule.dev" target="_blank">Manual</a>
      <router-link to="/community">Community</router-link>
      <router-link to="/contribute">Contribute</router-link>
    </div>
  </nav>
</template>
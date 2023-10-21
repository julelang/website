<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="max-w-screen-lg mx-auto p-5 flex max-md:flex-col justify-between items-center gap-5 text-sm">
    <router-link to="/">
        <img class="w-10" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.png">
      </router-link>
    <div class="flex flex-wrap justify-center gap-5">
      <router-link to="/downloads">Download</router-link>
      <a href="https://manual.jule.dev" target="_blank">Manual</a>
      <router-link to="/community">Community</router-link>
      <router-link to="/code-of-conduct">Code of Conduct</router-link>
    </div>
    <div class="text-right max-md:text-center">Copyright © 2023 The Jule Team<br><a href="https://github.com/julelang/jule" target="_blank" class="underline">Source code</a> is licensed under <a href="https://opensource.org/license/bsd-3-clause/" target="_blank" class="underline">BSD-3-Clause license</a></div>
  </footer>
</template>
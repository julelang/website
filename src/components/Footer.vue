<script>
import { RouterLink } from "vue-router"
</script>

<template>
  <footer class="flex flex-wrap justify-center gap-20 pt-32 pb-26 text-gray-800 dark:text-gray-400 g:px-50 max-lg:px-6">
    <router-link to="/"><img class="w-32 select-none" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg" alt="Jule Icon"></router-link>
    <div>
      <h1 class="font-bold">About</h1>
      <br>
      <div class="flex flex-col">
        <a href="/downloads" target="_blank">Download</a>
        <router-link to="/community">Community</router-link>
        <router-link to="/code-of-conduct">Code of Conduct</router-link>
      </div>
    </div>
    <div>
      <h1 class="font-bold">Get Started</h1>
      <br>
      <div class="flex flex-col">
        <a href="https://manual.jule.dev" target="_blank">Manual</a>
        <a href="https://manual.jule.dev/standard-library/" target="_blank">Standard Library</a>
      </div>
    </div>
    <div>
      <h1 class="font-bold">Contribute</h1>
      <br>
      <div class="flex flex-col">
        <router-link to="/contribute">Contributing</router-link>
        <a href="https://github.com/julelang/jule" target="_blank">Source Code</a>
        <a href="https://github.com/julelang/jule/fork" target="_blank">Fork JuleC</a>
        <a href="https://github.com/julelang/jule/issues" target="_blank">Issue Tracker</a>
      </div>
    </div>
    <div>
      <h1 class="font-bold">Connect</h1>
      <br>
      <div class="flex flex-col">
        <a href="https://github.com/julelang" target="_blank">GitHub Organization</a>
        <a href="https://github.com/julelang/jule/discussions" target="_blank">Discussions</a>
        <a href="https://discord.gg/CZhK7dyh9X" target="_blank">Discord Community</a>
      </div>
    </div>
  </footer>
  <div class="flex flex-wrap justify-center gap-20 pt-32 pb-12 text-gray-600 dark:text-gray-400 g:px-50 max-lg:px-6">
    <p align="center">
    Copyright © 2023 The Jule Team<br>
    <a href="https://github.com/julelang/website">Source code</a> is licensed under <a href="https://opensource.org/license/bsd-3-clause/">BSD-3-Clause license</a></p>
  </div>
</template>
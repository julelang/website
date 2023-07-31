<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="flex flex-wrap justify-center gap-20 pt-32 pb-26 bg-jule-darker text-gray-400 g:px-50 max-lg:px-6">
    <router-link to="/"><img class="w-32 select-none" src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg" alt="Jule Icon"></router-link>
    <div>
      <h1 class="font-bold">About</h1>
      <br>
      <ul>
        <li><a href="https://github.com/julelang/jule/releases" target="_blank">Download</a></li>
        <li><router-link to="/community">Community</router-link></li>
        <li><router-link to="/code-of-conduct">Code of Conduct</router-link></li>
      </ul>
    </div>
    <div>
      <h1 class="font-bold">Get Started</h1>
      <br>
      <ul>
        <li><a href="https://manual.jule.dev" target="_blank">Manual</a></li>
        <li><a href="https://manual.jule.dev/standard-library/" target="_blank">Standard Library</a></li>
      </ul>
    </div>
    <div>
      <h1 class="font-bold">Contribute</h1>
      <br>
      <ul>
        <li><a href="https://github.com/julelang/jule" target="_blank">Source code</a></li>
        <li><a href="https://github.com/julelang/jule/issues" target="_blank">Issue tracker</a></li>
        <li><a href="https://github.com/julelang/manual" target="_blank">Manual source code</a></li>
      </ul>
    </div>
    <div>
      <h1 class="font-bold">Connect</h1>
      <br>
      <ul>
        <li><a href="https://github.com/julelang" target="_blank">GitHub Organization</a></li>
        <li><a href="https://github.com/julelang/jule/discussions" target="_blank">Discussions</a></li>
        <li><a href="https://discord.gg/CZhK7dyh9X" target="_blank">Discord Community</a></li>
      </ul>
    </div>
  </footer>
  <div class="flex flex-wrap justify-center gap-20 pt-32 pb-12 bg-jule-darker text-gray-400 g:px-50 max-lg:px-6">
    <p align="center">
    Copyright © 2023 The Jule Team<br>
    <a href="https://github.com/julelang/website" target="_blank">Source code</a> is licensed under <a href="https://opensource.org/license/bsd-3-clause/" target="_blank">BSD-3-Clause license</a></p>
  </div>
</template>

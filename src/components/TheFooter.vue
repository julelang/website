<script>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
          <router-link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg" class="h-9" alt="Jule Logo" />
              <span class="self-center text-xl text-[var(--color-primary)] font-semibold whitespace-nowrap">Jule</span>
          </router-link>
          <ul class="flex flex-wrap items-center gap-5 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                  <router-link to="/downloads" class="hover:underline">Download</router-link>
              </li>
              <li>
                  <a class="hover:underline" href="https://manual.jule.dev" target="_blank">Manual</a>
              </li>
              <li>
                  <router-link to="/community" class="hover:underline">Community</router-link>
              </li>
              <li>
                  <router-link to="/code-of-conduct" class="hover:underline">Code of Conduct</router-link>
              </li>
          </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Copyright © {{new Date().getFullYear()}} The Jule Team<br><a href="https://github.com/julelang/jule" target="_blank" class="underline">Source code</a> is licensed under <a href="https://github.com/julelang/jule/blob/master/LICENSE" target="_blank" class="underline">BSD-3-Clause license</a>
      </span>
    </div>
  </footer>
</template>

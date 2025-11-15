<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="bg-[var(--bg-primary)] text-white px-6 py-12">
    <div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-lg font-semibold mb-4">Resources</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://manual.jule.dev"
              class="hover:text-gray-300 transition-colors"
              >Manual</a
            >
          </li>
          <li>
            <a
              href="https://manual.jule.dev/getting-started"
              class="hover:text-gray-300 transition-colors"
              >Getting Started</a
            >
          </li>
          <li>
            <a
              href="https://github.com/julelang/awesome-jule"
              class="hover:text-gray-300 transition-colors"
              >Awesome Jule</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Community</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://github.com/julelang"
              class="hover:text-gray-300 transition-colors"
              >GitHub</a
            >
          </li>
          <li>
            <a
              href="https://discord.gg/XNSUUDuGGQ"
              class="hover:text-gray-300 transition-colors"
              >Discord</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Project</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="https://github.com/julelang/jule"
              class="hover:text-gray-300 transition-colors"
              >Source Code</a
            >
          </li>
          <li>
            <a href="/future-of-jule" class="hover:text-gray-300 transition-colors"
              >Future of Jule</a
            >
          </li>
          <li>
            <a
              href="https://github.com/julelang/jule/issues"
              class="hover:text-gray-300 transition-colors"
              >Issue Tracker</a
            >
          </li>
        </ul>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      Copyright ©2023 The Jule Authors
      <br />
      Source code is licensed under
      <a
        href="https://github.com/julelang/jule/blob/master/LICENSE"
        target="_blank"
        class="underline"
        >BSD-3-Clause license</a
      >
    </span>
  </footer>
</template>

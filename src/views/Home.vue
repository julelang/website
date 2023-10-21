<script>
import { RouterLink } from 'vue-router';

import Code from '../components/CodeBlock.vue'

export default {
  components: {
    Code
  }
}
</script>

<template>
  <main>
    <div class="bg-[var(--bg-secondary)] text-white">
      <div class="max-w-screen-lg mx-auto py-7 px-5 flex flex-wrap justify-between items-center gap-2">
        <div>
          <div class="mb-2 text-5xl font-black">Jule</div>
          <div class="leading-6 text-xl">An effective programming language to build<br>efficient, fast, reliable and safe software.</div>
        </div>
        <router-link to="/downloads" class="py-2 px-7 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-darker)] duration-[0.3s] text-lg rounded-sm">Download</router-link>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto py-20 px-5 grid grid-cols-2 max-sm:grid-cols-1 gap-y-20 gap-x-10 leading-5">
      <div>
        <div class="font-black text-2xl mb-2">Performance</div>
        <div>Jule is extremly fast and memory efficient thanks to its efficient design and optimizing compiler.</div>
      </div>
      <div>
        <div class="font-black text-2xl mb-2">Safety</div>
        <div>Jule's static type system and principles disallows many errors when compile-time, and you have memory safety at runtime.</div>
      </div>
      <div>
        <div class="font-black text-2xl mb-2">Interoperability</div>
        <div>Jule has an API written in C++ for develop C++ extensions for Jule and integrates beautifully with C, C++, Objective-C, and Objective-C++.</div>
      </div>
      <div>
        <div class="font-black text-2xl mb-2">Effective</div>
        <div>Jule has built-in concurrency and supported by a cross-platform implemented standard library.</div>
      </div>
    </div>

    <Code />
  </main>
</template>
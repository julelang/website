<script>
import { RouterLink } from 'vue-router';

import Code from '../components/CodeBlock.vue'

export default {
  components: {
    Code,
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
        <div>Jule has an API written in C++ to develop C++ extensions for Jule and integrates beautifully with C, C++, Objective-C, and Objective-C++.</div>
      </div>
      <div>
        <div class="font-black text-2xl mb-2">Effective</div>
        <div>Jule has built-in concurrency and supported by a cross-platform implemented standard library.</div>
      </div>
    </div>

    <Code />

    <div class="max-w-screen-lg mx-auto px-5 py-20">
      <div class="p-10 bg-[var(--bg-secondary)] bg-gradient-to-t from-slate-600 text-white rounded-3xl">
        <div class="font-bold text-2xl">Open Source</div>
        Including important parts of Jule such as the reference compiler, standards library and API, is developed completely open source and free of charge, and its source code open at <a class="underline" href="https://github.com/julelang/jule">GitHub respository</a>, open to the contribution of the entire community.
        Many regular and non-regular contributors work together to make Jule more effective and stable.
        <br><br>
        <div class="font-bold text-2xl">Cross Platform</div>
        Jule has a cross-platform implementation, supports popular operating systems such as macOS, Linux, Windows and can generate code for popular architectures such as arm64, amd64, and intel 386.
        It is actively designed to implement all competencies cross-platform and focuses on a homogeneous experience.
        We're excited for it to have broader platform support in the future.
        <br><br>
        <div class="font-bold text-2xl">Well Documented</div>
        Jule has a well written and detailed manual.
        With each change on Jule, the manual is often updated at the same time, and documentation of even the newest updates is made available to the community immediately.
      </div>
    </div>

    <div class="bg-[steelblue] text-white">
      <div class="max-w-screen-lg mx-auto p-5">
        <div class="text-3xl text-center font-bold">Get Started</div>
        <br>
        <div class="text-xl text-center">
          Download Jule's compiler and start to program.<br>
          The manual will help you find your way.
        </div>
        <br><br>
        <div class="flex justify-center">
          <router-link to="/downloads" class="py-2 px-7 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-darker)] duration-[0.3s] text-lg rounded-sms">Download</router-link>
          <a href="https://manual.jule.dev" class="py-2 px-7 bg-[gray] hover:bg-[dimgray] duration-[0.3s] text-lg rounded-sm">Manual</a>
        </div>
      </div>
    </div>

  </main>
</template>

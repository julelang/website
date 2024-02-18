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
    <div class="bg-[var(--bg-primary)] text-white">
      <div class="max-w-screen-lg mx-auto py-7 px-5 justify-between items-center gap-2">
        <div>
          <div class="mb-2 text-5xl font-semibold">Jule</div>
          <div class="leading-7 text-xl">An effective programming language to build<br>efficient, fast, reliable and safe software.</div>
        </div>
        <div class="flexbox mt-8">
          <router-link to="/downloads" class="py-2 px-7 bg-[var(--color-primary)] hover:bg-[teal] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] hover:border-[teal] rounded-xl">Download</router-link>
          <a href="https://manual.jule.dev" class="ml-4 py-2 px-7 bg-transparent hover:bg-[var(--color-primary)] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] rounded-xl">Manual</a>
          <div class="ml-5 mt-4 font-light text-xs">Supported on Windows, macOS, and Linux</div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto py-20 px-5 grid grid-cols-2 max-sm:grid-cols-1 gap-y-8 gap-x-10 leading-5">
      <div class="rounded-xl border-[2.8px] border-[slateblue] p-4">
        <div class="font-semibold text-2xl mb-2 text-[slateblue]">Performance</div>
        <div>Jule is extremely fast and memory efficient thanks to its efficient design and optimizing compiler.</div>
      </div>
      <div class="rounded-xl border-[2.8px] border-[darkviolet] p-4">
        <div class="font-semibold text-2xl mb-2 text-[darkviolet]">Safety</div>
        <div>Jule's static type system and principles disallows many errors when compile-time, and you have memory safety at runtime.</div>
      </div>
      <div class="rounded-xl border-[2.8px] border-[teal] p-4">
        <div class="font-semibold text-2xl mb-2 text-[teal]">Interoperability</div>
        <div>Jule has an API written in C++ to develop C++ extensions for Jule and integrates beautifully with C, C++, Objective-C, and Objective-C++.</div>
      </div>
      <div class="rounded-xl border-[2.8px] border-[olive] p-4">
        <div class="font-semibold text-2xl mb-2 text-[olive]">Effective</div>
        <div>Jule has built-in concurrency and supported by a cross-platform implemented standard library.</div>
      </div>
    </div>

    <div class="bg-[var(--bg-primary)] h-20 rounded-tl-full ml-[50%] w-[50%]" />
    <div class="bg-[var(--bg-primary)] h-20 rounded-tl-full" />
    <div class="bg-[var(--bg-primary)]">
      <div class="max-w-screen-lg mx-auto px-5 py-20 text-white">
          <div>
            <div class="font-semibold text-2xl mb-2">Robust Performance</div>
            <div class="flex grid grid-cols-2 max-sm:grid-cols-1">
              <div class="mr-5 mb-5">
                Jule aims to be performant and for this it has an optimizing compiler that tries to make your code as good as possible.
                The standard library has also been developed with performance in mind.
                The compiler takes an optimized approach, such as evaluating constant expressions and generic instances at compile time.
                The generated back-end IR is created so that it can be compiled with trusted back-end compilers.
              </div>
            <div>
              <li>Capable optimizing compiler</li>
              <li>Performant and safe standard library</li>
              <li>Zero runtime cost generics</li>
              <li>Compile-time evaluations</li>
              <li>Trusted back-end IR compilers</li>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-lg mx-auto px-5 py-20 text-white">
          <div>
            <div class="font-semibold text-2xl mb-2">Shields Included</div>
            <div class="flex grid grid-cols-2 max-sm:grid-cols-1">
              <div class="mr-5 mb-5">
                Programs created with Jule are safe.
                It performs operational checks such as nil memory dereference, and boundary checking to prevent memory errors and guarantees memory safety.
                Prevents variable shading by default.
                It requires exceptional functions to be processed for error handling.
              </div>
            <div>
              <li>Statically typed</li>
              <li>Immutability by default</li>
              <li>Disallow variable shadowing by default</li>
              <li>Trusted exceptional functions for error handling</li>
              <li>Memory safety</li>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-screen-lg mx-auto px-5 py-20 text-white">
          <div>
            <div class="font-semibold text-2xl mb-2">Collaborative</div>
            <div class="flex grid grid-cols-2 max-sm:grid-cols-1">
              <div class="mr-5 mb-5">
                Jule has high interoperability with C++ and can theoretically be used with the whole C/C++ ecosystem.
                It also has an official rich API for C++ developers.
                Jule can access C/C++ functions and functions integrated with the API can be developed.
              </div>
            <div>
              <li>Interop with whole C/C++ ecosystem</li>
              <li>Rich Jule Runtime API for C++</li>
              <li>Compile to C++ IR</li>
              <li>Minimimum cost for exchange to Jule</li>
              <li>Extensioning Jule with C/C++</li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[var(--bg-primary)] h-20 rounded-br-full" />
    <div class="bg-[var(--bg-primary)] h-20 rounded-br-full w-[50%]" />

    <div class="max-w-screen-lg mx-auto px-5 py-20">
      <div class="p-10 bg-[var(--bg-secondary)] bg-gradient-to-t from-slate-600 text-white rounded-3xl">
        <div class="font-semibold text-2xl">Open Source</div>
        Including important parts of Jule such as the reference compiler, standards library and API, is developed completely open source and free of charge, and its source code open at <a class="underline" href="https://github.com/julelang/jule">GitHub respository</a>, open to the contribution of the entire community.
        Many regular and non-regular contributors work together to make Jule more effective and stable.
        <br><br>
        <div class="font-semibold text-2xl">Cross Platform</div>
        Jule has a cross-platform implementation, supports popular operating systems such as macOS, Linux, Windows and can generate code for popular architectures such as arm64, amd64, and intel 386.
        It is actively designed to implement all competencies cross-platform and focuses on a homogeneous experience.
        We're excited for it to have broader platform support in the future.
        <br><br>
        <div class="font-semibold text-2xl">Well Documented</div>
        Jule has a well written and detailed manual.
        With each change on Jule, the manual is often updated at the same time, and documentation of even the newest updates is made available to the community immediately.
      </div>
    </div>

    <div class="transition-all duration-200 bg-clip-text max-w-screen-lg mx-auto px-5 mb-20 bg-gradient-to-r from-blue-600 w-fit via-purple-500 to-orange-400">
      <a href="/future-of-jule" class="text-transparent hover:cursor-pointer text-center font-semibold text-3xl">Future of Jule</a>
    </div>

    <div class="bg-[steelblue] text-white">
      <div class="max-w-screen-lg mx-auto p-5">
        <div class="text-3xl text-center font-semibold">Get Started</div>
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

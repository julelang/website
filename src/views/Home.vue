<script>
import { RouterLink } from 'vue-router';
import Code from '../components/CodeBlock.vue'
import VSCodeLogo from '../components/VSCodeLogo.vue'
import GitHubLogo from '../components/GitHubLogo.vue'
import NeovimLogo from '../components/NeovimLogo.vue'
import JuleLogo from '../components/JuleLogo.vue'
import Heart from '../components/Heart.vue'

export default {
  components: {
    Code,
    JuleLogo,
    GitHubLogo,
    VSCodeLogo,
    NeovimLogo,
    Heart,
  },
}
</script>

<template>
  <link rel="stylesheet" href="https://raw.githubusercontent.com/Yukaii/github-highlightjs-themes/master/themes/github-dark-default.css">
  <main>
    <div class="bg-[var(--bg-primary)] pt-20 pb-10 text-white text-center">
      <JuleLogo class="text-white text-center mx-auto h-32"></JuleLogo>
      <div class="max-w-screen-lg mx-auto py-7 px-5 justify-between items-center gap-2">
        <div>
          <div class="mb-2 text-5xl font-semibold">Jule</div>
          <div class="leading-7 text-xl">An effective programming language to build<br>efficient, fast, reliable and safe software.</div>
        </div>
        <div class="flexbox mt-8">
          <router-link to="/downloads" class="select-none py-2 px-7 bg-[var(--color-primary)] hover:bg-[teal] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] hover:border-[teal] rounded-lg">Download</router-link>
          <a href="https://manual.jule.dev" class="select-none ml-4 py-2 px-7 bg-transparent hover:bg-[var(--color-primary)] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] rounded-lg">Manual</a>
          <div class="ml-5 mt-4 font-light text-xs">Supported on Windows, macOS, and Linux</div>
        </div>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto mt-40 max-lg:mt-20">
      <div class="font-bold leading-7 text-center text-2xl">Easy and Friendly</div>
      <div class="max-w-md mx-auto leading-7 mt-8 text-center text-xl">Jule is simple and easy to learn with friendly community. Ready for the help; language support for popular editors, official formatter tool and more.</div>
      <div class="mx-auto">
        <div class="flex justify-center">
          <VSCodeLogo class="mt-4 text-black mx-2 h-8"></VSCodeLogo>
          <NeovimLogo class="mt-4 text-black mx-2 h-8"></NeovimLogo>
        </div>
      </div>
    </div>

    <div class="bg-[var(--bg-primary)]">
      <svg viewBox="0 0 600 140" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,180 450,20 600,100 L600,00 L0,0 Z" style="stroke: none; fill:white;"></path>
      </svg>
      <div class="max-w-screen-lg m-0 p-0 mx-auto px-5 py-20 text-lg text-white">
        <div class="transition-all duration-200 bg-clip-text max-w-screen-lg mx-auto px-5 bg-gradient-to-r from-blue-600 w-fit via-purple-500 to-orange-400 hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-700 hover:to-orange-500">
          <a href="/future-of-jule" class="text-transparent hover:cursor-pointer text-center font-semibold text-4xl">Future of Jule</a>
        </div>
        <div class="mt-2 text-center font-light text-xs">Contribute or give us a star to support</div>
        <a href="https://github.com/julelang/jule">
          <GitHubLogo class="mt-2 text-white mx-auto h-6"></GitHubLogo>
        </a>
      </div>
      <div class="max-w-screen-lg mx-auto px-5 mt-20 pb-20">
        <div class="text-lg p-10 bg-[var(--bg-secondary)] bg-gradient-to-t from-slate-600 text-white rounded-3xl">
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
      <div class="font-bold mt-20 text-center text-white text-2xl">What's possible with Jule</div>
      <div class="max-w-screen-lg mx-auto py-20 px-5 grid grid-cols-2 max-lg:grid-cols-1 gap-y-8 gap-x-10 leading-5">
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">General Purpose Programming</div>
        <div class="text-lg ml-4 mr-4">Develop command line applications or automation, do financial calculations, work with io, analysis data, use C/C++ code, whatever you want, Jule is flexible enough to keep up.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
          <a href="https://manual.jule.dev/std/flag" class="select-none font-light text-[lightsteelblue] text-xs m-auto pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/flag</a>
          <a href="https://manual.jule.dev/std/bufio" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/bufio</a>
          <a href="https://manual.jule.dev/std/math-big" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/math/big</a>
          <a href="https://manual.jule.dev/std/encoding-csv" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/encoding/csv</a>
        </div>
      </div>
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">Network Programming</div>
        <div class="text-lg ml-4 mr-4">Easily develop network programs with built-in concurrency, easy multithreading, and a standard library with powerful implementations for I/O, socket, URL, concurrency and more.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
          <a href="https://manual.jule.dev/std/net" class="select-none font-light text-[lightsteelblue] text-xs m-auto pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/net</a>
          <a href="https://manual.jule.dev/std/sync" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/sync</a>
        </div>
      </div>
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">Systems Programming</div>
        <div class="text-lg ml-4 mr-4">Program many system software such as game engines and compilers with the ease of low-level programming and powerful cross-platform standard library.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
          <a href="https://manual.jule.dev/tools/julec" class="select-none font-light text-[lightsteelblue] text-xs m-auto pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">julec</a>
          <a href="https://manual.jule.dev/tools/julefmt" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">julefmt</a>
          <a href="https://manual.jule.dev/std/os" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/os</a>
          <a href="https://manual.jule.dev/std/sys" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/sys</a>
        </div>
      </div>
      <div class="rounded-lg bg-[var(--bg-secondary)] text-white">
        <div class="font-semibold text-2xl p-4">Compile-Time Empowered</div>
        <div class="text-lg ml-4 mr-4">Thanks to the powerful compile time, perform tasks such as reflection, evaluation and type matching at compile time for fast data processing, and more.</div>
        <div class="m-1 ml-4 mr-4 mb-4 p-2 rounded-br-lg rounded-bl-lg">
          <div class="font-light text-sm mt-1 mb-3">Popular Apps / Packages</div>
            <a href="https://manual.jule.dev/std/comptime" class="select-none font-light text-[lightsteelblue] text-xs m-auto pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/comptime</a>
            <a href="https://manual.jule.dev/std/encoding-json" class="select-none font-light text-[lightsteelblue] text-xs ml-1 pt-1 pb-1 pl-2 pr-2 bg-black rounded-lg">std/encoding/json</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[cadetblue] text-white pt-20 pb-20">
      <div class="font-bold text-center text-2xl">Community and Support</div>
      <Heart class="h-8 mt-2 text-center mx-auto"></Heart>
      <div class="max-w-md mx-auto leading-7 mt-8 text-center text-xl">
      The Jule community is active on Discord and GitHub Discussions. Friendly and ready to help.
      <br><br>
      Jule is distributed as completely open source on GitHub under the terms of the BSD 3-Clause license. Contribute to source code or just give a star to support Jule.</div>
      <div class="mx-auto mt-4">
        <div class="flex justify-center">
          <a href="https://github.com/julelang/jule"><GitHubLogo class="text-white mr-4 h-7"></GitHubLogo></a>
          <a href="https://discord.gg/XNSUUDuGGQ"><font-awesome-icon icon="fa-brands fa-discord" class="mt-1 text-xl"/></a>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { RouterLink } from "vue-router";
import Code from "../components/CodeBlock.vue";
import VSCodeLogo from "../components/VSCodeLogo.vue";
import GitHubLogo from "../components/GitHubLogo.vue";
import NeovimLogo from "../components/NeovimLogo.vue";
import EmacsLogo from "../components/EmacsLogo.vue";
import EcodeLogo from "../components/EcodeLogo.vue";
import JuleLogo from "../components/JuleLogo.vue";
import Heart from "../components/Heart.vue";
import hljs from "highlight.js";
import jule from "../jule";

hljs.registerLanguage("jule", jule.jule);

let code = [
  `let mut users: []User
json::Decode(data, &users) else {
  fmt::Println("JSON error: ", error)
  ret
}
fmt::Println(users)`,
  `c := make(chan int)
mut i := 0
for i < 1_000_000; i++ {
  co async fn() { c <- i }()
}
for v in c {
  fmt::Println("coroutine #", v)
}`,
  `fn IsEnoughSpace[T](buf: T, n: int): bool {
  const t = comptime::TypeOf(T)
  const match t.Kind() {
  | comptime::Slice:
    ret n <= cap(buf)
  | comptime::Array:
    ret n <= len(buf)
  }
}`,
  `fn Write(path: str, data: []byte) {
  path := integ::BytesFromStr(path)
  mode := integ::BytesFromStr("w")
  unsafe {
    f := extern.fopen(CharPtr(&path[0]), CharPtr(&mode[0]))
    extern.fwrite(&data[0], mem::SizeOf(byte), len(data), f)
    extern.fclose(f)
  }
}`,
  `fn main() {
  mut i := new(int)
  HandleCounter(i)
  fmt::Println("Counter: ", *i)
  // i is deallocated
}`,
  `#test
fn testTicker(t: &testing::T) {
  wantedTicks := 10
  mut ticks := 0
  Ticker(wantedTicks, &ticks)
  if ticks != wantedTicks {
    t.Errorf("got {}, expected {}", ticks, wantedTicks)
  }
}`,
];

export default {
  components: {
    Code,
    JuleLogo,
    GitHubLogo,
    VSCodeLogo,
    NeovimLogo,
    EmacsLogo,
    EcodeLogo,
    Heart,
  },
  async mounted() {
    // load syntax highlighting HTML from source code
    const highlight = function (value, index) {
      return hljs.highlight(value, {
        language: "jule",
        theme: "atom-one-dark",
      }).value;
    };

    const elementErrorHandling = document.getElementById("error-handling");
    const elementConcurrency = document.getElementById("concurrency");
    const elementCompileTime = document.getElementById("compile-time");
    const elementInteroperability = document.getElementById("interoperability");
    const elementMemoryManagement = document.getElementById("memory-management");
    const elementWritingTests = document.getElementById("writing-tests");

    elementErrorHandling.innerHTML = highlight(code[0]);
    elementConcurrency.innerHTML = highlight(code[1]);
    elementCompileTime.innerHTML = highlight(code[2]);
    elementInteroperability.innerHTML = highlight(code[3]);
    elementMemoryManagement.innerHTML = highlight(code[4]);
    elementWritingTests.innerHTML = highlight(code[5]);
  },
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://raw.githubusercontent.com/Yukaii/github-highlightjs-themes/master/themes/github-dark-default.css"
  />
  <main>
    <div
      class="flex items-center justify-center min-h-screen bg-[var(--bg-primary)] pt-20 pb-10 text-white text-center"
    >
      <div>
        <JuleLogo class="text-white text-center mx-auto h-32"></JuleLogo>
        <div
          class="max-w-(--breakpoint-lg) mx-auto py-7 px-5 justify-between items-center gap-2"
        >
          <div>
            <div class="mb-8 text-5xl font-semibold">Jule</div>
            <div class="leading-7 text-xl max-w-120">
              Simple and safe programming language with built-in concurrency, first-class
              C/C++ interoperability and powerful compile-time capabilities.
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <router-link
              to="/downloads"
              class="flex items-center space-x-1 w-min select-none py-2 px-7 bg-[var(--color-primary)] hover:bg-[teal] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] hover:border-[teal] rounded-lg"
            >
              <span>Download</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform transition-transform duration-200"
                :class="{ 'rotate-270': openedIndex === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </router-link>
            <a
              href="https://manual.jule.dev"
              class="flex items-center space-x-1 w-max select-none ml-4 py-2 px-7 bg-transparent hover:bg-[var(--color-primary)] duration-[0.3s] text-lg border-2 border-[var(--color-primary)] rounded-lg"
            >
              <span>Manual</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform transition-transform duration-200"
                :class="{ 'rotate-270': openedIndex === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
          <div class="flex justify-center ml-5 mt-4 font-light text-xs">
            Supported on
            <font-awesome-icon icon="fa-brands fa-windows" class="text-lg ml-2 mr-2" />
            <font-awesome-icon icon="fa-brands fa-apple" class="text-lg mr-2" />
            <font-awesome-icon icon="fa-brands fa-linux" class="text-lg" />
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-(--breakpoint-lg) mx-auto max-lg:mt-20">
      <div class="font-bold leading-7 text-center text-3xl mb-14">
        Works with your stack
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-y-8 justify-center items-center text-center"
      >
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-blue-900"
        >
          <font-awesome-icon icon="fa-brands fa-windows" class="text-3xl" />
        </div>
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-slate-700"
        >
          <font-awesome-icon icon="fa-brands fa-apple" class="text-3xl" />
        </div>
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-yellow-900"
        >
          <font-awesome-icon icon="fa-brands fa-linux" class="text-3xl" />
        </div>
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-sky-900"
        >
          <VSCodeLogo class="mx-auto text-white h-7"></VSCodeLogo>
        </div>
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-teal-900"
        >
          <NeovimLogo class="mx-auto text-white h-7"></NeovimLogo>
        </div>
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-violet-900"
        >
          <EmacsLogo class="mx-auto text-white h-7"></EmacsLogo>
        </div>
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-sky-800"
        >
          <EcodeLogo class="mx-auto text-white h-7"></EcodeLogo>
        </div>
        <div
          class="rounded-xl w-[80px] border border-[var(--border-color,rgba(255,255,255,0.1))] bg-[var(--bg-primary,#18181b)] p-3 shadow-lg text-white mx-auto bg-linear-to-t from-gray-600"
        >
          <GitHubLogo class="mx-auto text-white h-7"></GitHubLogo>
        </div>
      </div>
    </div>

    <div class="max-w-(--breakpoint-lg) mx-auto mt-40 max-lg:mt-20">
      <div class="font-bold leading-7 text-center text-3xl">Quick Look</div>
      <div class="mt-2 leading-7 text-center text-sm">
        Example codes are simplified. Import, function and type alias declarations
        removed.
      </div>
      <section class="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
          <!-- Card 1 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">Error Handling</h3>
            <p class="text-gray-400 text-md">
              Jule introduces exceptional functions for error handling. They are must be
              handled immediately, should break algorithm or return value if needed; no
              deferred error handling!
            </p>
            <pre id="error-handling" class="code text-[14px] overflow-auto"></pre>
          </div>

          <!-- Card 2 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">Concurrency</h3>
            <p class="text-gray-400 text-md">
              Jule offers lightweight coroutines for concurrency powered by its own
              scheduler. Write concurrent code with elegant syntax and without directly
              dealing with OS threads, using mutexes, channels, select statements, and
              more.
            </p>
            <pre id="concurrency" class="code text-[14px] overflow-auto"></pre>
          </div>

          <!-- Card 3 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">Compile Time</h3>
            <p class="text-gray-400 text-md">
              Jule provides powerful compile-time support; reflection, evaluation,
              matching, and more. Examine source files and types at comptime with no
              runtime cost!
            </p>
            <pre id="compile-time" class="code text-[14px] overflow-auto"></pre>
          </div>

          <!-- Card 4 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">Writing Tests</h3>
            <p class="text-gray-400 text-md">
              Jule provides built-in testing tools, empowered by the standard library.
              Test your code easily and fast.
            </p>
            <pre id="writing-tests" class="code text-[14px] overflow-auto"></pre>
          </div>

          <!-- Card 5 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">Memory Management</h3>
            <p class="text-gray-400 text-md">
              Jule provides deterministic memory management based on reference counting.
              Fast and efficient enough for most cases, suitable for real-time systems.
            </p>
            <pre id="memory-management" class="code text-[14px] overflow-auto"></pre>
          </div>

          <!-- Card 6 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">Interoperability</h3>
            <p class="text-gray-400 text-md">
              Jule can play with C/C++ code easily, provides an API for safe and simple
              experience. Just bind and use properly, do not port the whole code!
            </p>
            <pre id="interoperability" class="code text-[14px] overflow-auto"></pre>
          </div>
        </div>
      </section>
    </div>

    <div class="max-w-(--breakpoint-lg) mx-auto px-5 mt-20 pb-20">
      <div
        class="text-lg p-10 bg-[var(--bg-secondary)] bg-linear-to-t from-slate-600 text-white rounded-3xl"
      >
        <div class="font-semibold text-2xl">Open Source</div>
        Including important parts of Jule such as the reference compiler, standards
        library and API, is developed completely open source and free of charge, and its
        source code open at
        <a class="underline" href="https://github.com/julelang/jule">GitHub repository</a
        >, open to contributions from the entire community. Many regular and non-regular
        contributors work together to make Jule more effective and stable. <br /><br />
        <div class="font-semibold text-2xl">Cross Platform</div>
        Jule has a cross-platform implementation, supports popular operating systems such
        as macOS, Linux, Windows and can generate code for popular architectures such as
        arm64, amd64, and intel 386. It is actively designed to implement all competencies
        cross-platform and focuses on a homogeneous experience. We're excited for it to
        have broader platform support in the future.
        <br /><br />
        <div class="font-semibold text-2xl">Well Documented</div>
        Jule has a well written and detailed manual. With each change on Jule, the manual
        is often updated at the same time, and documentation of even the newest updates is
        made available to the community immediately.
      </div>
    </div>

    <div class="max-w-(--breakpoint-lg) m-0 p-0 mx-auto px-5 py-20 text-lg text-white">
      <div
        class="transition-all duration-200 bg-clip-text max-w-(--breakpoint-lg) mx-auto px-5 bg-linear-to-r from-blue-600 w-fit via-purple-500 to-orange-400 hover:bg-linear-to-r hover:from-blue-900 hover:via-purple-700 hover:to-orange-500"
      >
        <a
          href="/future-of-jule"
          class="relative inline-flex items-center justify-center px-6 py-2 text-white font-semibold rounded-full overflow-hidden group"
        >
          <span class="relative z-10">Future of Jule</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 relative z-10 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>

          <!-- Initial gradient -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          ></span>

          <!-- Hover gradient -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          ></span>
        </a>
      </div>
      <div class="mt-2 text-center font-light text-xs">
        Contribute or give us a star to support
      </div>
      <a href="https://github.com/julelang/jule" aria-label="GitHub Repository">
        <GitHubLogo class="mt-2 text-white mx-auto h-6"></GitHubLogo>
      </a>
    </div>

    <div class="max-w-(--breakpoint-lg) mx-auto mt-40 max-lg:mt-20">
      <div class="font-bold leading-7 text-center text-3xl">Built with Jule</div>
      <section class="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
          <!-- Card 1 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">
              <a href="https://github.com/julelang/jule/tree/master/src/julec">JuleC</a>
            </h3>
            <p class="text-gray-400 text-md">
              The official reference compiler of the Jule programming language. Written in
              Pure Jule.
            </p>
          </div>

          <!-- Card 2 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">
              <a href="https://github.com/julelang/jule/tree/master/std"
                >Standard Library</a
              >
            </h3>
            <p class="text-gray-400 text-md">
              The official standard library of the Jule programming language. Implemented
              and optimized for Pure Jule.
            </p>
          </div>

          <!-- Card 3 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">
              <a href="https://github.com/mertcandav/julenum">julenum </a>
            </h3>
            <p class="text-gray-400 text-md">
              A high-performance library for numerical methods and scientific computing in
              Jule, written in Pure Jule.
            </p>
          </div>

          <!-- Card 4 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">
              <a href="https://github.com/mertcandav/ldb">LDB</a>
            </h3>
            <p class="text-gray-400 text-md">
              Local, easy-to-use, thread-safe database for Jule, written in Pure Jule.
            </p>
          </div>

          <!-- Card 5 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">
              <a href="https://github.com/adamperkowski/jpu">JuleProtonUp</a>
            </h3>
            <p class="text-gray-400 text-md">
              JuleProtonUp is a fast and lightweight ProtonUp alternative.
            </p>
          </div>

          <!-- Card 6 -->
          <div
            class="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[var(--bg-primary,#18181b)] p-6 shadow-lg transition hover:shadow-xl hover:border-[rgba(255,255,255,0.2)] text-white flex flex-col gap-2 h-full"
          >
            <h3 class="text-lg font-semibold">
              <a href="https://github.com/adamperkowski/snapbox">Snapbox</a>
            </h3>
            <p class="text-gray-400 text-md">HTTP Client Library for Jule.</p>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-[cadetblue] text-white mt-20 pt-20 pb-20">
      <div class="font-bold text-center text-2xl">Community and Support</div>
      <Heart class="h-8 mt-2 text-center mx-auto"></Heart>
      <div class="max-w-md mx-auto leading-7 mt-8 text-center text-xl">
        The Jule community is active on Discord and GitHub Discussions. Ready to help.
        <br /><br />
        Jule is distributed as completely open source on GitHub under the terms of the BSD
        3-Clause license. Contribute to source code or just give a star to support Jule.
      </div>
      <div class="mx-auto mt-4">
        <div class="flex justify-center">
          <a href="https://github.com/julelang/jule" aria-label="GitHub Repository">
            <GitHubLogo class="text-white mr-4 h-7"></GitHubLogo>
          </a>
          <a href="https://discord.gg/XNSUUDuGGQ" aria-label="Discord Server">
            <font-awesome-icon icon="fa-brands fa-discord" class="mt-1 text-xl" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { ArrowRight, Star, BookOpen, ShieldCheck, Boxes, Cpu } from "@lucide/vue";
import JuleLogo from "@/components/JuleLogo.vue";
import BrandIcon from "@/components/BrandIcon.vue";
import CodeWindow from "@/components/CodeWindow.vue";
import VSCodeLogo from "@/components/VSCodeLogo.vue";
import NeovimLogo from "@/components/NeovimLogo.vue";
import EmacsLogo from "@/components/EmacsLogo.vue";
import EcodeLogo from "@/components/EcodeLogo.vue";
import {
  repo,
  repoFailed,
  releases,
  releasesError,
  loadRepo,
  loadReleases,
} from "@/lib/useRepo.js";
import { detectOS, OS_LABEL, formatCount } from "@/lib/github.js";

const os = ref("linux");
onMounted(() => {
  os.value = detectOS();
  loadRepo();
  loadReleases();
});
const latest = computed(
  () => releases.value?.find((r) => !r.prerelease && !r.draft) || releases.value?.[0]
);

const heroTabs = [
  {
    label: "Hello World",
    file: "hello.jule",
    code: `use "std/fmt"

fn main() {
    fmt::Println("Hello, World!")
}`,
  },
  {
    label: "Concurrency",
    file: "concurrency.jule",
    code: `use "std/fmt"

fn main() {
    c := make(chan int)
    mut i := 0
    for i < 1_000; i++ {
        spawn fn() { c <- i }()
    }
    for v in c {
        fmt::Println("thread #", v)
    }
}`,
  },
  {
    label: "Errors",
    file: "errors.jule",
    code: `use "std/encoding/json"
use "std/fmt"

fn main() {
    data := []byte("[1, 2, false]")
    let mut numbers: []int
    json::Decode(data, &numbers) catch {
        fmt::Println("JSON error: ", error)
        return
    }
    fmt::Println(numbers)
}`,
  },
];

const features = [
  {
    id: "error-handling",
    title: "Error Handling",
    text:
      "Jule introduces exceptional functions for error handling. Errors must be handled immediately, should break the algorithm, or return the value if needed. No deferred error handling!",
    code: `use "std/encoding/json"
use "std/fmt"

fn main() {
    data := []byte("[1, 2, false]")
    let mut numbers: []int
    json::Decode(data, &numbers) catch {
        fmt::Println("JSON error: ", error)
        return
    }
    fmt::Println(numbers)
}`,
  },
  {
    id: "concurrency",
    title: "Concurrency",
    text:
      "Jule offers threads for concurrency. Write concurrent code with elegant syntax, using mutexes, channels, select statements, and more.",
    code: `use "std/fmt"
use "std/sync"

fn task(id: int, mut wg: &sync::WaitGroup) {
    defer { wg.Done() }
    fmt::Println("Thread:", id)
}

fn main() {
    mut wg := sync::WaitGroup.New()

    mut i := 0
    for i < 5; i++ {
        wg.Add(1)
        spawn task(i, wg)
    }
    wg.Wait()
}`,
  },
  {
    id: "compile-time",
    title: "Compile Time",
    text:
      "Jule provides powerful compile-time support; reflection, evaluation, matching, and more. Examine source files and types at comptime with no runtime cost!",
    code: `use "std/comptime"
use "std/fmt"

fn isEnoughSpace[T: array | slice](buf: T, n: int): bool {
    const t = comptime::Typeof(T)
    const match t.Kind() {
    | comptime::Slice:
        return n <= cap(buf)
    | comptime::Array:
        return n <= len(buf)
    }
}

fn main() {
    s := make([]int, 10)
    fmt::Println(isEnoughSpace(s, 10))
    fmt::Println(isEnoughSpace(s, 11))
}`,
  },
  {
    id: "interoperability",
    title: "Interoperability",
    text:
      "Jule can play with C/C++ code easily, providing an API for a safe and simple experience. Just bind and use properly, do not port the whole code!",
    code: `use "std/integ"
use "std/integ/c"

extern type FILE: *unsafe

extern fn fopen(*c::Char, *c::Char): *extern.FILE
extern fn fputs(*c::Char, *extern.FILE): c::Int
extern fn fclose(*extern.FILE): c::Int

fn main() {
    path := integ::BytesFromString("foo.txt")
    mode := integ::BytesFromString("w")
    data := integ::BytesFromString("hello world")
    unsafe {
        f := extern.fopen((*c::Char)(&path[0]), (*c::Char)(&mode[0]))
        extern.fputs((*c::Char)(&data[0]), f)
        extern.fclose(f)
    }
}`,
  },
  {
    id: "memory",
    title: "Memory Management",
    text: "Jule provides deterministic memory management based on reference counting.",
    code: `use "std/fmt"

fn increaseCounter(mut i: &int) {
    *i++
}

fn main() {
    mut i := new(int)
    increaseCounter(i)
    fmt::Println("Counter: ", *i)
    i = nil // i is deallocated
}`,
  },
  {
    id: "tests",
    title: "Writing Tests",
    text:
      "Jule provides built-in testing tools, empowered by the standard library. Test your code easily and fast.",
    code: `use "std/testing"

fn Ticker(mut wanted: int, mut &ticks: *int) {
    for wanted > 0; wanted-- {
        *ticks++
    }
}

#test
fn testTicker(t: &testing::T) {
    wantedTicks := 10
    mut ticks := 0
    Ticker(wantedTicks, &ticks)
    if ticks != wantedTicks {
        t.Errorf("got {}, expected {}", ticks, wantedTicks)
    }
}`,
  },
];
const active = ref(0);
const activeTabs = computed(() => [
  {
    label: features[active.value].title,
    file: features[active.value].id + ".jule",
    code: features[active.value].code,
  },
]);

const projects = [
  {
    name: "julec",
    text:
      "The official reference compiler of the Jule programming language. Written in Pure Jule.",
    href: "https://github.com/julelang/jule/tree/master/src/julec",
    big: true,
  },
  {
    name: "Standard Library",
    text:
      "The official standard library of the Jule programming language. Implemented and optimized for Pure Jule.",
    href: "https://github.com/julelang/jule/tree/master/std",
    big: true,
  },
  {
    name: "julenum",
    text:
      "A high-performance library for numerical methods and scientific computing in Jule, written in Pure Jule.",
    href: "https://github.com/mertcandav/julenum",
  },
  {
    name: "LDB",
    text: "Local, easy-to-use, thread-safe database for Jule, written in Pure Jule.",
    href: "https://github.com/mertcandav/ldb",
  },
  {
    name: "JuleProtonUp",
    text: "A fast and lightweight ProtonUp alternative.",
    href: "https://github.com/adamperkowski/jpu",
  },
  {
    name: "Snapbox",
    text: "HTTP Client Library for Jule.",
    href: "https://github.com/adamperkowski/snapbox",
  },
];
</script>

<template>
  <main id="main">
    <!-- Hero -->
    <section class="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <JuleLogo
        class="pointer-events-none absolute -right-40 -top-24 h-[44rem] w-[44rem] text-accent opacity-[0.05]"
      />
      <div
        class="container-x relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.02fr_1fr]"
      >
        <div class="min-w-0">
          <RouterLink
            v-if="latest"
            :to="`/downloads/${latest.id}`"
            class="rise rise-1 mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted transition hover:border-accent hover:text-fg"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-ok"></span>
            <span
              ><span class="font-medium text-fg">{{ latest.tag_name }}</span> is out. See
              what’s new</span
            >
            <ArrowRight :size="14" />
          </RouterLink>
          <h1
            class="font-display rise rise-2 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-[4.4rem]"
          >
            Systems programming, simple and safe.
          </h1>
          <p
            class="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Jule is a programming language with built-in concurrency, first-class C/C++
            interoperability and powerful compile-time capabilities.
          </p>
          <div class="rise rise-4 mt-9 flex flex-wrap items-center gap-3">
            <RouterLink to="/downloads" class="btn btn-primary">
              <BrandIcon :name="os" class="text-lg" />
              Download for {{ OS_LABEL[os] }}
            </RouterLink>
            <a href="https://manual.jule.dev" class="btn btn-ghost"
              ><BookOpen :size="18" /> Read the manual</a
            >
          </div>
          <p class="rise rise-4 mt-5 text-sm text-dim">
            Free and open source under the BSD-3-Clause license.
          </p>
        </div>

        <div class="rise rise-3 relative min-w-0">
          <CodeWindow :tabs="heroTabs" min-height="23rem" />
        </div>
      </div>
    </section>

    <!-- Facts -->
    <section class="border-y border-line bg-soft" aria-label="Project at a glance">
      <dl class="container-x grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        <div class="py-6 md:px-6 md:first:pl-0">
          <dt class="text-sm text-dim">Latest release</dt>
          <dd class="mt-1 font-display text-2xl font-semibold">
            <RouterLink
              v-if="latest"
              :to="`/downloads/${latest.id}`"
              class="hover:text-accent"
              >{{ latest.tag_name }}</RouterLink
            >
            <a
              v-else-if="releasesError"
              href="https://github.com/julelang/jule/releases"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lg hover:text-accent"
              >On GitHub</a
            >
            <span v-else class="skeleton inline-block h-7 w-20 align-middle"></span>
          </dd>
        </div>
        <div class="py-6 pl-6 md:px-6">
          <dt class="text-sm text-dim">GitHub stars</dt>
          <dd class="mt-1 flex items-center gap-2 font-display text-2xl font-semibold">
            <template v-if="repo"
              ><Star :size="20" class="text-accent" />
              {{ formatCount(repo.stargazers_count) }}</template
            >
            <a
              v-else-if="repoFailed"
              href="https://github.com/julelang/jule"
              target="_blank"
              rel="noopener noreferrer"
              class="text-lg hover:text-accent"
              >On GitHub</a
            >
            <span v-else class="skeleton inline-block h-7 w-16"></span>
          </dd>
        </div>
        <div class="border-t border-line py-6 md:border-t-0 md:px-6">
          <dt class="text-sm text-dim">Runs on</dt>
          <dd class="mt-1 flex items-center gap-3 font-display text-2xl font-semibold">
            <BrandIcon name="windows" /><BrandIcon name="apple" /><BrandIcon
              name="linux"
            />
          </dd>
        </div>
        <div class="border-t border-line py-6 pl-6 md:border-t-0 md:px-6">
          <dt class="text-sm text-dim">Targets</dt>
          <dd class="mt-1 font-mono text-[0.95rem] font-medium leading-8">
            amd64 · arm64 · 386
          </dd>
        </div>
      </dl>
    </section>

    <!-- Quick Look -->
    <section class="container-x py-24 md:py-32">
      <div class="max-w-2xl">
        <h2 class="font-display text-4xl font-semibold md:text-5xl">
          A quick look at the language
        </h2>
        <p class="mt-4 text-lg text-muted">
          Example code is simplified: import, function and type alias declarations are
          removed.
        </p>
      </div>
      <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <div
          role="tablist"
          aria-orientation="vertical"
          class="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
          aria-label="Language features"
        >
          <button
            v-for="(f, i) in features"
            :key="f.id"
            role="tab"
            type="button"
            :aria-selected="i === active"
            class="group shrink-0 rounded-xl border px-4 py-3 text-left transition lg:shrink"
            :class="
              i === active
                ? 'border-line bg-surface'
                : 'border-transparent hover:bg-surface/60'
            "
            @click="active = i"
          >
            <span
              class="flex items-center gap-2.5 font-display text-lg font-semibold"
              :class="i === active ? 'text-fg' : 'text-muted group-hover:text-fg'"
            >
              <span
                class="h-2 w-2 rotate-45 transition"
                :class="i === active ? 'bg-accent' : 'bg-line'"
              ></span>
              {{ f.title }}
            </span>
            <span
              v-if="i === active"
              class="mt-1.5 hidden text-[0.92rem] leading-relaxed text-muted lg:block"
              >{{ f.text }}</span
            >
          </button>
        </div>
        <div class="min-w-0">
          <p class="mb-4 text-[0.95rem] leading-relaxed text-muted lg:hidden">
            {{ features[active].text }}
          </p>
          <CodeWindow :key="active" :tabs="activeTabs" min-height="33rem" />
        </div>
      </div>
    </section>

    <!-- Why Jule -->
    <section class="border-y border-line bg-soft py-24 md:py-32">
      <div class="container-x">
        <h2 class="max-w-3xl font-display text-4xl font-semibold md:text-5xl">
          Built in the open, for every platform
        </h2>
        <div class="mt-12 grid gap-4 md:grid-cols-6">
          <div class="facet md:col-span-4">
            <div class="facet-in p-7 md:p-8">
              <ShieldCheck :size="26" class="text-accent" />
              <h3 class="mt-4 font-display text-2xl font-semibold">Open Source</h3>
              <p class="mt-2 max-w-xl leading-relaxed text-muted">
                Including important parts of Jule, such as the reference compiler,
                standard library and API, it is developed completely open source and free
                of charge, and its source code is open in the GitHub repository, open to
                contributions from the entire community. Many regular and non-regular
                contributors work together to make Jule more effective and stable.
              </p>
              <a
                href="https://github.com/julelang/jule"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-sm mt-6"
                ><BrandIcon name="github" class="text-base" /> GitHub repository</a
              >
            </div>
          </div>
          <div class="facet md:col-span-2">
            <div class="facet-in p-7 md:p-8">
              <Cpu :size="26" class="text-accent" />
              <h3 class="mt-4 font-display text-2xl font-semibold">Cross Platform</h3>
              <p class="mt-2 leading-relaxed text-muted">
                Supports macOS, Linux and Windows, and generates code for arm64, amd64 and
                Intel 386 with a homogeneous experience.
              </p>
            </div>
          </div>
          <div class="facet md:col-span-3">
            <div class="facet-in p-7 md:p-8">
              <BookOpen :size="26" class="text-accent" />
              <h3 class="mt-4 font-display text-2xl font-semibold">Well Documented</h3>
              <p class="mt-2 leading-relaxed text-muted">
                A well written and detailed manual. With each change on Jule it is often
                updated at the same time, so even the newest updates are documented right
                away.
              </p>
              <a
                href="https://manual.jule.dev"
                class="link mt-4 inline-block text-sm font-medium"
                >Open the manual</a
              >
            </div>
          </div>
          <div class="facet md:col-span-3">
            <div class="facet-in p-7 md:p-8">
              <Boxes :size="26" class="text-accent" />
              <h3 class="mt-4 font-display text-2xl font-semibold">Written in Jule</h3>
              <p class="mt-2 leading-relaxed text-muted">
                The reference compiler and the standard library are Pure Jule. Much of the
                compiler lives in the standard library, ready for tool development.
              </p>
              <RouterLink
                to="/future-of-jule"
                class="link mt-4 inline-block text-sm font-medium"
                >Future of Jule</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section class="container-x py-24 md:py-28">
      <div class="grid items-start gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 class="font-display text-4xl font-semibold">Works with your stack</h2>
          <p class="mt-4 max-w-sm text-lg text-muted">
            Jule support is available for the editors you already use.
          </p>
        </div>
        <ul class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <li
            v-for="e in [
              { n: 'VS Code', c: VSCodeLogo },
              { n: 'Neovim', c: NeovimLogo },
              { n: 'Emacs', c: EmacsLogo },
              { n: 'Ecode', c: EcodeLogo },
            ]"
            :key="e.n"
            class="flex flex-col items-center gap-3 rounded-xl border border-line bg-surface px-4 py-6 text-fg"
          >
            <component :is="e.c" class="h-9 w-9" />
            <span class="text-sm font-medium text-muted">{{ e.n }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Built with Jule -->
    <section class="border-t border-line bg-soft py-24 md:py-32">
      <div class="container-x">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <h2 class="font-display text-4xl font-semibold md:text-5xl">Built with Jule</h2>
          <a
            href="https://github.com/julelang/awesome-jule"
            target="_blank"
            rel="noopener noreferrer"
            class="link text-sm font-medium"
            >Explore Awesome Jule</a
          >
        </div>
        <div class="mt-10 grid gap-4 md:grid-cols-2">
          <a
            v-for="p in projects.filter((p) => p.big)"
            :key="p.name"
            :href="p.href"
            target="_blank"
            rel="noopener noreferrer"
            class="facet group block"
          >
            <div class="facet-in p-7 transition group-hover:bg-surface2">
              <div class="font-display text-2xl font-semibold">{{ p.name }}</div>
              <p class="mt-2 max-w-md text-muted">{{ p.text }}</p>
            </div>
          </a>
        </div>
        <ul class="mt-4 grid gap-x-10 md:grid-cols-2">
          <li
            v-for="p in projects.filter((p) => !p.big)"
            :key="p.name"
            class="border-b border-line"
          >
            <a
              :href="p.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-baseline justify-between gap-6 py-4"
            >
              <span class="min-w-0">
                <span class="block font-medium text-fg group-hover:text-accent">{{
                  p.name
                }}</span>
                <span class="block text-sm text-muted">{{ p.text }}</span>
              </span>
              <ArrowRight
                :size="16"
                class="shrink-0 text-dim transition group-hover:translate-x-1 group-hover:text-accent"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Community -->
    <section class="container-x py-24 md:py-32">
      <div
        class="facet facet-both"
        style="
          --cut: 34px;
          --facet-line: color-mix(in srgb, var(--c-accent) 45%, var(--c-line));
        "
      >
        <div class="facet-in relative overflow-hidden p-8 md:p-14">
          <JuleLogo
            class="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 text-accent opacity-[0.07]"
          />
          <div class="relative max-w-2xl">
            <h2 class="font-display text-4xl font-semibold md:text-5xl">
              Come build Jule with us
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-muted">
              The Jule community is active on Discord and GitHub Discussions, ready to
              help. Contribute to the source code, or just give a star to support Jule.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="https://discord.gg/XNSUUDuGGQ"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
                ><BrandIcon name="discord" class="text-lg" /> Join Discord</a
              >
              <a
                href="https://github.com/julelang/jule"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost"
                ><Star :size="17" /> Star on GitHub</a
              >
              <RouterLink to="/contribute" class="btn btn-ghost"
                >How to contribute</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import JuleLogo from "./JuleLogo.vue";
import BrandIcon from "./BrandIcon.vue";
import { groups, isExternal } from "@/lib/nav.js";

const year = new Date().getFullYear();
const cols = ["Learn", "Project", "Community"].map((t) =>
  groups.find((g) => g.title === t)
);
cols[1] = {
  title: "Project",
  items: [...cols[1].items, ...groups.find((g) => g.title === "Tools").items],
};
</script>

<template>
  <footer class="border-t border-line bg-soft">
    <div class="container-x grid gap-12 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div>
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2.5"
          aria-label="Jule home"
        >
          <JuleLogo class="h-9 w-9 text-accent" />
          <span class="font-display text-2xl font-semibold tracking-tight">Jule</span>
        </RouterLink>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          Simple and safe programming language with built-in concurrency, C/C++
          interoperability and compile-time power.
        </p>
        <div class="mt-5 flex gap-3 text-xl text-muted">
          <a
            href="https://github.com/julelang"
            class="transition hover:text-fg"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            ><BrandIcon name="github"
          /></a>
          <a
            href="https://discord.gg/XNSUUDuGGQ"
            class="transition hover:text-fg"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
            ><BrandIcon name="discord"
          /></a>
        </div>
      </div>
      <div v-for="c in cols" :key="c.title">
        <h3 class="mb-3 text-sm font-semibold text-fg">{{ c.title }}</h3>
        <ul class="space-y-2 text-sm">
          <li v-for="i in c.items" :key="i.href">
            <a
              v-if="isExternal(i.href)"
              :href="i.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted transition hover:text-fg"
              >{{ i.title }}</a
            >
            <RouterLink v-else :to="i.href" class="text-muted transition hover:text-fg">{{
              i.title
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-lines">
      <div
        class="container-x flex flex-col gap-1 py-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between"
      >
        <span>Copyright © 2023–{{ year }} The Jule Project Contributors</span>
        <span>
          Source code is licensed under the
          <a
            class="underline hover:text-fg"
            href="https://github.com/julelang/jule/blob/master/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            >BSD-3-Clause license</a
          >
        </span>
      </div>
    </div>
  </footer>
</template>
